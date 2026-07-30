import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Fonts } from "@/constants/theme";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";

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
          Videoaulas
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.centerButtonContainer}>
            <Link href="@/assets/images/videoaulas/videoalfabeto" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/thumbalfabeto.png")}
                    style={styles.reactLogo}
                    />
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
                    <Image
                    source={require("@/assets/images/thumbsaudacoes.png")}
                    style={styles.reactLogo}
                    />
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
                    <Image
                    source={require("@/assets/images/thumbverbos.png")}
                    style={styles.reactLogo}
                    />
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
                    <Image
                    source={require("@/assets/images/thumbcores.png")}
                    style={styles.reactLogo}
                    />
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
    flexDirection: "column",
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
  paddingVertical: 0,
  width: 320,
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
