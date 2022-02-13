import React from "react";

//navigation components
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { IconicIcon } from "react-native-vector-icons/Ionicons"

import { Text, Dimensions } from "react-native"


//import screens 
import HomeScreen from "../Screens/HomeScreen";
import MessengerScreen from "../Screens/messagesScreen";
import ProfileScreen from "../Screens/profile";
import LocationScreen from "../Screens/locationScreen";

const fullScreenWidth = Dimensions.get('window').width;

const Stack = createNativeStackNavigator()

function locationStackScreen() {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LocationScreen} />
        <Stack.Screen name="Messenger" component={MessengerScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    )
}
function ProfileStackScreen() {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LocationScreen} />
        <Stack.Screen name="Messenger" component={MessengerScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function Navigation(props) {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={locationStackScreen} />
                <Tab.Screen name="Profile" component={ProfileStackScreen} />
                <Tab.Screen name="Profile" component={ProfileStackScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}