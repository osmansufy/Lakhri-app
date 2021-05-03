import { StatusBar } from "expo-status-bar";
import React from "react";

import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

//React navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import HomeScreen from "./src/screens/HomeScreen";
import SignIn from "./src/screens/SignIn";
import Signup from "./src/screens/SignUp";

const Stack = createStackNavigator();
const MyTheme = {
  dark: false,
  colors: {
    backgroundColor: "#fff",
  },
};
const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      {/* <HomeNavigator /> */}
      <AuthNavigator />
    </NavigationContainer>
  );
}
