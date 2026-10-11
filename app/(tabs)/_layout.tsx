import { Tabs } from "expo-router";
import { Image } from "react-native";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const resolvedScheme = colorScheme === "dark" ? "dark" : "light";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[resolvedScheme].tint,
        tabBarInactiveTintColor: "#8ec0fb",
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/iconhome.png")}
              style={{ width: 28, height: 28, tintColor: color }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="testes"
        options={{
          title: "Atividades",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/iconativ.png")}
              style={{ width: 28, height: 28, tintColor: color }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="tradutor"
        options={{
          title: "Tradutor",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/icontrad.png")}
              style={{ width: 28, height: 28, tintColor: color }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="o-que-eh-libras"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="infos"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/iconinfo.png")}
              style={{ width: 28, height: 28, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="dicion"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="nossotras"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="videoaulas"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="Alfabeto"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="Saudacoes"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="Numeros"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="Cores"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="Verbos"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="[letra]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="politica"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="videos-verbos"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="videos-cores"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="video-alfabeto"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="video-saudacoes"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="modulo-indisponivel"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="texto1"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="texto2"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="texto3"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="texto4"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="video-numeros"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="texto5"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="texto6"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
