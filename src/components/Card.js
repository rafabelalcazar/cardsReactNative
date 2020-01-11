import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class Card extends Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <Image style={styles.img} source={{ uri: this.props.img }} />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    height: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 10,
    backgroundColor: "white",
    borderRadius: 10
  },
  img: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#555"
  },
  description: {
    color: "#555"
  }
});
