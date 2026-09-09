import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Link } from "expo-router";

export default class contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Contact Us </Text>
        <Link href="/home">
          <Text>Go Back</Text>
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
