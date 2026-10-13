// lib/transformer.ts  (sem imports nativos: roda no celular e no Node)
export type Meta = {
  input_dim: number;
  hidden_dim: number;
  num_layers: number;
  num_heads: number;
  ff_dim: number;
  num_classes: number;
  n_frames: number;
  eps: number;
  classes?: string[];
};

export type Manifest = {
  meta: Meta;
  tensores: {
    nome: string;
    shape: number[];
    offset: number;
    tamanho: number;
  }[];
};
export type Modelo = { meta: Meta; w: Record<string, Float32Array> };

export function criarModelo(pesos: Float32Array, manifest: Manifest): Modelo {
  const w: Record<string, Float32Array> = {};
  for (const t of manifest.tensores) {
    w[t.nome] = pesos.subarray(t.offset, t.offset + t.tamanho);
  }
  return { meta: manifest.meta, w };
}

// y = x · Wᵀ + b   (x: [n, inDim], W: [outDim, inDim])
function linear(
  x: Float32Array,
  n: number,
  inDim: number,
  W: Float32Array,
  b: Float32Array,
  outDim: number,
) {
  const y = new Float32Array(n * outDim);
  for (let t = 0; t < n; t++) {
    const xo = t * inDim,
      yo = t * outDim;
    for (let o = 0; o < outDim; o++) {
      let s = b[o];
      const wo = o * inDim;
      for (let i = 0; i < inDim; i++) s += x[xo + i] * W[wo + i];
      y[yo + o] = s;
    }
  }
  return y;
}

// LayerNorm(a + b) por frame
function somaENorma(
  a: Float32Array,
  b: Float32Array,
  n: number,
  d: number,
  gama: Float32Array,
  beta: Float32Array,
  eps: number,
) {
  const y = new Float32Array(n * d);
  for (let t = 0; t < n; t++) {
    const o = t * d;
    let media = 0;
    for (let i = 0; i < d; i++) media += a[o + i] + b[o + i];
    media /= d;
    let variancia = 0;
    for (let i = 0; i < d; i++) {
      const v = a[o + i] + b[o + i] - media;
      variancia += v * v;
    }
    variancia /= d;
    const inv = 1 / Math.sqrt(variancia + eps);
    for (let i = 0; i < d; i++) {
      y[o + i] = (a[o + i] + b[o + i] - media) * inv * gama[i] + beta[i];
    }
  }
  return y;
}

function atencao(
  x: Float32Array,
  n: number,
  d: number,
  heads: number,
  inW: Float32Array,
  inB: Float32Array,
  outW: Float32Array,
  outB: Float32Array,
) {
  const hd = d / heads;
  const qkv = linear(x, n, d, inW, inB, 3 * d); // por frame: [q | k | v]
  const ctx = new Float32Array(n * d);
  const escala = 1 / Math.sqrt(hd);
  const scores = new Float64Array(n);

  for (let h = 0; h < heads; h++) {
    const qo = h * hd,
      ko = d + h * hd,
      vo = 2 * d + h * hd;
    for (let i = 0; i < n; i++) {
      let max = -Infinity;
      for (let j = 0; j < n; j++) {
        let s = 0;
        for (let k = 0; k < hd; k++)
          s += qkv[i * 3 * d + qo + k] * qkv[j * 3 * d + ko + k];
        s *= escala;
        scores[j] = s;
        if (s > max) max = s;
      }
      let soma = 0;
      for (let j = 0; j < n; j++) {
        scores[j] = Math.exp(scores[j] - max);
        soma += scores[j];
      }
      for (let k = 0; k < hd; k++) {
        let a = 0;
        for (let j = 0; j < n; j++) a += scores[j] * qkv[j * 3 * d + vo + k];
        ctx[i * d + h * hd + k] = a / soma;
      }
    }
  }
  return linear(ctx, n, d, outW, outB, d);
}

// entrada: [n_frames * input_dim] (já com o padding de zeros no final)
export function logits(modelo: Modelo, entrada: Float32Array): Float32Array {
  const { meta, w } = modelo;
  const d = meta.hidden_dim;
  const n = entrada.length / meta.input_dim;

  let x = linear(
    entrada,
    n,
    meta.input_dim,
    w["embedding.weight"],
    w["embedding.bias"],
    d,
  );

  for (let l = 0; l < meta.num_layers; l++) {
    const p = `transformer.layers.${l}.`;
    const a = atencao(
      x,
      n,
      d,
      meta.num_heads,
      w[p + "self_attn.in_proj_weight"],
      w[p + "self_attn.in_proj_bias"],
      w[p + "self_attn.out_proj.weight"],
      w[p + "self_attn.out_proj.bias"],
    );
    const x1 = somaENorma(
      x,
      a,
      n,
      d,
      w[p + "norm1.weight"],
      w[p + "norm1.bias"],
      meta.eps,
    );

    const h = linear(
      x1,
      n,
      d,
      w[p + "linear1.weight"],
      w[p + "linear1.bias"],
      meta.ff_dim,
    );
    for (let i = 0; i < h.length; i++) if (h[i] < 0) h[i] = 0; // ReLU
    const f = linear(
      h,
      n,
      meta.ff_dim,
      w[p + "linear2.weight"],
      w[p + "linear2.bias"],
      d,
    );

    x = somaENorma(
      x1,
      f,
      n,
      d,
      w[p + "norm2.weight"],
      w[p + "norm2.bias"],
      meta.eps,
    );
  }

  const media = new Float32Array(d);
  for (let t = 0; t < n; t++)
    for (let i = 0; i < d; i++) media[i] += x[t * d + i] / n;

  return linear(media, 1, d, w["fc.weight"], w["fc.bias"], meta.num_classes);
}
