import { ThemedView } from "@/components/themed-view";
import { useVideoPlayer, VideoView } from "expo-video";
import React from "react";
import { StyleSheet } from "react-native";

const videoSource = require("@/assets/images/videoaulas/videocores.mp4");

export default function VideoCoresPage() {
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = false;
    player.play();
  });

  return (
    <ThemedView style={styles.container}>
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
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
});
