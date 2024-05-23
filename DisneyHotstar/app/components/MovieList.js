import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const resp = await fetch("https://api.sampleapis.com/movies/horror");
        const data = await resp.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  const handleMoviePress = (movie) => {
    navigation.navigate("Details", { movie });
  };

  return (
    <View>
      <Text style={styles.heading}>Latest Releases</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          {movies.map((movie, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleMoviePress(movie)}
            >
              <Image source={{ uri: movie.posterURL }} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 180,
  },
  image: {
    width: 150,
    height: 225,
    margin: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "white",
  },
});

export default MovieList;
