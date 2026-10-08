import { Asset } from "expo-asset";
import { File } from "expo-file-system";
import manifest from "../assets/models/pesos.json";
import { N_FEATURES, N_FRAMES } from "./normalizar";
import { criarModelo, logits, type Manifest, type Modelo } from "./transformer";

export const LETRAS = Array.from({ length: 26 }, (_, i) =>
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
      // copia para garantir alinhamento de 4 bytes
      const pesos = new Float32Array(
        bytes.buffer.slice(
          bytes.byteOffset,
          bytes.byteOffset + bytes.byteLength,
        ),
      );
      const modelo = criarModelo(pesos, manifest as Manifest);
      if (modelo.meta.num_classes !== LETRAS.length) {
        console.warn(
          "O modelo tem",
          modelo.meta.num_classes,
          "classes, mas LETRAS tem",
          LETRAS.length,
        );
      }
      return modelo;
    })().catch((e) => {
      modeloPromise = null; // permite tentar de novo
      throw e;
    });
  }
  return modeloPromise;
}

export async function prever(sequencia: number[][]) {
  if (sequencia.length === 0) return { erro: "nenhuma mão detectada" as const };

  const modelo = await carregarModelo();

  const frames = sequencia.slice(-N_FRAMES);
  const dados = new Float32Array(N_FRAMES * N_FEATURES); // zeros no final
  frames.forEach((f, i) => dados.set(f, i * N_FEATURES));

  await new Promise((r) => setTimeout(r, 0)); // deixa a tela mostrar o "carregando"
  const saida = logits(modelo, dados);

  const max = Math.max(...saida);
  const exps = Array.from(saida, (l) => Math.exp(l - max));
  const soma = exps.reduce((a, b) => a + b, 0);
  const probs = exps.map((e) => e / soma);

  const idx = probs.indexOf(Math.max(...probs));
  return { letra: LETRAS[idx], confianca: Math.round(probs[idx] * 1000) / 10 };
}
