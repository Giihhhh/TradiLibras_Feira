import { Asset } from "expo-asset";
import { File } from "expo-file-system";
import manifest from "../assets/models/pesos.json";
import { N_FEATURES, N_FRAMES } from "./normalizar";
import { criarModelo, logits, type Manifest, type Modelo } from "./transformer";

const LETRAS_PADRAO = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i),
);

let modeloPromise: Promise<Modelo> | null = null;

export function carregarModelo() {
  if (!modeloPromise) {
    modeloPromise = (async () => {
      const asset = await Asset.fromModule(
        require("../assets/models/pesos.bin"),
      ).downloadAsync();
      const bytes = await new File(asset.localUri!).bytes();
      const pesos = new Float32Array(
        bytes.buffer.slice(
          bytes.byteOffset,
          bytes.byteOffset + bytes.byteLength,
        ),
      );
      return criarModelo(pesos, manifest as Manifest);
    })().catch((e) => {
      modeloPromise = null;
      throw e;
    });
  }
  return modeloPromise;
}

export async function prever(sequencia: number[][]) {
  if (sequencia.length === 0) return { erro: "nenhuma mão detectada" as const };

  const modelo = await carregarModelo();
  const rotulos = modelo.meta.classes ?? LETRAS_PADRAO;

  const frames = sequencia.slice(-N_FRAMES);
  const dados = new Float32Array(N_FRAMES * N_FEATURES); // zeros no final
  frames.forEach((f, i) => dados.set(f, i * N_FEATURES));

  await new Promise((r) => setTimeout(r, 0));
  const saida = logits(modelo, dados);

  const max = Math.max(...saida);
  const exps = Array.from(saida, (l) => Math.exp(l - max));
  const soma = exps.reduce((a, b) => a + b, 0);
  const probs = exps.map((e) => e / soma);

  const ordem = probs
    .map((p, i) => [i, p] as const)
    .sort((a, b) => b[1] - a[1]);
  console.log(
    "top3:",
    ordem
      .slice(0, 3)
      .map(([i, p]) => `${rotulos[i]} ${(p * 100).toFixed(0)}%`)
      .join(" | "),
  );

  const [idx, melhor] = ordem[0];
  return { letra: rotulos[idx], confianca: Math.round(melhor * 1000) / 10 };
}
