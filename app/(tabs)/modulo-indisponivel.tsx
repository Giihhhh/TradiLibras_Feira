import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function ModuloIndisponivelPage() {
  const { modulo } = useLocalSearchParams<{ modulo?: string }>();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        {modulo ?? "Módulo"}
      </ThemedText>

      <ThemedText style={styles.mensagem}>
        Ainda não está disponível o dicionário para esse módulo.
      </ThemedText>

      <ThemedText style={styles.subMensagem}>
        Estamos trabalhando para trazer esse conteúdo em breve!
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  title: {
    textAlign: "center",
  },
  mensagem: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  subMensagem: {
    textAlign: "center",
    opacity: 0.7,
  },
});
