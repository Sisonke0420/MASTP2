import React from "react";
import { useColorScheme } from "react-native";
import { Stack } from "expo-router";
import { colors } from "../constants/color";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;

  return (
    <Stack
      initialRouteName="home"
      screenOptions={{
        headerStyle: { backgroundColor: theme.navigationBackground },
        headerTintColor: theme.title ,
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="contact" options={{ title: "Contact" }} />
    </Stack>
  );
}
 