// @ts-nocheck
// scripts/testar-transformer.ts
import { readFileSync } from "node:fs";
import { criarModelo, logits } from "../lib/transformer";

const manifest = JSON.parse(readFileSync("assets/models/pesos.json", "utf8"));
const buf = readFileSync("assets/models/pesos.bin");
const pesos = new Float32Array(
  buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength),
);
const modelo = criarModelo(pesos, manifest);
const teste = JSON.parse(readFileSync("teste_modelo.json", "utf8"));

let maxErro = 0;
teste.entradas.forEach((e: number[], i: number) => {
  const saida = logits(modelo, new Float32Array(e));
  teste.logits[i].forEach((v: number, k: number) => {
    maxErro = Math.max(maxErro, Math.abs(v - saida[k]));
  });
});
console.log("erro máximo vs PyTorch:", maxErro);

const t0 = Date.now();
for (let r = 0; r < 5; r++) logits(modelo, new Float32Array(teste.entradas[0]));
console.log("tempo médio (no PC):", (Date.now() - t0) / 5, "ms");
