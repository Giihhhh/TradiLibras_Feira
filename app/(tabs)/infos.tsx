import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet } from "react-native";
import { dicionarioMap } from "../videoMap";

const LETRAS = Object.keys(dicionarioMap);

export default function DicionarioPage() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Dicionário de Libras</ThemedText>
      <ThemedText style={styles.subtitle}>
        Toque em uma letra para ver como fazer o sinal.
      </ThemedText>

      <FlatList
        data={LETRAS}
        keyExtractor={(item) => item}
        numColumns={4}
        contentContainerStyle={styles.grid}
        renderItem={({ item: letra }) => (
          <Pressable
            style={styles.letraButton}
            onPress={() => router.push(`/(tabs)/${letra}`)}
          >
            <ThemedText style={styles.letraTexto}>{letra}</ThemedText>
          </Pressable>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  subtitle: {
    opacity: 0.8,
  },
  grid: {
    gap: 12,
    paddingVertical: 12,
  },
  letraButton: {
    flex: 1,
    aspectRatio: 1,
    margin: 6,
    borderRadius: 16,
    backgroundColor: "#2563eb",
    alignItems: "center",
    justifyContent: "center",
  },
  letraTexto: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },
});
