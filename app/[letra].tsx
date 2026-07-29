import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useLocalSearchParams } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import { ScrollView, StyleSheet } from "react-native";
import { dicionarioMap } from "./videoMap";

export default function LetraDetalhe() {
  const { letra } = useLocalSearchParams<{ letra: string }>();
  const letraUpper = letra?.toUpperCase() ?? "";
  const info = dicionarioMap[letraUpper];

  const player = useVideoPlayer(info?.video, (player) => {
    player.loop = true;
    player.play();
  });

  if (!info) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText type="title">Letra {letraUpper}</ThemedText>
        <ThemedText>Vídeo ainda não disponível para essa letra.</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title">Letra {letraUpper}</ThemedText>

      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />

      <ThemedView style={styles.descricaoBox}>
        <ThemedText style={styles.descricaoTexto}>{info.descricao}</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    gap: 16,
  },
  video: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 20,
    backgroundColor: "#000",
  },
  descricaoBox: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: "rgba(37, 99, 235, 0.1)",
  },
  descricaoTexto: {
    fontSize: 16,
    lineHeight: 24,
  },
});
