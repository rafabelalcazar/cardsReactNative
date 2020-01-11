import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Card from "./src/components/Card";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card
          img="https://static3.depositphotos.com/1001890/175/i/950/depositphotos_1759729-stock-photo-sunflower-agriculture-background-beaut.jpg"
          title="Propiedades del Girasol"
          description="Las bondades del girasol son tatatata jas asldfj lasdkfjsal dfkjasdlf kasjdf laskdjf aslfd"
        />
        <Card
          img="https://img.freepik.com/free-vector/abstract-particles-background-with-light-effect_1017-20135.jpg?size=626&ext=jpg"
          title="Arte"
          description="Las bondades del girasol son tatatata jas asldfj lasdkfjsal dfkjasdlf kasjdf laskdjf aslfd"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
