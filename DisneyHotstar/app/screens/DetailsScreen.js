import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MovieList from "../components/MovieList";

export default function DetailsScreen({ route }) {
  const { movie } = route.params;

  return (
    <ScrollView View style={styles.container}>
      <Image source={{ uri: movie.posterURL }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
      <TouchableOpacity style={styles.subscribeButton}>
        <AntDesign
          name="caretright"
          size={20}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.subscribeText2}>Watch Now</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Family | Comedy | Action | Adventure</Text>
      <Text style={styles.description}>
        "Wish (Disney)" and "Disney's Wish" redirect here. For the Disney Cruise
        Line ship, see Disney Wish. This article is about the 2023 Disney
        film.For the 2013 South Korean film also known as Wish.
      </Text>
      <View style={styles.movieListContainer}>
        <MovieList />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    width: "100%",
  },
  image: {
    width: "100%",
    height: 300,
    paddingLeft: 60,
  },
  title: {
    fontSize: 44,
    fontWeight: "bold",
    color: "white",
    top: 20,
    alignSelf: "center",
  },
  subscribeText2: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 160,
    backgroundColor: "rgba(250, 247, 251, 0.9)",
    position: "absolute",
    top: 40,
    alignSelf: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    borderRadius: 6,
  },
  icon: {
    zIndex: 1,
    top: 55,
    left: 150,
    color: "black",
  },
  description: {
    color: "white",
    top: 100,
    justifyContent: "center",
    color: "darkgray",
  },
  text: {
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    top: 90,
  },
  movieListContainer: {
    flex: 1,
    top: 200,
    justifyContent: "flex-end",
    width: "100%",
  },
});
