import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Card from "./src/components/Card";


export default function App() {
  return (
    <View style={styles.container}>
      <Card/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
});
