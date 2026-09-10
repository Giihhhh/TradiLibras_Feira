/// app/(tabs)/videoMap.ts
type LetraInfo = {
  video: any;
};

export const dicionarioMap: Record<string, LetraInfo> = {
  A: {
    video: require("@/assets/images/videos/videoa.mp4"),
  },
  B: {
    video: require("@/assets/images/videos/videob.mp4"),
  },
  C: {
    video: require("@/assets/images/videos/videoc.mp4"),
  },
  D: {
    video: require("@/assets/images/videos/videod.mp4"),
  },
  E: {
    video: require("@/assets/images/videos/videoe.mp4"),
  },
  F: {
    video: require("@/assets/images/videos/videof.mp4"),
  },
  G: {
    video: require("@/assets/images/videos/videog.mp4"),
  },
  H: {
    video: require("@/assets/images/videos/videoh.mp4"),
  },
  I: {
    video: require("@/assets/images/videos/videoi.mp4"),
  },
  J: {
    video: require("@/assets/images/videos/videoj.mp4"),
  },
  K: {
    video: require("@/assets/images/videos/videok.mp4"),
  },
  L: {
    video: require("@/assets/images/videos/videol.mp4"),
  },
  M: {
    video: require("@/assets/images/videos/videom.mp4"),
  },
  N: {
    video: require("@/assets/images/videos/videon.mp4"),
  },
  O: {
    video: require("@/assets/images/videos/videoo.mp4"),
  },
  P: {
    video: require("@/assets/images/videos/videop.mp4"),
  },
  Q: {
    video: require("@/assets/images/videos/videoq.mp4"),
  },
  R: {
    video: require("@/assets/images/videos/videor.mp4"),
  },
  S: {
    video: require("@/assets/images/videos/videos.mp4"),
  },
  T: {
    video: require("@/assets/images/videos/videot.mp4"),
  },
  U: {
    video: require("@/assets/images/videos/videou.mp4"),
  },
  V: {
    video: require("@/assets/images/videos/videov.mp4"),
  },
  W: {
    video: require("@/assets/images/videos/videow.mp4"),
  },
  X: {
    video: require("@/assets/images/videos/videox.mp4"),
  },
  Y: {
    video: require("@/assets/images/videos/videoy.mp4"),
  },
  Z: {
    video: require("@/assets/images/videos/videoz.mp4"),
  },
  // ... dentro do mesmo dicionarioMap, junto com A, B, C... Z:

  OI: {
    video: require("../assets/images/videos/videooi.mp4"),
  },
  BOMDIA: {
    video: require("../assets/images/videos/videobomdia.mp4"),
  },
  BOATARDE: {
    video: require("../assets/images/videos/videoboatarde.mp4"),
  },
  BOANOITE: {
    video: require("../assets/images/videos/videoboanoite.mp4"),
  },
  TCHAU: {
    video: require("../assets/images/videos/videotchau.mp4"),
  },
  TUDOBEM: {
    video: require("../assets/images/videos/videotudobem.mp4"),
  },
  PRAZER: {
    video: require("../assets/images/videos/videoprazeremconhecervoce.mp4"),
  },

  // ⚠️ Os vídeos abaixo (números, cores, verbos) ainda não existem na pasta
  // assets/images/videos/ — adicione os arquivos .mp4 com esses nomes exatos
  // que o require() vai encontrar sozinho, sem precisar mexer em mais nada.
  "1": {
    video: require("../assets/images/videos/videonumero1.mp4"),
  },
  "2": {
    video: require("../assets/images/videos/videonumero2.mp4"),
  },
  "3": {
    video: require("../assets/images/videos/videonumero3.mp4"),
  },
  "4": {
    video: require("../assets/images/videos/videonumero4.mp4"),
  },
  "5": {
    video: require("../assets/images/videos/videonumero5.mp4"),
  },
  "6": {
    video: require("../assets/images/videos/videonumero6.mp4"),
  },
  "7": {
    video: require("../assets/images/videos/videonumero7.mp4"),
  },
  "8": {
    video: require("../assets/images/videos/videonumero8.mp4"),
  },
  "9": {
    video: require("../assets/images/videos/videonumero9.mp4"),
  },
  "10": {
    video: require("../assets/images/videos/videonumero10.mp4"),
  },
  "100": {
    video: require("../assets/images/videos/videonumero100.mp4"),
  },
  "1000": {
    video: require("../assets/images/videos/videonumero1000.mp4"),
  },

  AMARELO: {
    video: require("../assets/images/videos/videoamarelo.mp4"),
  },
  AZUL: {
    video: require("../assets/images/videos/videoazul.mp4"),
  },
  BRANCO: {
    video: require("../assets/images/videos/videobranco.mp4"),
  },
  PRETO: {
    video: require("../assets/images/videos/videopreto.mp4"),
  },
  VERDE: {
    video: require("../assets/images/videos/videoverde.mp4"),
  },
  ROSA: {
    video: require("../assets/images/videos/videorosa.mp4"),
  },
  ROXO: {
    video: require("../assets/images/videos/videoroxo.mp4"),
  },
  LARANJA: {
    video: require("../assets/images/videos/videolaranja.mp4"),
  },
  MARROM: {
    video: require("../assets/images/videos/videomarrom.mp4"),
  },
  CINZA: {
    video: require("../assets/images/videos/videocinza.mp4"),
  },
  VERMELHO: {
    video: require("../assets/images/videos/videovermelho.mp4"),
  },

  COMER: {
    video: require("../assets/images/videos/videocomer.mp4"),
  },
  BRINCAR: {
    video: require("../assets/images/videos/videobrincar.mp4"),
  },
  FALAR: {
    video: require("../assets/images/videos/videofalar.mp4"),
  },
  APRENDER: {
    video: require("../assets/images/videos/videoaprender.mp4"),
  },
  AVISAR: {
    video: require("../assets/images/videos/videoavisar.mp4"),
  },
  ADICIONAR: {
    video: require("../assets/images/videos/videoadicionar.mp4"),
  },
  NAMORAR: {
    video: require("../assets/images/videos/videonamorar.mp4"),
  },
  PREOCUPAR: {
    video: require("../assets/images/videos/videopreocupar.mp4"),
  },
};
