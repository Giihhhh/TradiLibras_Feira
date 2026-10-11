import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Fonts } from "@/constants/theme";
import { useRouter } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Pergunta, perguntas, Tema } from "./perguntas";
import { videosLibras } from "./videos-libras";

// Embaralha e pega as N primeiras — mesma lógica do carregar_perguntas()
// do appazv.py (random.shuffle + fatia das 5 primeiras).
function sortearPerguntas(lista: Pergunta[], quantidade = 5): Pergunta[] {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia.slice(0, quantidade);
}

const TITULOS_TEMA: Record<Tema, string> = {
  alfabeto: "Alfabeto",
  saudacoes: "Saudações",
  verbos: "Verbos",
  cores: "Cores",
  numeros: "Números",
};

type Feedback = "correta" | "incorreta" | null;

export default function QuizScreen({ tema }: { tema: Tema }) {
  const router = useRouter();
  const perguntasDoTema = perguntas[tema];

  const [perguntasSorteadas, setPerguntasSorteadas] = useState<Pergunta[]>(
    () => sortearPerguntas(perguntasDoTema)
  );
  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<Feedback>(null);

  const perguntaAtual = perguntasSorteadas[indice];
  const fimDoQuiz = indice >= perguntasSorteadas.length;

  const videoSource = useMemo(() => {
    if (!perguntaAtual?.videoKey) return null;
    return videosLibras[perguntaAtual.videoKey] ?? null;
  }, [perguntaAtual]);

  const player = useVideoPlayer(videoSource, (p) => {
    p.loop = true;
    p.play();
  });

  // Troca a fonte do player sempre que a pergunta (e o vídeo) mudar,
  // equivalente ao video_pergunta.source / state = play no Kivy.
  useEffect(() => {
    if (videoSource) {
      player.replace(videoSource);
      player.play();
    }
  }, [videoSource, player]);

  function responder(alternativa: string) {
    if (feedback) return; // já respondida, ignora novos toques

    const correta = perguntaAtual.correta;
    setRespostaSelecionada(alternativa);

    if (alternativa === correta) {
      setAcertos((a) => a + 1);
      setFeedback("correta");
    } else {
      setErros((e) => e + 1);
      setFeedback("incorreta");
    }
  }

  function proximaPergunta() {
    setFeedback(null);
    setRespostaSelecionada(null);
    setIndice((i) => i + 1);
  }

  function refazerPergunta() {
    setFeedback(null);
    setRespostaSelecionada(null);
    // mantém o mesmo índice — só limpa a resposta, igual ao "Refazer" do Kivy
  }

  function reiniciarQuiz() {
    setPerguntasSorteadas(sortearPerguntas(perguntasDoTema));
    setIndice(0);
    setAcertos(0);
    setErros(0);
    setFeedback(null);
    setRespostaSelecionada(null);
  }

  if (perguntasDoTema.length === 0) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={{ fontFamily: Fonts.rounded }}>
          {TITULOS_TEMA[tema]}
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          Ainda não há perguntas cadastradas para este tema.
        </ThemedText>
        <NavRodape onVoltar={() => router.back()} onInicio={() => router.replace("/")} />
      </ThemedView>
    );
  }

  if (fimDoQuiz) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={{ fontFamily: Fonts.rounded }}>
          Fim das perguntas!
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          Acertos: {acertos}{"\n"}Erros: {erros}
        </ThemedText>

        <Pressable onPress={reiniciarQuiz}>
          {({ pressed }) => (
            <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
              <Text style={styles.customButtonText}>Reiniciar</Text>
            </View>
          )}
        </Pressable>

        <NavRodape onVoltar={() => router.back()} onInicio={() => router.replace("/")} />
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.progresso}>
        {TITULOS_TEMA[tema]} — {indice + 1} de {perguntasSorteadas.length}
      </ThemedText>

      <ThemedText type="title" style={[styles.pergunta, { fontFamily: Fonts.rounded }]}>
        {perguntaAtual.texto}
      </ThemedText>

      {videoSource && (
        <VideoView
          style={styles.video}
          player={player}
          contentFit="cover"
          nativeControls={false}
        />
      )}

      <View style={styles.alternativasBox}>
        {perguntaAtual.alternativas.map((alt) => {
          const éEssa = respostaSelecionada === alt;
          const mostrarComoCorreta = feedback && alt === perguntaAtual.correta;
          const mostrarComoErrada = feedback === "incorreta" && éEssa;

          return (
            <Pressable key={alt} onPress={() => responder(alt)} disabled={!!feedback}>
              {({ pressed }) => (
                <View
                  style={[
                    styles.customButton,
                    pressed && styles.customButtonPressed,
                    mostrarComoCorreta && styles.botaoCorreto,
                    mostrarComoErrada && styles.botaoErrado,
                  ]}
                >
                  <Text style={styles.customButtonText}>{alt}</Text>
                </View>
              )}
            </Pressable>
          );
        })}
      </View>

      {feedback === "correta" && (
        <FeedbackCard texto="Resposta correta!" botoes={[{ texto: "OK", onPress: proximaPergunta }]} />
      )}

      {feedback === "incorreta" && (
        <FeedbackCard
          texto={`Resposta incorreta! A correta era: ${perguntaAtual.correta}`}
          botoes={[
            { texto: "Refazer", onPress: refazerPergunta },
            { texto: "Próxima", onPress: proximaPergunta },
          ]}
        />
      )}

      <NavRodape onVoltar={() => router.back()} onInicio={() => router.replace("/")} />
    </ThemedView>
  );
}

function FeedbackCard({
  texto,
  botoes,
}: {
  texto: string;
  botoes: { texto: string; onPress: () => void }[];
}) {
  return (
    <View style={styles.feedbackCard}>
      <Text style={styles.feedbackTexto}>{texto}</Text>
      <View style={styles.feedbackBotoes}>
        {botoes.map((b) => (
          <Pressable key={b.texto} onPress={b.onPress} style={styles.feedbackBotao}>
            <Text style={styles.feedbackBotaoTexto}>{b.texto}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

function NavRodape({ onVoltar, onInicio }: { onVoltar: () => void; onInicio: () => void }) {
  return (
    <View style={styles.navRodape}>
      <Pressable onPress={onVoltar} style={styles.navBotao}>
        <Text style={styles.navBotaoTexto}>Voltar</Text>
      </Pressable>
      <Pressable onPress={onInicio} style={styles.navBotao}>
        <Text style={styles.navBotaoTexto}>Início</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  progresso: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 8,
  },
  pergunta: {
    textAlign: "center",
    marginBottom: 16,
  },
  paragraph: {
    marginBottom: 20,
    fontSize: 15,
    lineHeight: 24,
    textAlign: "center",
    paddingHorizontal: 8,
  },
  video: {
    width: "100%",
    height: 220,
    borderRadius: 16,
    marginBottom: 20,
    backgroundColor: "#000",
  },
  alternativasBox: {
    width: "100%",
    alignItems: "center",
    gap: 15,
  },
  customButton: {
    backgroundColor: "#8bc1ff",
    opacity: 0.95,
    paddingVertical: 13,
    width: 240,
    borderRadius: 21,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  customButtonPressed: {
    opacity: 0.8,
  },
  customButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  botaoCorreto: {
    backgroundColor: "#3bb54a",
  },
  botaoErrado: {
    backgroundColor: "#e05252",
  },
  feedbackCard: {
    marginTop: 20,
    width: "100%",
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#01233f",
    alignItems: "center",
  },
  feedbackTexto: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 12,
  },
  feedbackBotoes: {
    flexDirection: "row",
    gap: 12,
  },
  feedbackBotao: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 14,
    backgroundColor: "#8bc1ff",
  },
  feedbackBotaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
  navRodape: {
    flexDirection: "row",
    gap: 10,
    marginTop: 24,
    marginBottom: 12,
  },
  navBotao: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 14,
    backgroundColor: "#8bc1ff",
    opacity: 0.9,
  },
  navBotaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
});
