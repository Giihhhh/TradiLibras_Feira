declare function detectHandLandmarks(frame: any): {
  hands?: { x: number; y: number; z: number }[][];
  error?: string;
} | null;
