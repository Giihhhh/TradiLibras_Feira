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
          Sobre a Libras
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.paragraph}>
        Libras é a Língua Brasileira de Sinais, ela possui gramática e estrutura próprias, diferentes do
        português falado.
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
            <Link href="/texto1" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Text style={styles.customButtonText}>Regionalismos na Libras</Text>
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

          <ThemedView style={styles.centerButtonContainer}>
            <Link href="/texto2" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Text style={styles.customButtonText}>Comunidade Surda na Arte</Text>
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

          <ThemedView style={styles.centerButtonContainer}>
            <Link href="/texto3" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Text style={styles.customButtonText}>História da Libras</Text>
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

          <ThemedView style={styles.centerButtonContainer}>
            <Link href="/texto4" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Text style={styles.customButtonText}>Identidade Cultural da Comunidade Surda</Text>
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

          <ThemedView style={styles.centerButtonContainer}>
            <Link href="/texto5" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Text style={styles.customButtonText}>Edição México - LSM</Text>
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

          <ThemedView style={styles.centerButtonContainer}>
            <Link href="/texto6" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Text style={styles.customButtonText}>Edición México - LSM</Text>
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
