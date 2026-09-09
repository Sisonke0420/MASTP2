import React from "react";
import { useColorScheme } from "react-native";
import { Stack } from "expo-router";
import { colors } from "../constants/color";
import { MenuProvider } from "../constants/menu-context";
import { ThemeProvider } from "../constants/theme-context";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;

  return (
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <Stack
          initialRouteName="home"
          screenOptions={{
            headerStyle: { backgroundColor: theme.navigationBackground },
            headerTintColor: theme.text,
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
        <Stack.Screen
          name="about"
          options={{ title: "Menu", headerShown: false }}
        />
        <Stack.Screen
          name="contact"
          options={{ title: "Contact", headerShown: false }}
        />
        </Stack>
      </MenuProvider>
    </ThemeProvider>
  );
}
