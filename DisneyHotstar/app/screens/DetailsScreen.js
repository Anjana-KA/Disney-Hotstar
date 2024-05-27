import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import MySpaceContext from "../context/MySpaceContext";
import MovieList from "../components/MovieList";
import MovieLists from "../components/MovieLists";
export default function DetailsScreen({ route }) {
  const { movie } = route.params;
  const [isHearted, setIsHearted] = useState(false);
  const { likedCards, addLikedCard, removeLikedCard } = useContext(MySpaceContext);

  useEffect(() => {
    setIsHearted(likedCards.some(card => card.id === movie.id));
  }, [likedCards, movie]);

  const toggleHeart = () => {
    setIsHearted(prevIsHearted => !prevIsHearted);
    if (!isHearted) {
      addLikedCard(movie);
    } else {
      removeLikedCard(movie.id);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.posterURL }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
      <TouchableOpacity style={styles.subscribeButton}>
        <AntDesign
          name="caretright"
          size={20}
          color="black"
          style={styles.icon}
        />
        <Text style={styles.subscribeText}>Watch Now</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Family | Comedy | Action | Adventure</Text>
      <Text style={styles.description}>
        "Wish (Disney)" and "Disney's Wish" redirect here. For the Disney Cruise
        Line ship, see Disney Wish. This article is about the 2023 Disney
        film.For the 2013 South Korean film also known as Wish.
      </Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconWrapper}>
          <MaterialIcons name="add" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <AntDesign name="sharealt" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <MaterialIcons name="file-download" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <AntDesign
            name={isHearted ? "heart" : "hearto"}
            size={24}
            color={isHearted ? "red" : "white"}
            onPress={toggleHeart}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.movieListContainer}>
        <MovieList />
        <MovieLists />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
  subscribeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(250, 247, 251, 0.9)",
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 10,
  },
  subscribeText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    marginTop: 10,
  },
  description: {
    color: "white",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
  iconWrapper: {
    marginHorizontal: 20,
  },
  movieListContainer: {
    marginTop: 20,
  },
});
