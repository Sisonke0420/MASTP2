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
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: theme.navigationBackground },
            headerTintColor: theme.text,
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
        <Stack.Screen
          name="Home"
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Contact"
          options={{ title: "Contact", headerShown: false }}
        />
        </Stack>
      </MenuProvider>
    </ThemeProvider>
  );
}
