import "react-native-gesture-handler"
import React from "react"
import HomeScreen from "./Screens/HomeScreen";
import SignupScreen from "./components/Signup";
import LoginScreen from "./components/Login";
import LocationScreen from "./Screens/locationScreen";
import MessengerScreen from "./Screens/messagesScreen";
import ProfileScreen from "./Screens/profile";
import ConfirmScreen from "./components/confirmation";
import CarBrand from "./components/CarBrand";
import DateSetter from "./components/DateSetter";
import SearchCarWash from "./components/SearchCarWash";
import CheckoutScreen from "./components/checkoup"
import VehicleScreen from "./components/vehicletype"
import PaymentScreen from "./components/payment"

import Iconicons from "react-native-vector-icons/Ionicons"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const locationStack= createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const LocationStackScreen = () => {
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
    <Tabs.Navigator
     screenOptions={({route}) => ({
       tabBarIcon: ({focused, color, size}) => {
         let iconName;
         let rn = route.name;

         if (rn === 'LocationScreenStack') {
           iconName = focused ? 'home' : 'home-outline'
         } else if (rn === 'Messanger') {
          iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'
         } else if (rn === 'Profile') {
          iconName = focused ? 'person' : 'person-outline'
         }
      
        return <Iconicons name={iconName} size={size} color={color} />
       },
       tabBarLabel:() => {return null}
     })}
    >
        <Tabs.Screen name="LocationScreenStack" component={LocationStackScreen} options={{header: () => null}} />
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
        <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} />
        <Stack.Screen name="LocationScreen" component={TabScreen} options={{header: () => null}} />
        <Stack.Screen name="CarBrand" component={CarBrand} options={{header: () => null}} />
        <Stack.Screen name="DateSetter" component={DateSetter} options={{header: () => null}} />
        <Stack.Screen name="SearchCarWash" component={SearchCarWash} options={{header: () => null}} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{header: () => null}} />
        <Stack.Screen name="VehicleScreen" component={VehicleScreen} options={{header: () => null}} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{header: () => null}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}