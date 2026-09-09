import React, { Component } from "react";
import { Text, View } from "react-native";
import { Stack } from "expo-router";

export default class RootLayout extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Stack />
        <Text> Footer </Text>
      </View>
    );
  }
}
