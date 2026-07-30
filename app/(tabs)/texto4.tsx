import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Fonts } from "@/constants/theme";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from "react-native";

export default function Texto4() {
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
          A Identidade Cultural da Comunidade Surda
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.paragraph}>
        A comunidade surda forma um universo social próprio, com valores,
        normas e relações que diferem significativamente da comunidade
        ouvinte. Grupos de surdos costumam desenvolver códigos próprios,
        gestos compartilhados e formas de interação que reforçam a confiança
        e o pertencimento dentro da comunidade. As relações entre membros da
        comunidade surda valorizam o apoio, especialmente em contextos em que
        a sociedade ouvinte impõe barreiras.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        Crianças surdas em escolas, por exemplo, aprendem desde cedo a formar
        redes de amizade com base em sinais, troca de experiências e
        solidariedade, criando um senso de identidade coletiva. Adultos
        surdos mantêm esses vínculos em associações, eventos culturais e
        encontros sociais, fortalecendo laços familiares e comunitários.
        Além disso, a comunidade surda possui formas próprias de
        socialização e liderança, que não dependem da hierarquia típica da
        sociedade ouvinte.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        O prestígio social muitas vezes é conquistado pelo conhecimento da
        língua, pela capacidade de mediar conflitos e pela participação
        ativa nas práticas comunitárias. Essa organização cria uma cultura
        de autonomia, em que os surdos se apoiam uns nos outros para
        enfrentar desafios comuns. A criação de relações dentro da
        comunidade fortalece a autoestima, a percepção de pertencimento e a
        cultura, tornando o povo surdo único em sua forma de viver e
        interagir.
      </ThemedText>

      <ThemedText style={styles.references}>
        SKLIAR, Carlos (org.). A surdez: um olhar sobre a diferença. Porto
        Alegre: Mediação, 1998. STROBEL, Karin. As imagens do outro sobre a
        cultura surda. Florianópolis: UFSC, 2008. CASTILHO, Maria Helena.
        Identidade e Cultura Surda: Reflexões sobre a Libras. São Paulo:
        Edufscar, 2012.
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