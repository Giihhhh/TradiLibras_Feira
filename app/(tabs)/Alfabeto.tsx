import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Fonts } from "@/constants/theme";
import { useRouter } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { dicionarioMap } from "../videoMap";

// Imagens dos botões do grid (precisa ser require estático, não dá pra montar o caminho dinamicamente)
const imageMap: Record<string, any> = {
  A: require("@/assets/images/a.png"),
  B: require("@/assets/images/b.png"),
  C: require("@/assets/images/c.png"),
  D: require("@/assets/images/d.png"),
  E: require("@/assets/images/e.png"),
  F: require("@/assets/images/f.png"),
  G: require("@/assets/images/g.png"),
  H: require("@/assets/images/h.png"),
  I: require("@/assets/images/i.png"),
  J: require("@/assets/images/j.png"),
  K: require("@/assets/images/k.png"),
  L: require("@/assets/images/l.png"),
  M: require("@/assets/images/m.png"),
  N: require("@/assets/images/n.png"),
  O: require("@/assets/images/o.png"),
  P: require("@/assets/images/p.png"),
  Q: require("@/assets/images/q.png"),
  R: require("@/assets/images/r.png"),
  S: require("@/assets/images/s.png"),
  T: require("@/assets/images/t.png"),
  U: require("@/assets/images/u.png"),
  V: require("@/assets/images/v.png"),
  W: require("@/assets/images/w.png"),
  X: require("@/assets/images/x.png"),
  Y: require("@/assets/images/y.png"),
  Z: require("@/assets/images/z.png"),
};

const LETRAS = Object.keys(imageMap);

// Componente separado pro conteúdo do modal — a key={letra} na hora de usar
// garante que o player de vídeo seja recriado do zero a cada letra escolhida.
function ModalConteudo({ letra }: { letra: string }) {
  const info = dicionarioMap[letra];

  const player = useVideoPlayer(info?.video, (player) => {
    player.loop = true;
    player.play();
  });

  if (!info) {
    return (
      <ThemedText style={styles.modalDescricao}>
        Vídeo ainda não disponível para essa letra.
      </ThemedText>
    );
  }

  return (
    <>
      <VideoView style={styles.modalVideo} player={player} allowsFullscreen />
    </>
  );
}

export default function OQueEhLibras() {
  const [letraSelecionada, setLetraSelecionada] = useState<string | null>(null);
  const router = useRouter();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#8bc1ff", dark: "#01233f" }}
      headerImage={
        <Image
          source={require("@/assets/images/background.png")}
          style={styles.reactLogo}
        />
      }
    >
      <Pressable onPress={() => router.replace("/dicion")} style={styles.backButton} hitSlop={10}>
              {({ pressed }) => (
                <Text style={[styles.backButtonText, pressed && { opacity: 0.6 }]}>← Voltar</Text>
              )}
            </Pressable>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ fontFamily: Fonts.rounded }}>
          Alfabeto
        </ThemedText>
      </ThemedView>

      <View style={styles.lettersGrid}>
        {LETRAS.map((letra) => (
          <ThemedView key={letra} style={styles.centerButtonContainer}>
            <Pressable onPress={() => setLetraSelecionada(letra)}>
              {({ pressed }) => (
                <View
                  style={[
                    styles.customButton,
                    pressed && styles.customButtonPressed,
                  ]}
                >
                  <Image source={imageMap[letra]} style={styles.letterIcon} />
                </View>
              )}
            </Pressable>
          </ThemedView>
        ))}
      </View>

      <Modal
        visible={letraSelecionada !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setLetraSelecionada(null)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setLetraSelecionada(null)}
        >
          <Pressable style={styles.modalCard} onPress={() => {}}>
            <ScrollView contentContainerStyle={styles.modalScrollContent}>
              <ThemedText type="title" style={styles.modalTitulo}>
                Letra {letraSelecionada}
              </ThemedText>

              {letraSelecionada && (
                <ModalConteudo
                  key={letraSelecionada}
                  letra={letraSelecionada}
                />
              )}

              <Pressable
                style={styles.fecharButton}
                onPress={() => setLetraSelecionada(null)}
              >
                <ThemedText style={styles.fecharTexto}>Fechar</ThemedText>
              </Pressable>
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    gap: 10,
    marginBottom: 20,
    marginTop: 20,
    alignContent: "center",
    paddingHorizontal: 5,
  },
  paragraph: {
    marginBottom: 12,
    alignContent: "center",
    fontSize: 15,
    lineHeight: 24,
    textAlign: "justify",
    paddingHorizontal: 8,
  },
  letterIcon: {
    width: "110%",
    height: "110%",
    resizeMode: "center",
  },
  reactLogo: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },

  lettersGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },

  centerButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  customButton: {
    backgroundColor: "#8bc1ff",
    opacity: 0.95,
    paddingVertical: 1,
    width: 140,
    height: 140,
    borderRadius: 21,
    alignItems: "center",
    overflow: "hidden",
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

  // ---- Estilos do modal (janelinha) ----
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalCard: {
    width: "100%",
    maxHeight: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
  },
  modalScrollContent: {
    gap: 16,
    alignItems: "center",
  },
  modalTitulo: {
    color: "#01233f",
  },
  modalVideo: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 16,
    backgroundColor: "#000",
  },
  modalDescricao: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    textAlign: "center",
  },
  fecharButton: {
    marginTop: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 999,
    backgroundColor: "#2563eb",
  },
  fecharTexto: {
    color: "#fff",
    fontWeight: "700",
  },
    backButton: {
    marginTop: 10,
    marginBottom: 4,
    paddingHorizontal: 8,
    alignSelf: "flex-start",
  },
  backButtonText: {
    color: "#0a4da4",
    fontSize: 16,
    fontWeight: "600",
  },
});
