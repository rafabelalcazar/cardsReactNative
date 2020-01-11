import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class Card extends Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <Image
          style={styles.img}
          source={{
            uri:
              "https://static3.depositphotos.com/1001890/175/i/950/depositphotos_1759729-stock-photo-sunflower-agriculture-background-beaut.jpg"
          }}
        />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>Titulo</Text>
          <Text style={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    cardContainer: {
      height:400,
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
    img:{
      flex:1,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    title:{
      fontSize: 20,
      fontWeight:'bold',
      color: "#555"
    },
    description:{
      color: '#555'
    }
  });
  
