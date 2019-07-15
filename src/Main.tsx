import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  FlatList,
  Keyboard,
  TouchableHighlightComponent
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import { listItems } from "./data";

interface Props {
  searchBarFocused?: boolean;
}

class Main extends Component<Props> {
  state = {
    searchBarFocused: false
  };

  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener("keyboardDidShow", this.keyboardDidShow);
    this.keyboardWillShow = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHide = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
  }

  keyboardDidShow = () => {
    this.setState({
      searchBarFocused: true
    });
  };

  keyboardWillShow = () => {
    this.setState({
      searchBarFocused: true
    });
  };

  keyboardWillHide = () => {
    this.setState({
      searchBarFocused: false
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.headerContainer}>
          <Animatable.View animation="slideInRight" style={styles.header}>
            <Animatable.View
              animation={this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"}
              duration={400}
            >
              <Ionicons
                name={this.state.searchBarFocused ? "md-arrow-back" : "ios-search"}
                duration={500}
                size={24}
              />
            </Animatable.View>
            <TextInput placeholder="Search" style={styles.input} />
          </Animatable.View>
        </View>

        <FlatList
          style={{
            backgroundColor: this.state.searchBarFocused ? "rgba(0, 0, 0, 0.3)" : "white"
          }}
          data={listItems}
          renderItem={({ item }) => <Text style={styles.flatText}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
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
    flex: 1,
    fontSize: 24,
    marginLeft: 15
  },
  flatText: {
    padding: 20,
    fontSize: 20
  }
});

export default Main;
