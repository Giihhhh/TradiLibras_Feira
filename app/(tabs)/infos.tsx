import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function ButtonAPage() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Button A Page</ThemedText>
      <ThemedText>
        This is the page opened when you tap Button A. Use the back button or
        the router to return.
      </ThemedText>
      <Link href="/">
        <Link.Trigger>
          <ThemedText type="subtitle">Go back home</ThemedText>
        </Link.Trigger>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
});
