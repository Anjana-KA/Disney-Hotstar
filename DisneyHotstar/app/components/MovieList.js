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
import { fetchMovies } from "../api/Api";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {}
    };
    fetchMoviesData();
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
