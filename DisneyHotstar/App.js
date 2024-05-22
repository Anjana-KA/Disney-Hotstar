import React from "react";
import { View } from "react-native";
import NavBar from "./app/components/NavBar";
import MovieList from "./app/components/MovieList"

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
    </View>
  
  );
}
