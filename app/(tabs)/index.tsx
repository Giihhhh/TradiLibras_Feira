import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
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
      <Image
      source={require("@/assets/images/logoesc_trad.png")}
      style={styles.logotitulo}
      />
    </ThemedView>

      {/* botao O QUE EH LIBRAS*/}
    <ThemedView style={styles.centerButtonContainer}>
      <Link href="/o-que-eh-libras" asChild>
        <Pressable>
          {({ pressed }) => (
            <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
              <Text style={styles.customButtonText}>Sobre a Libras</Text>
            </View>
          )}
        </Pressable>
      </Link>
    </ThemedView>

      {/* botao videoaulas*/}
    <ThemedView style={styles.centerButtonContainer}>
      <Link href="/videoaulas" asChild>
        <Pressable>
          {({ pressed }) => (
            <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
              <Text style={styles.customButtonText}>Videoaulas</Text>
            </View>
          )}
        </Pressable>
      </Link>
    </ThemedView>

    {/* botao dicionário*/}
    <ThemedView style={styles.centerButtonContainer}>
      <Link href="/dicion" asChild>
        <Pressable>
          {({ pressed }) => (
            <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
              <Text style={styles.customButtonText}>Dicionário de Sinais</Text>
            </View>
          )}
        </Pressable>
      </Link>
    </ThemedView>

    {/* botao tradutor*/}
    <ThemedView style={styles.centerButtonContainer}>
      <Link href="/tradutor" asChild>
        <Pressable>
          {({ pressed }) => (
            <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
              <Text style={styles.customButtonText}>Tradutor (Alfabeto)</Text>
            </View>
          )}
        </Pressable>
      </Link>
    </ThemedView>

    {/* botao testes*/}
    <ThemedView style={styles.centerButtonContainer}>
      <Link href="/testes" asChild>
        <Pressable>
          {({ pressed }) => (
            <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
              <Text style={styles.customButtonText}>Atividades</Text>
            </View>
          )}
        </Pressable>
      </Link>
    </ThemedView>

    {/* botao sobre nós*/}
    <ThemedView style={styles.centerButtonContainer}>
      <Link href="/nossotras" asChild>
        <Pressable>
          {({ pressed }) => (
            <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
              <Text style={styles.customButtonText}>Sobre Nós</Text>
            </View>
          )}
        </Pressable>
      </Link>
    </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -12,
    gap: 8,
    backgroundColor: "transparent",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: "transparent",
  },
  reactLogo: {
    width: "100%",
    height: 180,
    resizeMode: "cover"
  },
  centerButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "transparent",
  },
  logotitulo: {
  width: 300,
  height: 87,
  resizeMode: "contain",
  alignSelf: "flex-start",
  backgroundColor: "transparent",
  },
  customButton: {
  backgroundColor: "#8bc1ff",
  opacity: 0.95,
  paddingVertical: 13,
  width: 240,
  borderRadius: 21,
  alignItems: "center",
  elevation: 3, // sombra no Android
  shadowColor: "#000", // sombra no iOS
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
});