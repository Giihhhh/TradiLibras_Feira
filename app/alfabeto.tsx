import { Button, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Fonts } from "@/constants/theme";
import { Link } from "expo-router";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}
        >
          Alfabeto em LIBRAS
        </ThemedText>
      </ThemedView>
      <ThemedText>
        Aprenda o alfabeto bla bla bls. Basta clicar na Imagem da letra que vc
        quer aprender
      </ThemedText>

      {/* botao*/}
      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/button-a" asChild>
          <Button title="A" onPress={() => {}} />
        </Link>
      </ThemedView>

      {/* botao*/}
      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/index" asChild>
          <Button title="B" onPress={() => {}} />
        </Link>
      </ThemedView>

      {/* botao*/}
      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/index" asChild>
          <Button title="C" onPress={() => {}} />
        </Link>
      </ThemedView>

      {/* botao*/}
      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/index" asChild>
          <Button title="D" onPress={() => {}} />
        </Link>
      </ThemedView>

      {/* botao*/}
      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/index" asChild>
          <Button title="E" onPress={() => {}} />
        </Link>
      </ThemedView>

      {/* botao*/}
      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/index" asChild>
          <Button title="F" onPress={() => {}} />
        </Link>
      </ThemedView>

      {/* botao*/}
      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/index" asChild>
          <Button title="G" onPress={() => {}} />
        </Link>
      </ThemedView>

      {/* botao*/}
      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/index" asChild>
          <Button title="H" onPress={() => {}} />
        </Link>
      </ThemedView>

      {/* botao*/}
      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/index" asChild>
          <Button title="I" onPress={() => {}} />
        </Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  centerButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
});
