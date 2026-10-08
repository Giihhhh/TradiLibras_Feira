export const N_FRAMES = 30;
export const N_FEATURES = 63;

// Equivale ao normalizar_landmarks() do api.py
export function normalizar(pontos: number[]): number[] {
  const wx = pontos[0],
    wy = pontos[1],
    wz = pontos[2]; // punho = landmark 0
  const out = new Array<number>(N_FEATURES);
  let maxDist = 0;
  for (let i = 0; i < 21; i++) {
    const x = pontos[3 * i] - wx;
    const y = pontos[3 * i + 1] - wy;
    const z = pontos[3 * i + 2] - wz;
    out[3 * i] = x;
    out[3 * i + 1] = y;
    out[3 * i + 2] = z;
    maxDist = Math.max(maxDist, Math.hypot(x, y, z));
  }
  if (maxDist > 0) for (let i = 0; i < N_FEATURES; i++) out[i] /= maxDist;
  return out;
}
