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

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const resp = await fetch("https://api.sampleapis.com/movies/mystery");
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
      <Text style={styles.headings}>Hotstar Specials</Text>
      <ScrollView horizontal={true}>
        <View style={styles.containers}>
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
  containers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 225,
    margin: 5,
  },
  headings: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2,
    color: "white",
  },
});

export default PopularMovies;
