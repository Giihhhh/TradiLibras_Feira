// hooks/use-pause-on-blur.ts
import { useFocusEffect } from "expo-router";
import type { VideoPlayer } from "expo-video";
import { useCallback } from "react";

export function usePauseOnBlur(player: VideoPlayer) {
  useFocusEffect(
    useCallback(() => {
      return () => {
        player.pause();
      };
    }, [player]),
  );
}