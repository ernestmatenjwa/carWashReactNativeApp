import "react-native-gesture-handler"
import React from "react";
import { Text, View, Button, ImageBackground, StyleSheet, StatusBar } from 'react-native';
import HomeScreen from "./Screens/HomeScreen";
import SearchCarWash from "./Screens/SearchCarWash";
import DateSetter from "./Screens/DateSetter";
import COLORS from "./consts/colors";

import { CurrentRenderContext, NavigationContainer, NavigationHelpersContext } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CarBrand from "./Screens/CarBrand";

const Stack = createNativeStackNavigator();


function LoginScreen({ navigation }){
  return(
    <View>
       <Text>This is login screen</Text>
       <Button 
        title="HomeScreen" 
        onPress={() => {
         navigation.navigate("HomeScreen");5
       }}
       />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.darkgreen}/> 
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{header: () => null}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SearchCarWash" component={SearchCarWash}options={{header: () => null}}/>
        <Stack.Screen name="DateSetter" component={DateSetter} options={{header: () => null}}/>
        <Stack.Screen name="CarBrand" component={CarBrand} options={{header: () => null}} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}