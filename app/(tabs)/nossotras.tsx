import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Fonts } from "@/constants/theme";
import { Image, StyleSheet } from "react-native";

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
        Olá, somos Giovanna Azzi, Giovanna Giardini e Ana Helena Aguilar, estudantes do 3º ano do Ensino Médio, apaixonadas por tecnologia, comunicação e pelo desenvolvimento de soluções que gerem impacto social. Foi desse interesse que nasceu o TradiLibras, um projeto criado para promover a inclusão e facilitar a comunicação entre pessoas surdas e ouvintes por meio da tecnologia.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        Nosso objetivo é contribuir para uma sociedade mais acessível, utilizando a inovação como ferramenta para aproximar pessoas e ampliar o acesso à Língua Brasileira de Sinais (Libras). Acreditamos que pequenas iniciativas podem transformar vidas e tornar a comunicação cada vez mais inclusiva.
      </ThemedText>

        <Image
            source={require("@/assets/images/usus.jpeg")}
            style={styles.reactLogo}
          />
      <ThemedText style={styles.paragraph}>
                                





                                
      </ThemedText>

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
    borderRadius: 21,
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
