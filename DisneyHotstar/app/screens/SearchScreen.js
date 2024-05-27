import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { fetchMovies } from "../api/Api";

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetchMovies()
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  const handleMoviePress = (movie) => {};

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filteredMovies);
  };

  const renderMovies = () => {
    return filteredMovies.map((movie, index) => (
      <TouchableOpacity key={index} onPress={() => handleMoviePress(movie)}>
        <Image source={{ uri: movie.posterURL }} style={styles.image} />
      </TouchableOpacity>
    ));
  };

  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search movies..."
          onChangeText={handleSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {chunkArray(renderMovies(), 3).map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  content: {
    flexGrow: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 200,
    margin: 5,
  },
});
