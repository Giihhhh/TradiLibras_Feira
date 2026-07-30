import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Fonts } from "@/constants/theme";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from "react-native";

export default function Texto3() {
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
          História da Libras
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.paragraph}>
        A ciência linguística, embora com raízes no estudo das línguas orais
        desde a Índia antiga, ganhou contornos modernos há pouco mais de um
        século com as propostas de Ferdinand de Saussure, que redefiniu as
        línguas como sistemas abstratos, psíquicos, compostos por relações
        complexas entre seus elementos. Essa visão estrutural permeia as
        diversas correntes linguísticas contemporâneas, apesar das variações
        teóricas. No século XX, a linguística consolidou características
        essenciais das línguas naturais, destacando sua estrutura articulada
        e produtiva, sua convencionalidade e arbitrariedade, o que permite a
        grande flexibilidade e abstração, fundamentais para a comunicação
        humana.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        A partir desse entendimento, as línguas de sinais começaram a ser
        reconhecidas como línguas naturais, após cientistas perceberem como
        essas línguas poderiam ser analisadas à luz dos mesmos princípios.
        Pioneiro nesse campo, William Stokoe demonstrou que as línguas de
        sinais utilizam um número finito de elementos, como configurações,
        movimentos e localizações das mãos, de maneira produtiva e
        econômica. Posteriormente, os estudos de Edward Klima e Ursula
        Bellugi consolidaram essa visão, evidenciando que, além de
        convencionais e arbitrárias, as línguas de sinais possuem uma
        gramática visual e espacial tão complexa quanto a das línguas orais.
        Essa descoberta abriu caminho para um novo campo de pesquisa, que
        continua se expandindo.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        No Brasil, a história da educação de surdos começa com a fundação do
        Instituto Nacional de Surdos-Mudos (INSM), estabelecido pela Lei nº
        839, sancionada por D. Pedro II em 1857. A criação do INSM foi
        motivada, em parte, pelo interesse pessoal do imperador, que se
        sensibilizou com a condição de surdez de seu neto. Em 1855, a pedido
        de D. Pedro II, a escola foi inaugurada com a ajuda do professor
        surdo francês Ernest Huet, do Instituto de Surdos-Mudos de Paris.
        Esse legado de influências francesas se reflete fortemente na Língua
        Brasileira de Sinais (LIBRAS), que compartilha características com a
        Língua Francesa de Sinais.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        O reconhecimento da LIBRAS como língua nacional no Brasil, somado ao
        uso crescente de tecnologias, tem impulsionado as pesquisas sobre
        essa língua. Ferramentas como o Sistema de Anotação ELAN permitem a
        análise detalhada de vídeos em LIBRAS, facilitando o estudo de sua
        estrutura e uso. No Brasil, acadêmicos têm incorporado essas
        ferramentas em suas pesquisas, consolidando o avanço metodológico na
        área (Maccleary, Viotti e Leite, 2010; Quadros e Pizzio, 2007).
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        A morfologia das línguas de sinais, embora inspirada nos estudos das
        línguas orais, apresenta características próprias devido à diferença
        de modalidade. Pesquisadores como Klima e Bellugi (1979), Quadros e
        Karnopp (2004), Sandler e Lillo-Martin (2006), entre outros, têm se
        debruçado sobre essas especificidades, buscando identificar e
        descrever os processos morfológicos das línguas de sinais. A
        morfologia das línguas de sinais envolve a combinação de
        constituintes para formar unidades linguísticas significativas,
        conhecidas como sinais. Esses estudos morfológicos são essenciais
        para expandir o entendimento sobre a construção das línguas de
        sinais, identificando as formas e os processos que as compõem. A
        pesquisadora Emmorey (2002) destaca que as línguas de sinais possuem
        um léxico mental de formas sinalizadas e um sistema de criação de
        novos sinais, no qual morfemas são combinados para formar
        significados. Avanços metodológicos recentes também têm permitido o
        desenvolvimento de ferramentas como o Identificador de Sinais, com
        identidades pré-definidas para cada sinal, e o Projeto Corpus de
        Libras, que visa à criação de um corpus de LIBRAS para pesquisa e
        outras finalidades aplicadas. Esse projeto, coordenado por Tarcísio
        Leite e Ronice M. de Quadros, visa oferecer não apenas o corpus de
        LIBRAS, mas também diretrizes para o registro e arquivamento de
        dados relacionados ao uso da língua, além de um programa online para
        acessar esses dados e metadados. Essas iniciativas são fundamentais
        para o desenvolvimento acadêmico e a padronização do uso da LIBRAS no
        Brasil, promovendo uma compreensão mais profunda e precisa dessa
        língua.
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