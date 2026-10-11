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
          Edição México - LSM
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.paragraph}>
        As línguas de sinais são línguas naturais, possuindo gramática, vocabulário e história próprios. Diferentemente do que muitas vezes se imagina, elas não são simples representações gestuais das línguas orais e também não existe uma única língua de sinais utilizada universalmente. Cada comunidade surda desenvolveu sua própria língua de acordo com sua história e seu contexto cultural. Nesse sentido, a Língua de Sinais Mexicana (LSM) e a Língua Brasileira de Sinais (Libras) são importantes exemplos de línguas visuais-espaciais utilizadas na América Latina. Apesar de apresentarem algumas semelhanças históricas, ambas possuem características próprias e não são mutuamente inteligíveis.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        A Língua de Sinais Mexicana é utilizada pela comunidade surda do México e possui uma história relacionada ao desenvolvimento das instituições de ensino para pessoas surdas. Um dos principais acontecimentos para sua consolidação foi a fundação da Escola Nacional de Surdos, na Cidade do México, em 1867, durante o governo de Benito Juárez. Assim como ocorreu em outros países, as escolas para surdos tiveram grande importância para o desenvolvimento da língua, pois possibilitaram o encontro entre pessoas surdas de diferentes lugares e contribuíram para a formação de uma língua compartilhada. A LSM também recebeu influência da Língua de Sinais Francesa (LSF), além de incorporar sinais utilizados por comunidades surdas mexicanas. Atualmente, a LSM é reconhecida oficialmente como língua nacional do México, embora ainda existam dificuldades relacionadas ao acesso à educação bilíngue, a intérpretes e a serviços públicos.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        No Brasil, a Libras possui uma trajetória semelhante. Sua história está ligada à chegada do professor francês surdo Ernest Huet, que, em 1857, participou da fundação do Imperial Instituto de Surdos-Mudos, atualmente conhecido como Instituto Nacional de Educação de Surdos (INES), no Rio de Janeiro. Dessa forma, a Libras também recebeu forte influência da Língua de Sinais Francesa, juntamente com sinais que já eram utilizados pela comunidade surda brasileira. Seu reconhecimento oficial ocorreu por meio da Lei nº 10.436, de 2002, posteriormente regulamentada pelo Decreto nº 5.626, de 2005. Essas medidas contribuíram para ampliar o reconhecimento da Libras e estabelecer direitos relacionados ao seu uso e à educação de pessoas surdas.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        Entre a LSM e a Libras existem algumas semelhanças importantes. Ambas são línguas visuais-espaciais e utilizam parâmetros como configuração das mãos, localização, movimento, orientação da palma e expressões não manuais. Além disso, as duas línguas utilizam o espaço ao redor do corpo para organizar referências gramaticais, enquanto expressões faciais e corporais podem indicar perguntas, negações, intensidade e outras informações linguísticas. Os alfabetos manuais também apresentam algumas semelhanças, sendo utilizados principalmente para soletrar nomes próprios e palavras que não possuem um sinal específico. Essas características demonstram que existem elementos compartilhados entre as duas línguas, especialmente devido às suas origens históricas e à influência da LSF.
             </ThemedText>

      <ThemedText style={styles.paragraph}>
        Entretanto, as semelhanças não significam que LSM e Libras sejam a mesma língua. Uma das principais diferenças está no vocabulário, pois grande parte dos sinais utilizados no México é diferente daqueles empregados no Brasil. Além disso, cada língua possui suas próprias regras gramaticais, incluindo formas de organizar frases, marcar tempo, utilizar classificadores e estabelecer relações entre os elementos da oração. Os alfabetos manuais também apresentam diferenças em determinadas letras. Assim, uma pessoa surda brasileira e uma pessoa surda mexicana não conseguem necessariamente se comunicar de maneira plena utilizando apenas suas línguas nacionais, da mesma forma que acontece entre falantes de diferentes línguas orais.
             </ThemedText>
      
      <ThemedText style={styles.paragraph}>
        Outro aspecto importante são as influências culturais e regionais. A LSM mantém contato com o espanhol e apresenta variações entre diferentes regiões do México, além de sofrer influência da Língua de Sinais Americana (ASL), principalmente devido à proximidade entre os dois países e ao contato proporcionado pelas tecnologias e pelas comunidades surdas. A Libras, por sua vez, apresenta influência do português e também possui diversas variações regionais dentro do território brasileiro. Essas diferenças demonstram que as línguas de sinais, assim como as línguas orais, estão em constante transformação e são influenciadas pelas comunidades que as utilizam.
             </ThemedText>

      <ThemedText style={styles.paragraph}>
        Também existem diferenças relacionadas às políticas educacionais e linguísticas. No Brasil, a legislação relacionada à Libras e à educação bilíngue apresenta uma estrutura mais consolidada, considerando a Libras como primeira língua e o português escrito como segunda língua para estudantes surdos. Apesar disso, ainda existem dificuldades na implementação dessas políticas. No México, o acesso ao ensino em LSM também enfrenta obstáculos, especialmente porque muitas crianças surdas não têm contato precoce com uma língua de sinais, o que pode prejudicar seu desenvolvimento linguístico e educacional.
             </ThemedText>
      
      <ThemedText style={styles.paragraph}>
        Portanto, a comparação entre a Língua de Sinais Mexicana e a Libras demonstra que as línguas de sinais possuem autonomia, complexidade e identidade própria. Embora LSM e Libras compartilhem características visuais-espaciais e influências históricas, principalmente da Língua de Sinais Francesa, elas se desenvolveram de maneira independente dentro de diferentes comunidades e culturas. Compreender essas diferenças é fundamental para combater a ideia equivocada de que existe uma única língua de sinais universal. Além disso, valorizar e garantir o uso dessas línguas contribui para assegurar os direitos linguísticos, o acesso à educação e a inclusão social das pessoas surdas.
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