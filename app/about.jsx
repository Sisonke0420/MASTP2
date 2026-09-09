import { Link } from "expo-router";
import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class about extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.title}> About Us </Text>
          <Link href="/home">
            <Text>Go Back</Text>
          </Link>
          <Link href="/contact">
            <Text>Contact Us</Text>
          </Link>
        </View>
      </>
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
