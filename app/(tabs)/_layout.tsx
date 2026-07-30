import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
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
    </Tabs>
  );
}
