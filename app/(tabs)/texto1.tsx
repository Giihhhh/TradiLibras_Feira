import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Fonts } from "@/constants/theme";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Texto1() {
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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ fontFamily: Fonts.rounded }}>
          Regionalismos na Língua Brasileira de Sinais
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.paragraph}>
        A Libras apresenta variações regionais que refletem a diversidade
        cultural e histórica do Brasil. Assim como as línguas orais têm
        sotaques e vocabulários diferentes conforme a região, a Libras também
        possui sinais próprios em diferentes estados e cidades. Essas
        diferenças são conhecidas como variedades regionais.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        As variações podem ocorrer por diversos fatores. Um deles é a
        história das escolas de surdos em cada estado, que formaram
        comunidades surdas com sinais próprios. Outro fator é a influência de
        sinais estrangeiros introduzidos por professores vindos de outros
        países, que se misturaram às línguas de sinais já existentes
        localmente. Por exemplo, o sinal para "ônibus" pode ser diferente em
        São Paulo, Rio Grande do Sul e Bahia, mas todos são compreendidos
        dentro de suas comunidades.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        Ademais, sinais podem variar conforme a idade, com jovens criando
        expressões mais modernas ou influenciadas pela internet e mídias
        sociais. Apesar dessas diferenças, a Libras mantém uma gramática
        comum que permite a compreensão entre surdos de diferentes regiões. A
        valorização dessas variedades é importante, pois preserva a riqueza
        cultural da comunidade surda e promove o respeito às identidades
        locais.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        O estudo das variações regionais também ajuda intérpretes,
        professores e estudantes de Libras a compreenderem melhor a
        diversidade da língua, tornando a comunicação mais eficiente e
        inclusiva. Reconhecer e respeitar essas diferenças contribui para uma
        sociedade que valoriza a pluralidade linguística e cultural do
        Brasil.
      </ThemedText>

      <ThemedText style={styles.references}>
        QUADROS, Ronice Muller de; KARNOPP, Lodenir Becker. Língua de sinais
        brasileira: estudos linguísticos. Porto Alegre: Artmed, 2004.
        STROBEL, Karin. As imagens do outro sobre a cultura surda.
        Florianópolis: UFSC, 2008. BRASIL. Ministério da Educação. Diretrizes
        de Política de Educação Especial na Perspectiva da Educação
        Inclusiva. Brasília, 2008.
      </ThemedText>

      <NavRodape onVoltar={() => router.back()} onInicio={() => router.replace("/")} />
    </ParallaxScrollView>
  );
}

function NavRodape({ onVoltar, onInicio }: { onVoltar: () => void; onInicio: () => void }) {
  return (
    <View style={styles.navRodape}>
      <Pressable onPress={onVoltar} style={styles.navBotao}>
        <Text style={styles.navBotaoTexto}>Voltar</Text>
      </Pressable>
      <Pressable onPress={onInicio} style={styles.navBotao}>
        <Text style={styles.navBotaoTexto}>Início</Text>
      </Pressable>
    </View>
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
  navRodape: {
    flexDirection: "row",
    gap: 10,
    marginTop: 24,
    marginBottom: 12,
  },
  navBotao: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 14,
    backgroundColor: "#8bc1ff",
    opacity: 0.9,
  },
  navBotaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
});