import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

const MovieList = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const resp = await fetch("https://api.sampleapis.com/movies/horror");
        const data = await resp.json();
        const urls = data.map((movie) => movie.posterURL);
        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <View>
      <Text style={styles.heading}>Latest Releases</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          {imageUrls.map((url, index) => (
            <Image key={index} source={{ uri: url }} style={styles.image} />
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
