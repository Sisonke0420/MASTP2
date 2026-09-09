import React, { Component } from "react";
import { Text, View, useColorScheme } from "react-native";
import { Stack } from "expo-router";

export default class RootLayout extends Component {
  render() {
    return (
      <Stack
        initialRouteName="home"
        screenOptions={{
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#e3e3e3",
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
          options={{
            title: "About",
          }}
        />
        <Stack.Screen
          name="contact"
          options={{
            title: "Contact",
          }}
        />
      </Stack>
    );
  }
}
