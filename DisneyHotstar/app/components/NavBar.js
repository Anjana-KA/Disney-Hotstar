import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import MySpaceScreen from "../screens/MySpaceScreen";
import Downloads from "../screens/Downloads";
import NewHot from "../screens/New&Hot";
import SearchScreen from "../screens/SearchScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeTab"
      component={Carousel}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

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
                iconName = focused
                  ? "cloud-download"
                  : "cloud-download-outline";
              } else if (route.name === "My Space") {
                iconName = focused ? "person" : "person-outline";
              } else if (route.name === "Favorites") {
                iconName = focused ? "heart" : "heart-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
              display: "flex",
              borderTopWidth: 0,
              backgroundColor: "black",
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="New & Hot" component={NewHot} />
          <Tab.Screen name="Downloads" component={Downloads} />
          <Tab.Screen name="My Space" component={MySpaceScreen} />
          <Tab.Screen name="Favorites" component={MySpaceScreen} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
