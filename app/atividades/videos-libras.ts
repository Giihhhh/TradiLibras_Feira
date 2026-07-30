// Mapa de vídeos dos sinais em Libras usados nos testes.
// O require() precisa ser estático (o Metro não resolve caminho dinâmico),
// por isso cada vídeo é listado aqui em vez de montar o path na hora.
//
// Ajuste os caminhos para onde os arquivos .mp4 realmente ficarem
// dentro de assets/videos/.

export const videosLibras: Record<string, any> = {
  a: require("@/assets/images/videos/videoa.mp4"),
  g: require("@/assets/images/videos/videog.mp4"),
  n: require("@/assets/images/videos/videon.mp4"),
  bomdia: require("@/assets/images/videos/videobomdia.mp4"),
  tudobem: require("@/assets/images/videos/videotudobem.mp4"),
  boatarde: require("@/assets/images/videos/videoboatarde.mp4"),
  oi: require("@/assets/images/videos/videooi.mp4"),
};
