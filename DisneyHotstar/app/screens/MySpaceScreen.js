import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; 
import MySpaceContext from "../context/MySpaceContext";

export default function MySpaceScreen() {
  const { likedCards, removeLikedCard } = useContext(MySpaceContext);

  const handleUnlike = (cardId) => {
    removeLikedCard(cardId);
  };

  return (
    <ScrollView style={styles.scrollView}>
      {likedCards.map((card) => (
        <View style={styles.cardContainer} key={card.id}>
          <TouchableOpacity
            onPress={() => handleUnlike(card.id)}
            style={styles.likeButton}
          >
            <FontAwesome name="heart" size={24} color="#ff0000" />
          </TouchableOpacity>
          <Text style={styles.cardTitle}>Title: {card.title}</Text>
          <Text style={styles.cardText}>{card.genre}</Text>
          <Image source={{ uri: card.posterURL }} style={styles.posterImage} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  cardContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 3,
    position: "relative", // Add this to properly position the heart icon
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  posterImage: {
    width: 180,
    height: 280,
    borderRadius: 8,
  },
  likeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
