import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Fonts } from "@/constants/theme";
import { useVideoPlayer, VideoView } from "expo-video";
import { useState } from "react";
import {
    Image,
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    View,
} from "react-native";
import { dicionarioMap } from "../videoMap";

// Imagens dos botões — chave usada aqui precisa bater com a chave no dicionarioMap
const imageMap: Record<string, any> = {
  OI: require("@/assets/images/videos/oi.png"),
  BOMDIA: require("@/assets/images/videos/bomdia.png"),
  BOATARDE: require("@/assets/images/videos/boatarde.png"),
  BOANOITE: require("@/assets/images/videos/boanoite.png"),
  TCHAU: require("@/assets/images/videos/tchau.png"),
  TUDOBEM: require("@/assets/images/videos/tudobem.png"),
  PRAZER: require("@/assets/images/videos/prazeremconhecervoce.png"),
};

// Texto exibido embaixo/no lugar de cada botão
const labels: Record<string, string> = {
  OI: " ",
  BOMDIA: " ",
  BOATARDE: " ",
  BOANOITE: " ",
  TCHAU: " ",
  TUDOBEM: " ",
  PRAZER: " ",
};

const SAUDACOES = Object.keys(imageMap);

function ModalConteudo({ chave }: { chave: string }) {
  const info = dicionarioMap[chave];

  const player = useVideoPlayer(info?.video, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <>
      <VideoView style={styles.modalVideo} player={player} allowsFullscreen />
    </>
  );
}

export default function SaudacoesPage() {
  const [saudacaoSelecionada, setSaudacaoSelecionada] = useState<string | null>(
    null,
  );

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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ fontFamily: Fonts.rounded }}>
          Saudações
        </ThemedText>
      </ThemedView>

      <View style={styles.lettersGrid}>
        {SAUDACOES.map((chave) => (
          <ThemedView key={chave} style={styles.centerButtonContainer}>
            <Pressable onPress={() => setSaudacaoSelecionada(chave)}>
              {({ pressed }) => (
                <View
                  style={[
                    styles.customButton,
                    pressed && styles.customButtonPressed,
                  ]}
                >
                  <Image source={imageMap[chave]} style={styles.letterIcon} />
                </View>
              )}
            </Pressable>
            <ThemedText style={styles.buttonLabel}>{labels[chave]}</ThemedText>
          </ThemedView>
        ))}
      </View>

      <Modal
        visible={saudacaoSelecionada !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setSaudacaoSelecionada(null)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setSaudacaoSelecionada(null)}
        >
          <Pressable style={styles.modalCard} onPress={() => {}}>
            <ScrollView contentContainerStyle={styles.modalScrollContent}>
              <ThemedText type="title" style={styles.modalTitulo}>
                {saudacaoSelecionada ? labels[saudacaoSelecionada] : ""}
              </ThemedText>

              {saudacaoSelecionada && (
                <ModalConteudo
                  key={saudacaoSelecionada}
                  chave={saudacaoSelecionada}
                />
              )}

              <Pressable
                style={styles.fecharButton}
                onPress={() => setSaudacaoSelecionada(null)}
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
    width: 170,
  },
  customButton: {
    backgroundColor: "#8bc1ff",
    opacity: 0.95,
    paddingVertical: 1,
    width: 170,
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
  buttonLabel: {
    marginTop: 6,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "600",
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
});
