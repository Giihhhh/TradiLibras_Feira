import { Link } from "expo-router";
import { Button, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Fonts } from "@/constants/theme";

export default function OQueEhLibras() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={undefined}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ fontFamily: Fonts.rounded }}>
          O que é LIBRAS?
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.paragraph}>
        LIBRAS é a Língua Brasileira de Sinais, usada pela comunidade surda no
        Brasil. Ela possui gramática e estrutura próprias, diferentes do
        português falado.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        LIBRAS é uma língua natural visual-espacial, baseada em sinais,
        expressões faciais e movimentos corporais. Ela permite comunicação plena
        e é reconhecida oficialmente no país.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        Esta aba traz uma explicação simples sobre a importância da LIBRAS e por
        que ela deve ser valorizada.
      </ThemedText>

      <ThemedView style={styles.centerButtonContainer}>
        <Link href="/" asChild>
          <Button title="Voltar para home" onPress={() => {}} />
        </Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  paragraph: {
    marginBottom: 16,
  },
  centerButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
});
