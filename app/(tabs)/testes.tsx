import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Fonts } from "@/constants/theme";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function OQueEhLibras() {
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
          Atividades
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.paragraph}>
        Agora para auxiliar no aprendizado da Libras, atividades de revisão
        sobre os sinais aprendidos!
      </ThemedText>

      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/atividades/quiz-alfabeto" asChild>
          <Pressable>
            {({ pressed }) => (
              <View
                style={[
                  styles.customButton,
                  pressed && styles.customButtonPressed,
                ]}
              >
                <Text style={styles.customButtonText}>Alfabeto</Text>
              </View>
            )}
          </Pressable>
        </Link>
      </ThemedView>

      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/atividades/quiz-saudacoes" asChild>
          <Pressable>
            {({ pressed }) => (
              <View
                style={[
                  styles.customButton,
                  pressed && styles.customButtonPressed,
                ]}
              >
                <Text style={styles.customButtonText}>Saudações</Text>
              </View>
            )}
          </Pressable>
        </Link>
      </ThemedView>

      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/atividades/quiz-verbos" asChild>
          <Pressable>
            {({ pressed }) => (
              <View
                style={[
                  styles.customButton,
                  pressed && styles.customButtonPressed,
                ]}
              >
                <Text style={styles.customButtonText}>Verbos</Text>
              </View>
            )}
          </Pressable>
        </Link>
      </ThemedView>

      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/atividades/quiz-cores" asChild>
          <Pressable>
            {({ pressed }) => (
              <View
                style={[
                  styles.customButton,
                  pressed && styles.customButtonPressed,
                ]}
              >
                <Text style={styles.customButtonText}>Cores</Text>
              </View>
            )}
          </Pressable>
        </Link>
      </ThemedView>
      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/atividades/quiz-numeros" asChild>
          <Pressable>
            {({ pressed }) => (
              <View
                style={[
                  styles.customButton,
                  pressed && styles.customButtonPressed,
                ]}
              >
                <Text style={styles.customButtonText}>Números</Text>
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
  centerButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  reactLogo: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
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
