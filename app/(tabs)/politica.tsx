import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function PoliticaPrivacidadePage() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Política de Privacidade
      </ThemedText>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ThemedText style={styles.updatedAt}>
          Última atualização: 29/07/2026
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>1. Introdução</ThemedText>
        <ThemedText style={styles.paragraph}>
          Obrigado por utilizar o TradiLibras! Esta Política de Privacidade
          explica quais dados pessoais coletamos quando você usa nosso
          aplicativo, como esses dados são tratados e quais são os seus direitos
          em relação a eles.
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          O TradiLibras atua como controlador dos dados para os fins da Lei
          Geral de Proteção de Dados (Lei nº 13.709/2018 – "LGPD"). Ao instalar,
          acessar ou usar o TradiLibras, você concorda com os termos desta
          Política de Privacidade. Podemos atualizar este documento
          periodicamente para refletir mudanças em nossas práticas. Caso
          alterações relevantes sejam feitas, publicaremos um aviso na loja de
          aplicativos e/ou dentro do próprio app com pelo menos 7 dias de
          antecedência, indicando a data da última revisão ao final deste
          documento. As alterações entram em vigor ao término desse prazo.
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          Esta Política funciona em conjunto com as políticas de privacidade de
          serviços de terceiros eventualmente integrados ao aplicativo conforme
          detalhado abaixo.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>
          2. Informações que coletamos
        </ThemedText>

        <ThemedText style={styles.subsectionTitle}>
          2.1 Informações fornecidas por você
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          No cadastro, podemos solicitar seu nome, e-mail e perfil de uso (por
          exemplo, se você é surdo, ouvinte ou está aprendendo Libras por outro
          motivo), para personalizar sua experiência de aprendizado.
        </ThemedText>

        <ThemedText style={styles.subsectionTitle}>
          2.2 Captura de imagem para reconhecimento de sinais
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          O TradiLibras utiliza a câmera do dispositivo para capturar os
          movimentos das mãos e reconhecer sinais em Libras, por meio de
          tecnologias de visão computacional (como extração de pontos de
          referência da mão). As imagens e vídeos capturados pela câmera são
          processados localmente para o reconhecimento do sinal e não são
          armazenados nem enviados a servidores de terceiros como arquivos de
          imagem/vídeo.
        </ThemedText>

        <ThemedText style={styles.subsectionTitle}>
          2.3 Relatórios de erro (Crash Analytics)
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          Caso ocorra um erro durante o uso do aplicativo, podemos coletar
          automaticamente, por meio de ferramentas de terceiros, dados técnicos
          do dispositivo, como endereço IP, modelo e versão do sistema
          operacional, configurações do app no momento do erro, e data/hora do
          evento. Esses dados nos ajudam a identificar e corrigir falhas.
        </ThemedText>

        <ThemedText style={styles.subsectionTitle}>
          2.4 Conteúdo em vídeo de terceiros
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          Caso o aplicativo utilize vídeos hospedados em plataformas como o
          YouTube para exibir aulas ou exemplos de sinais, o uso dessas
          funcionalidades está sujeito também aos termos e à política de
          privacidade da respectiva plataforma.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>
          3. Como usamos suas informações
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          Usamos os dados coletados para:
        </ThemedText>
        <ThemedText style={styles.bullet}>
          • Viabilizar o reconhecimento e a tradução de sinais em Libras;
        </ThemedText>
        <ThemedText style={styles.bullet}>
          • Corrigir falhas técnicas e melhorar a estabilidade do aplicativo;
        </ThemedText>
        <ThemedText style={styles.bullet}>
          • Aprimorar a precisão do nosso modelo de reconhecimento por meio de
          dados anonimizados;
        </ThemedText>
        <ThemedText style={styles.bullet}>
          • Enviar avisos sobre novas funcionalidades ou atualizações relevantes
          do aplicativo;
        </ThemedText>
        <ThemedText style={styles.bullet}>
          • Enviar comunicações sobre novidades e conteúdos educacionais,
          somente mediante seu consentimento prévio.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>
          4. Links para outros sites e conteúdos
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          O aplicativo pode conter links para sites ou conteúdos externos (por
          exemplo, materiais de referência sobre Libras). Não nos
          responsabilizamos pelas práticas de privacidade desses terceiros.
          Recomendamos a leitura da política de privacidade de qualquer site
          externo acessado a partir do TradiLibras.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>
          5. Privacidade de crianças e adolescentes
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          O TradiLibras pode ser utilizado por menores de idade com a supervisão
          de pais, responsáveis ou educadores, dado seu propósito educacional.
          Quando o uso envolver crianças menores de 13 anos, buscamos coletar o
          mínimo de dados pessoais necessário e apenas com o consentimento dos
          pais ou responsáveis, conforme exigido pela LGPD e demais legislações
          aplicáveis. Pais ou responsáveis que identifiquem o fornecimento
          indevido de dados pessoais por uma criança podem entrar em contato
          conosco para solicitar a remoção dessas informações.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>
          6. Seus direitos como titular de dados
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          Nos termos da LGPD, você pode, a qualquer momento, solicitar:
        </ThemedText>
        <ThemedText style={styles.bullet}>
          • Confirmação da existência de tratamento de seus dados;
        </ThemedText>
        <ThemedText style={styles.bullet}>
          • Acesso, correção ou atualização de seus dados;
        </ThemedText>
        <ThemedText style={styles.bullet}>
          • Anonimização, bloqueio ou eliminação de dados desnecessários ou
          tratados em desconformidade com a lei;
        </ThemedText>
        <ThemedText style={styles.bullet}>
          • Portabilidade dos dados a outro fornecedor de serviço;
        </ThemedText>
        <ThemedText style={styles.bullet}>
          • Revogação do consentimento e eliminação dos dados tratados com base
          nele.
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          Para exercer esses direitos, entre em contato pelo e-mail informado na
          seção "Contato" abaixo.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>
          7. Segurança dos dados
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          Adotamos medidas técnicas e organizacionais razoáveis para proteger
          seus dados pessoais contra acesso não autorizado, perda, alteração ou
          divulgação indevida. Ainda assim, nenhum sistema é totalmente livre de
          riscos, e recomendamos que você também adote boas práticas de
          segurança, como manter seu dispositivo e aplicativo atualizados.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>
          8. Disposições gerais
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          a) Esta Política de Privacidade pode ser atualizada a qualquer
          momento, sendo a versão vigente publicada na loja de aplicativos e/ou
          dentro do próprio app. Recomendamos que você a revise periodicamente.
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          b) Esta Política é regida pela legislação brasileira.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>9. Contato</ThemedText>
        <ThemedText style={styles.paragraph}>
          Se você tiver dúvidas, sugestões ou quiser exercer seus direitos sobre
          seus dados pessoais, entre em contato conosco pelo e-mail:
        </ThemedText>

        <ThemedText style={styles.paragraph}>handcodetech@gmail.com</ThemedText>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginTop: 40,
    marginBottom: 4,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    gap: 6,
    paddingBottom: 32,
  },
  updatedAt: {
    opacity: 0.6,
    fontSize: 13,
    marginBottom: 8,
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: 17,
    marginTop: 16,
  },
  subsectionTitle: {
    fontWeight: "600",
    fontSize: 15,
    marginTop: 10,
  },
  paragraph: {
    opacity: 0.85,
    lineHeight: 20,
    justifyContent: "flex-start",
    textAlign: "justify",
    marginBottom: 8,
  },
  bullet: {
    opacity: 0.85,
    lineHeight: 20,
    paddingLeft: 8,
    justifyContent: "flex-start",
    textAlign: "justify",
    marginBottom: 8,
  },
});
