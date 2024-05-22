import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Carousel from "../components/Carousel";
import MySpaceScreen from "./../screens/MySpaceScreen";
import Downloads from "./../screens/Downloads";
import NewHot from "./../screens/New&Hot";
import SearchScreen from "./../screens/SearchScreen";

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={Carousel} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="New & Hot" component={NewHot} />
          <Tab.Screen name="Downloads" component={Downloads} />
          <Tab.Screen name="My Space" component={MySpaceScreen} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}
