import { Image } from "expo-image";
import { Button, StyleSheet } from "react-native";

import { HelloWave } from "@/components/borboleta";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">TradiLibras</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* botao O QUE EH LIBRAS*/}
      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/o-que-eh-libras" asChild>
          <Button title="O que é Libras?" onPress={() => {}} />
        </Link>
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">Modulos de aprendizagem</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* botao ALFABETO*/}
      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/alfabeto" asChild>
          <Button title="alfabeto" onPress={() => {}} />
        </Link>
      </ThemedView>

      {/* botao TODOS OS MODULOS*/}
      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/tudo" asChild>
          <Button title="todos os modulos" onPress={() => {}} />
        </Link>
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">Duvidas</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* botao TRADUTOR*/}
      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/tradutor" asChild>
          <Button title="tradutor (alfabeto)" onPress={() => {}} />
        </Link>
      </ThemedView>

      {/* botao videos*/}
      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/videos" asChild>
          <Button title="videos" onPress={() => {}} />
        </Link>
      </ThemedView>

      {/* botao testes*/}
      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/testes" asChild>
          <Button title="treinar" onPress={() => {}} />
        </Link>
      </ThemedView>

      {/* botao tradilibras*/}
      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/nossotras" asChild>
          <Button title="Sobre Nós" onPress={() => {}} />
        </Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  centerButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
});
