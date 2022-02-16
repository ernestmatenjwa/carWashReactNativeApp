import "react-native-gesture-handler"
import React from "react"
import HomeScreen from "./Screens/HomeScreen";
import SignupScreen from "./components/Signup";
import LoginScreen from "./components/Login";
import LocationScreen from "./Screens/locationScreen";
import MessagesScreen from "./Screens/messagesScreen";
import ProfileScreen from "./Screens/profile";
import ConfirmScreen from "./components/confirmation";
import CarBrand from "./components/CarBrand";
import DateSetter from "./components/DateSetter";
import SearchCarWash from "./components/SearchCarWash";
import CheckoutScreen from "./components/Checkout"
import VehicleScreen from "./components/vehicletype"
import PaymentScreen from "./components/payment"
import ChatScreen from "./components/chatScreen"

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
        <locationStack.Screen name="Home" 
        component={LocationScreen} 
        options={{header: () => null}} />
        <locationStack.Screen name="Messanger" 
        component={MessagesScreen} />
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
      
        return <Iconicons name={iconName} size={size} color={"#064451"} />
       },
       tabBarLabel:() => {return null}
     })}
    >
        <Tabs.Screen name="LocationScreenStack" component={LocationStackScreen} options={{header: () => null}} />
        <locationStack.Screen 
        name="Messanger" 
        component={MessagesScreen}
        options={{
          title: 'Messages',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "white",
            fontWeight: "600"
          },
          headerStyle: {
            backgroundColor: '#064451',
            shadowColor: '#064451',
            elevation: 0,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <View style={{marginLeft: 15}}>
              <Ionicons name="arrow-back" size={25} color="#2e64e5" />
            </View>
          ),
        }}
        />
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
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{header: () => null}} />
        <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} />
        <Stack.Screen name="LocationScreen" component={TabScreen} options={{header: () => null}} />
        <Stack.Screen name="CarBrand" component={CarBrand} options={{header: () => null}} />
        <Stack.Screen name="DateSetter" component={DateSetter} options={{header: () => null}} />
        <Stack.Screen name="SearchCarWash" component={SearchCarWash} options={{header: () => null}} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{header: () => null}} />
        <Stack.Screen name="VehicleScreen" component={VehicleScreen} options={{header: () => null}} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{header: () => null}} />
        <Stack.Screen 
        name="ChatScreen"
        component={ChatScreen} 
        options={({route}) => ({
          title: route.params.userName,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "white",
            fontWeight: "600"
          },
          headerStyle: {
            backgroundColor: '#064451',
            shadowColor: '#064451',
            elevation: 0,
          },
        })}
        />
    </Stack.Navigator>
  </NavigationContainer>
  );
}