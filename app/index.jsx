import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title }> The freshes to ever do it </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  }, 
});
