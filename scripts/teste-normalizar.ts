import { normalizar } from "../lib/normalizar";

const pts = Array.from(
  { length: 63 },
  (_, i) => Math.sin(i * 0.37) * 0.5 + 0.5,
);
const n = normalizar(pts);
console.log(
  n
    .slice(0, 6)
    .map((v) => v.toFixed(6))
    .join(" "),
);
console.log(
  n
    .slice(-3)
    .map((v) => v.toFixed(6))
    .join(" "),
);
