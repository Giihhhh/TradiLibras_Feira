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
          Edición México - LSM
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.paragraph}>
        Las lenguas de señas son lenguas naturales que poseen su propia gramática, vocabulario e historia. A diferencia de lo que suele pensarse, no son simples representaciones gestuales de las lenguas orales ni existe una única lengua de señas utilizada de manera universal. Cada comunidad sorda ha desarrollado su propia lengua en función de su historia y su contexto cultural. En este sentido, la Lengua de Señas Mexicana (LSM) y la Lengua Brasileña de Señas (Libras) son importantes ejemplos de lenguas visoespaciales utilizadas en América Latina. Aunque presentan algunas semejanzas históricas, ambas poseen características propias y no son mutuamente inteligibles.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        La Lengua de Señas Mexicana es utilizada por la comunidad sorda de México y tiene una historia vinculada al desarrollo de las instituciones educativas para personas sordas. Uno de los acontecimientos principales para su consolidación fue la fundación de la Escuela Nacional de Sordos en la Ciudad de México, en 1867, durante el gobierno de Benito Juárez. Al igual que ocurrió en otros países, las escuelas para sordos desempeñaron un papel de gran relevancia en el desarrollo de la lengua, ya que permitieron el encuentro entre personas sordas de diferentes regiones y contribuyeron a la formación de una lengua compartida. La LSM también recibió la influencia de la Lengua de Señas Francesa (LSF), además de incorporar señas utilizadas por comunidades sordas mexicanas. En la actualidad, la LSM está reconocida oficialmente como lengua nacional en México, aunque aún persisten dificultades en el acceso a la educación bilingüe, a intérpretes y a servicios públicos.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        En Brasil, la Libras posee una trayectoria similar. Su historia está ligada a la llegada del profesor francés sordo Ernest Huet, quien en 1857 participó en la fundación del Imperial Instituto de Surdos-Mudos, conocido actualmente como Instituto Nacional de Educação de Surdos (INES), en Río de Janeiro. De este modo, la Libras también recibió una fuerte influencia de la Lengua de Señas Francesa, junto con señas que ya empleaba la comunidad sorda brasileña. Su reconocimiento oficial se produjo mediante la Ley n.º 10.436 de 2002, reglamentada posteriormente por el Decreto n.º 5.626 de 2005. Estas medidas contribuyeron a ampliar el reconocimiento de la Libras y a establecer derechos vinculados a su uso y a la educación de las personas sordas.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        Entre la LSM y la Libras existen semejanzas importantes. Ambas son lenguas visoespaciales y utilizan parámetros como la configuración manual, la localización, el movimiento, la orientación de la palma y las expresiones no manuales. Además, ambas lenguas emplean el espacio peri-corporal para organizar referencias gramaticales, mientras que las expresiones faciales y corporales permiten indicar preguntas, negaciones, intensidad y otra información lingüística. Los alfabetos manuales también presentan ciertas semejanzas y se utilizan principalmente para deletrear nombres propios y palabras que no cuentan con una seña específica. Estas características demuestran la existencia de elementos compartidos entre ambas lenguas, debido especialmente a sus orígenes históricos y a la influencia de la LSF.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        Sin embargo, estas semejanzas no implican que la LSM y la Libras sean la misma lengua. Una de las diferencias principales radica en el vocabulario, ya que gran parte de las señas utilizadas en México difiere de las empleadas en Brasil. Asimismo, cada lengua cuenta con sus propias reglas gramaticales, lo que incluye las formas de estructurar las oraciones, marcar el tiempo verbal, utilizar clasificadores y establecer relaciones entre los elementos de la proposición. Los alfabetos manuales también muestran variaciones en determinadas letras. Por ello, una persona sorda brasileña y una persona sorda mexicana no pueden necesariamente comunicarse de manera plena utilizando únicamente sus lenguas nacionales, del mismo modo que ocurre entre hablantes de distintas lenguas orales.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        Otro aspecto relevante son las influencias culturales y regionales. La LSM mantiene contacto con el español y presenta variaciones entre las distintas regiones de México, además de recibir la influencia de la Lengua de Señas Americana (ASL), debido principalmente a la proximidad geográfica entre ambos países y al contacto propiciado por las tecnologías y las comunidades sordas. Por su parte, la Libras recibe la influencia del portugués y cuenta asimismo con diversas variaciones regionales dentro del territorio brasileño. Estas diferencias demuestran que las lenguas de señas, al igual que las lenguas orales, se encuentran en constante transformación y se ven influidas por las comunidades que las utilizan.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        Existen también diferencias en cuanto a las políticas educativas y lingüísticas. En Brasil, la legislación relativa a la Libras y a la educación bilingüe presenta un marco más consolidado, al considerar la Libras como primera lengua y el portugués escrito como segunda lengua para los estudiantes sordos. A pesar de ello, aún se observan dificultades en la implementación de estas políticas. En México, el acceso a la enseñanza en LSM también enfrenta obstáculos, especialmente debido a que muchos niños sordos no tienen un contacto temprano con una lengua de señas, lo que puede repercutir negativamente en su desarrollo lingüístico y educativo.
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        Por consiguiente, la comparación entre la Lengua de Señas Mexicana y la Libras demuestra que las lenguas de señas poseen autonomía, complejidad e identidad propia. Aunque la LSM y la Libras comparten características visoespaciales e influencias históricas —principalmente de la Lengua de Señas Francesa—, se han desarrollado de manera independiente en el seno de distintas comunidades y culturas. Comprender estas diferencias resulta fundamental para erradicar la noción errónea de que existe una única lengua de señas universal. Asimismo, valorar y garantizar el uso de estas lenguas contribuye a asegurar los derechos lingüísticos, el acceso a la educación y la inclusión social de las personas sordas.
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