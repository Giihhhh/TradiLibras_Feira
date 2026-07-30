import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Fonts } from "@/constants/theme";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from "react-native";

export default function Texto2() {
  const router = useRouter();

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
      <Pressable onPress={() => router.replace("/o-que-eh-libras")} style={styles.backButton} hitSlop={10}>
        {({ pressed }) => (
          <Text style={[styles.backButtonText, pressed && { opacity: 0.6 }]}>← Voltar</Text>
        )}
      </Pressable>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ fontFamily: Fonts.rounded }}>
          A Comunidade Surda na Arte
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.paragraph}>
        A produção cultural surda em Libras é uma expressão rica e
        diversificada da identidade da comunidade surda. Ela vai muito além
        da comunicação cotidiana, englobando teatro, poesia, dança,
        literatura visual, vídeos e mídias digitais, todos desenvolvidos com
        a língua de sinais como principal veículo de expressão. No teatro
        surdo, por exemplo, peças inteiras são encenadas em Libras,
        utilizando o corpo, expressões faciais e o espaço cênico como
        elementos narrativos. Grupos teatrais, como o Teatro de Surdos de São
        Paulo, criam histórias que abordam questões da vida cotidiana,
        identidade surda e direitos humanos, fortalecendo a visibilidade da
        comunidade.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        A poesia visual em Libras é outro campo significativo. Poetas surdos
        exploram sinais, movimentos corporais, expressões faciais e a
        interação com o espaço para criar obras que só podem ser plenamente
        apreciadas por quem compreende a língua de sinais. Essa forma de
        poesia evidencia a capacidade da Libras de transmitir emoção, ritmo e
        significado de maneira única.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        No ambiente digital, vídeos e conteúdos nas redes sociais têm se
        tornado cada vez mais populares. YouTubers, surdos e ouvintes,
        produzem conteúdos educativos, humorísticos, artísticos e
        informativos, todos em Libras, promovendo acessibilidade e
        visibilidade da cultura surda para ouvintes e surdos. Além disso,
        essas produções contribuem para a preservação de sinais e variantes
        regionais, fortalecendo a diversidade linguística.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        A produção cultural surda em Libras é, portanto, um espaço de
        resistência, expressão e valorização da identidade surda. Ela
        demonstra a criatividade e a autonomia da comunidade, reafirmando que
        a Libras é uma língua viva, rica e capaz de produzir arte, cultura e
        conhecimento. Reconhecer e apoiar essas manifestações culturais é
        fundamental para promover inclusão e diversidade no Brasil.
      </ThemedText>

      <ThemedText style={styles.references}>
        STROBEL, Karin. As imagens do outro sobre a cultura surda.
        Florianópolis: UFSC, 2008. QUADROS, Ronice Muller de; KARNOPP,
        Lodenir Becker. Língua de sinais brasileira: estudos linguísticos.
        Porto Alegre: Artmed, 2004. SKLIAR, Carlos (org.). A surdez: um olhar
        sobre a diferença. Porto Alegre: Mediação, 1998. SILVA, Ana Paula.
        Teatro surdo e expressão em Libras. São Paulo: Editora Humanitas,
        2015.
      </ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginTop: 10,
    marginBottom: 4,
    paddingHorizontal: 8,
    alignSelf: "flex-start",
  },
  backButtonText: {
    color: "#0a7ea4",
    fontSize: 16,
    fontWeight: "600",
  },
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
  references: {
    marginTop: 8,
    marginBottom: 20,
    fontSize: 12,
    lineHeight: 18,
    fontStyle: "italic",
    opacity: 0.7,
    textAlign: "justify",
    paddingHorizontal: 8,
  },
  reactLogo: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
});