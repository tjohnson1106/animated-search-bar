import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class Main extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Ionicons name="ios-search" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  headerContainer: {
    height: 80,
    backgroundColor: "#222a40",
    justifyContent: "center",
    paddingHorizontal: 5
  },
  header: {
    height: 50,
    backgroundColor: "white"
  }
});

export default Main;
