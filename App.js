import "react-native-gesture-handler"
import React from "react";
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';
import HomeScreen from "./Screens/HomeScreen";
import SignupScreen from "./Screens/SignupScreen";
import LocationScreen from "./Screens/locationScreen";
import LoginScreen from "./Screens/LoginScreen";
import ConfirmScreen from "./Screens/confirmationScreen";

import { CurrentRenderContext, NavigationContainer, NavigationHelpersContext } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
     {/* <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} options={{header: () => null}} />*/}
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{header: () => null}} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{header: () => null}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="LocationScreen" component={LocationScreen}  />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}