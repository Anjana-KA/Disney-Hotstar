import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Carousel from './app/components/Carousel';
import MySpaceScreen from './app/screens/MySpaceScreen';
import Downloads from './app/screens/SearchScreen';
import NewHot from './app/screens/New&Hot';
import SearchScreen from './app/screens/SearchScreen';

const Tab = createBottomTabNavigator();

export default function App() {
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





