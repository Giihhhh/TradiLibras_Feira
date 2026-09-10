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

// Verbos disponíveis. A chave usada aqui precisa bater exatamente com a
// chave cadastrada em videoMap.ts (ex: "1", "10", "100", "1000").
const VERBOS = ["COMER", "BRINCAR", "FALAR", "APRENDER", "AVISAR", "ADICIONAR", "NAMORAR", "PREOCUPAR"];

function ModalConteudo({ chave }: { chave: string }) {
  const info = dicionarioMap[chave];

  const player = useVideoPlayer(info?.video, (player) => {
    player.loop = true;
    player.play();
  });

  if (!info) {
    return (
      <ThemedText style={styles.modalDescricao}>
        Vídeo ainda não cadastrado para "{chave}".
      </ThemedText>
    );
  }

  return <VideoView style={styles.modalVideo} player={player} allowsFullscreen />;
}

export default function VerbosPage() {
  const router = useRouter();
  const [verboSelecionado, setVerboSelecionado] = useState<string | null>(null);

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
          Verbos
        </ThemedText>
      </ThemedView>

      <View style={styles.lettersGrid}>
        {VERBOS.map((verbo) => (
          <ThemedView key={verbo} style={styles.centerButtonContainer}>
            <Pressable onPress={() => setVerboSelecionado(verbo)}>
              {({ pressed }) => (
                <View
                  style={[
                    styles.customButton,
                    pressed && styles.customButtonPressed,
                  ]}
                >
                  <Text style={styles.customButtonText}>{verbo}</Text>
                </View>
              )}
            </Pressable>
          </ThemedView>
        ))}
      </View>

      <Modal
        visible={verboSelecionado !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setVerboSelecionado(null)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setVerboSelecionado(null)}
        >
          <Pressable style={styles.modalCard} onPress={() => {}}>
            <ScrollView contentContainerStyle={styles.modalScrollContent}>
              <ThemedText type="title" style={styles.modalTitulo}>
                {verboSelecionado ?? ""}
              </ThemedText>

              {verboSelecionado && (
                <ModalConteudo
                  key={verboSelecionado}
                  chave={verboSelecionado}
                />
              )}

              <Pressable
                style={styles.fecharButton}
                onPress={() => setVerboSelecionado(null)}
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
    paddingHorizontal: 10,
  },
  reactLogo: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  lettersGrid: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: 12,
  },
  centerButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "47%",
  },
  customButton: {
    backgroundColor: "#8bc1ff",
    opacity: 0.95,
    width: "100%",
    aspectRatio: 1,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
  },

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
    textAlign: "center",
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
