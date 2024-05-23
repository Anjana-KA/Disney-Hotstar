import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.posterURL }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: 300,
    height: 450,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
});
