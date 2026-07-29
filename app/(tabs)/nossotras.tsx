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
          Quem somos nós?
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.paragraph}>
        Somos alunas do 3º ano do Ensino Médio 
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        É uma língua natural visual-espacial, baseada em sinais,
        expressões faciais e movimentos corporais, permitindo comunicação plena
        e sendo reconhecida oficialmente no país.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        Esta aba traz textos sobre a Libras e também sobre a comunidade surda no Brasil.
      </ThemedText>

      <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Text style={styles.customButtonText}>Texto 1</Text>
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

          <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Text style={styles.customButtonText}>Texto 2</Text>
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

          <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Text style={styles.customButtonText}>Texto 3</Text>
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

          <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Text style={styles.customButtonText}>Texto 4</Text>
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
    resizeMode: "cover"
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
