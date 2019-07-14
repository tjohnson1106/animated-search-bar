import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

class Main extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.headerContainer}>
          <Animatable.View animation="slideInRight" style={styles.header}>
            <Ionicons name="ios-search" size={24} />
            <TextInput placeholder="Search" style={styles.input} />
          </Animatable.View>
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
    backgroundColor: "white",
    flexDirection: "row",
    padding: 5,
    alignItems: "center"
  },
  input: {
    fontSize: 24,
    marginLeft: 15
  }
});

export default Main;
