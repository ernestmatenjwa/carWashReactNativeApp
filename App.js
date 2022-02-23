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
import ProfileEdit from "./Screens/EditProfile"
import RegisteredCars from "./Screens/RegisteredCars";
import More2 from "./Screens/more2";
import More3 from "./Screens/more3";

import Iconicons from "react-native-vector-icons/Ionicons"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import VihicleDetail from "./components/vihicleDetail";
import MapScreen from "./Screens/map";

const Stack = createNativeStackNavigator();
const locationStack= createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

 //https://ionic.io/ionicons
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
        <locationStack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          title: 'User Profile',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "white",
            fontWeight: "700",
            fontSize: 40,
            padding: 20,
          },
          headerStyle: {
            height: 170,
            backgroundColor: '#064451',
            shadowColor: '#064451',
            elevation: 0,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
          headerBackTitleVisible: false
        }}
        />
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
        <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} 
        options={{
             title: ""
        }}
        />
        <Stack.Screen name="LocationScreen" component={TabScreen}
        options={({route}) => ({ 
          header: () => null,
          title: "Location Screen",
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
        })}/>
        <Stack.Screen name="CarBrand" component={CarBrand} options={{header: () => null}} />
        <Stack.Screen name="MapScreen" 
        component={MapScreen} 
        options={({route}) => ({
          title: "Map Search",
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
        })} />
        <Stack.Screen name="DateSetter" component={DateSetter} options={{header: () => null}} />
        <Stack.Screen name="SearchCarWash" component={SearchCarWash} options={{header: () => null}} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{header: () => null}} />
        <Stack.Screen name="VehicleScreen" component={VehicleScreen} options={{header: () => null}} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{header: () => null}} />
        <Stack.Screen name="VihicleDetail" component={VihicleDetail} options={{header: () => null}} />
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} options={{header: () => null}} />
        <Stack.Screen name="RegisteredCars" component={RegisteredCars} options={{header: () => null}} />
        <Stack.Screen name="More2" component={More2} options={{header: () => null}} />
        <Stack.Screen name="More3" component={More3} options={{header: () => null}} />
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