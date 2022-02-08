import "react-native-gesture-handler"
import React from "react"
import HomeScreen from "./Screens/HomeScreen";
import SignupScreen from "./components/Signup";
import LoginScreen from "./components/Login";
import LocationScreen from "./Screens/locationScreen";
import MessengerScreen from "./Screens/messagesScreen";
import ProfileScreen from "./Screens/profile";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const locationStack= createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const locationStackScreen = () => {
  return(
    <locationStack.Navigator>
        <locationStack.Screen name="Home" component={LocationScreen} options={{header: () => null}} />
        <locationStack.Screen name="Messanger" component={MessengerScreen} />
        <locationStack.Screen name="Profile" component={ProfileScreen} />
    </locationStack.Navigator>
  )
}

const TabScreen = () => {
  return(
    <Tabs.Navigator>
        <Tabs.Screen name="LocationScreen" component={locationStackScreen} options={{header: () => null}} />
        <locationStack.Screen name="Messanger" component={MessengerScreen} />
        <locationStack.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Splash" component={HomeScreen} options={{header: () => null}} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{header: () => null}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="LocationScreen" component={TabScreen} options={{header: () => null}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}