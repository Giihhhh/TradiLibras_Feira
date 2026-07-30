import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

// ⚠️ Troque pela versão real do seu app (ou puxe do package.json/app.json).
const APP_VERSION = "1.0.0";

export default function MenuPage() {
  const irParaPerfil = () => {
    // 🔜 Quando a página de usuário existir, troque por:
    // router.push("/perfil");
    Alert.alert(
      "Em breve",
      "A página de usuário ainda está em desenvolvimento.",
    );
  };

  const abrirVersao = () => {
    Alert.alert("Versão do app", `Você está usando a versão ${APP_VERSION}.`);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={{ marginTop: 40 }}>
        Menu
      </ThemedText>

      <ThemedView style={styles.buttonsWrapper}>
        <Pressable style={styles.button} onPress={irParaPerfil}>
          <ThemedText style={styles.buttonText}>Meu perfil</ThemedText>
        </Pressable>

        <ThemedView style={styles.centerButtonContainer}>
          <Link href="/nossotras" asChild>
            <Pressable>
              {({ pressed }) => (
                <View
                  style={[
                    styles.customButton,
                    pressed && styles.customButtonPressed,
                  ]}
                >
                  <Text style={styles.customButtonText}>Sobre Nós</Text>
                </View>
              )}
            </Pressable>
          </Link>
        </ThemedView>

        <Pressable style={styles.button} onPress={abrirVersao}>
          <ThemedText style={styles.buttonText}>Versão do app</ThemedText>
        </Pressable>

        <ThemedView style={styles.centerButtonContainer}>
          <Link href="/politica-privacidade" asChild>
            <Pressable>
              {({ pressed }) => (
                <View
                  style={[
                    styles.customButton,
                    pressed && styles.customButtonPressed,
                  ]}
                >
                  <Text style={styles.customButtonText}>
                    Política de Privacidade
                  </Text>
                </View>
              )}
            </Pressable>
          </Link>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  buttonsWrapper: {
    marginTop: 24,
    gap: 16,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 999,
    backgroundColor: "#2977ca",
    alignItems: "center",
    alignSelf: "center",
    minWidth: 180,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "700",
  },
  centerButtonContainer: {
    alignItems: "center",
  },
  customButton: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 999,
    backgroundColor: "#2977ca",
    alignItems: "center",
    minWidth: 180,
  },
  customButtonPressed: {
    opacity: 0.7,
  },
  customButtonText: {
    color: "#ffffff",
    fontWeight: "700",
  },
});
