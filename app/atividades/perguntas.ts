// Banco de perguntas dos testes, baseado na lista `perguntas` do appazv.py.
// Cada pergunta pertence a um `tema`. O campo `videoKey` referencia o mapa
// de vídeos em `videos-libras.ts` (que faz o require() estático dos assets).

export type Tema = "alfabeto" | "saudacoes" | "verbos" | "cores";

export interface Pergunta {
  id: string;
  texto: string;
  alternativas: string[];
  correta: string;
  videoKey?: string;
}

export const perguntas: Record<Tema, Pergunta[]> = {
  alfabeto: [
    {
      id: "alf-1",
      texto: "Essa é a letra 'A'?",
      alternativas: ["Sim", "Não"],
      correta: "Sim",
      videoKey: "a",
    },
    {
      id: "alf-2",
      texto: "Que letra é essa?",
      alternativas: ["G", "N", "A", "M"],
      correta: "G",
      videoKey: "g",
    },
    {
      id: "alf-3",
      texto: "Que letra é essa?",
      alternativas: ["G", "N", "A", "M"],
      correta: "N",
      videoKey: "n",
    },
    {
      id: "alf-4",
      texto: "Que letra é essa?",
      alternativas: ["G", "N", "A", "M"],
      correta: "A",
      videoKey: "a",
    },
    {
      id: "alf-5",
      texto: "Essa é a letra 'S'?",
      alternativas: ["Sim", "Não"],
      correta: "Não",
      videoKey: "n",
    },
  ],

  saudacoes: [
    {
      id: "sau-1",
      texto: "Esse é o sinal de 'bom dia' em Libras?",
      alternativas: ["Sim", "Não"],
      correta: "Sim",
      videoKey: "bomdia",
    },
    {
      id: "sau-2",
      texto: "Que sinal é esse?",
      alternativas: ["Tudo bem", "Oi", "Obrigado", "Boa noite"],
      correta: "Tudo bem",
      videoKey: "tudobem",
    },
    {
      id: "sau-3",
      texto: "Esse é o sinal de 'boa noite' em Libras?",
      alternativas: ["Sim", "Não"],
      correta: "Não",
      videoKey: "boatarde",
    },
    {
      id: "sau-4",
      texto: "Que sinal é esse?",
      alternativas: ["Boa Tarde", "Tchau", "Bom Dia", "Boa Noite"],
      correta: "Boa Tarde",
      videoKey: "boatarde",
    },
    {
      id: "sau-5",
      texto: "Esse é o sinal de 'oi' em Libras?",
      alternativas: ["Sim", "Não"],
      correta: "Sim",
      videoKey: "oi",
    },
  ],

  // Ainda não existem perguntas de Verbos e Cores no appazv.py.
  // Deixei os temas prontos na estrutura — é só preencher o array
  // no mesmo formato acima quando tiver o conteúdo.
  verbos: [],
  cores: [],
};
