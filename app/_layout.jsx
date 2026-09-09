import React, { Component } from "react";
import { Text, View } from "react-native";
import { Stack } from "expo-router";

export default class RootLayout extends Component {
  render() {
    return (
      <Stack initialRouteName="home">
        <Stack.Screen
          name="home"
          options={{
            title: "Home",
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
            headerShown: false,
          }}
        />
      </Stack>
    );
  }
}
