import { ThemedView } from "@/components/themed-view";
import { usePauseOnBlur } from "@/hooks/use-pause-on-blur";
import { useRouter } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const videoSource = require("@/assets/images/videoaulas/videoverbos.mp4");

export default function VideoVerbosPage() {
  const router = useRouter();

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = false;
    player.play();
  });

  usePauseOnBlur(player); // pausa automaticamente ao sair da tela

  return (
    <ThemedView style={styles.container}>
      <Pressable
        onPress={() => router.replace("/videoaulas")}
        style={styles.backButton}
        hitSlop={10}
      >
        {({ pressed }) => (
          <Text style={[styles.backButtonText, pressed && { opacity: 0.6 }]}>← Voltar</Text>
        )}
      </Pressable>

      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
        nativeControls
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 16,
    zIndex: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
});
