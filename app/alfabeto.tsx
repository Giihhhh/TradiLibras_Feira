import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Fonts } from "@/constants/theme";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";

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
          Alfabeto
        </ThemedText>
      </ThemedView>
    <View style={styles.lettersGrid}>
      <ThemedView style={styles.centerButtonContainer}>
            <Link href="/alfabeto" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/a.png")}
                    style={styles.letterIcon}
                    />
                </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

          <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/b.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

          <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/c.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

          <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/d.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/e.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/f.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/g.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/h.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/i.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/j.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/k.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/l.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/m.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/n.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/o.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/p.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/q.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/r.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/s.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/t.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/u.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/v.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/w.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/x.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/y.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>

        <ThemedView style={styles.centerButtonContainer}>
            <Link href="/tradutor" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={[styles.customButton, pressed && styles.customButtonPressed]}>
                    <Image
                    source={require("@/assets/images/z.png")}
                    style={styles.letterIcon}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          </ThemedView>
    </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
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
  letterIcon: {
  width: "110%",
  height: "110%",
  resizeMode: "center", // mostra o quadrado inteiro, sem cortar
},
  reactLogo: {
    width: "100%",
    height: 180,
    resizeMode: "cover"
  },

  lettersGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12, // espaço entre os botões, tanto horizontal quanto vertical
  },

  centerButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  customButton: {
    backgroundColor: "#8bc1ff",
    opacity: 0.95,
    paddingVertical: 1, 
    width: 140, 
    height: 140,
    borderRadius: 21,
    alignItems: "center",
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
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
