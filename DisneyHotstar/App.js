import React from "react";
import { View } from "react-native";
import NavBar from "./app/components/NavBar";
import { MySpaceProvider } from "./app/context/MySpaceContext"; 

export default function App() {
  return (
    <MySpaceProvider> 
      <View style={{ flex: 1 }}>
        <NavBar />
      </View>
    </MySpaceProvider>
  );
}
