import { Link } from "expo-router";
import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> The freshest to ever do it </Text>
        <Text> This is a React Native app </Text>
        <Link href="/about">
          <Text>Learn More</Text>
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    padding: 16,
    fontSize: 20,
    fontWeight: "bold",
  },
});
