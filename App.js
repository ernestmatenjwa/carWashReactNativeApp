import "react-native-gesture-handler"
import React from "react";
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';
import HomeScreen from "./Screens/HomeScreen";

import { CurrentRenderContext, NavigationContainer, NavigationHelpersContext } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


function LoginScreen({ navigation }){
  return(
    <View>
       <Text>This is login screen</Text>
       <Button 
        title="HomeScreen" 
        onPress={() => {
         navigation.navigate("HomeScreen");
       }}
       />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}