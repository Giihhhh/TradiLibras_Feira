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
          Dicionário de Sinais
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/Alfabeto" asChild>
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
        <Link href="/Saudacoes" asChild>
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
        <Link href="/tradutor" asChild>
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
        <Link href="/tradutor" asChild>
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
    paddingVertical: 20,
    width: 280,
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
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
