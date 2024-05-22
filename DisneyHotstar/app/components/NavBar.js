import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Example: using Ionicons from Expo
import Carousel from "../components/Carousel";
import MySpaceScreen from "./../screens/MySpaceScreen";
import Downloads from "./../screens/Downloads";
import NewHot from "./../screens/New&Hot";
import SearchScreen from "./../screens/SearchScreen";

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Search") {
                iconName = focused ? "search" : "search-outline";
              } else if (route.name === "New & Hot") {
                iconName = focused ? "flame" : "flame-outline";
              } else if (route.name === "Downloads") {
                iconName = focused ? "cloud-download" : "cloud-download-outline";
              } else if (route.name === "My Space") {
                iconName = focused ? "person" : "person-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Home" component={Carousel} options={{ headerShown: false }} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="New & Hot" component={NewHot} />
          <Tab.Screen name="Downloads" component={Downloads} />
          <Tab.Screen name="My Space" component={MySpaceScreen} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    text: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
    },
  });
  