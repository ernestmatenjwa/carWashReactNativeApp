import "react-native-gesture-handler"
import React from "react"
import HomeScreen from "./src/Screens/HomeScreen";
import SignupScreen from "./src/Screens/Signup";
import LoginScreen from "./src/Screens/Login";
import LocationScreen from "./src/Screens/locationScreen";
import MessagesScreen from "./src/Screens/messagesScreen";
import ProfileScreen from "./src/Screens/profile";
import ConfirmScreen from "./src/Screens/confirmation";
import CarBrand from "./src/Screens/CarBrand";
import DateSetter from "./src/Screens/DateSetter";
import ResgistEdit from "./src/Screens/registEdit";
import CheckoutScreen from "./src/Screens/check"
import VehicleScreen from "./src/Screens/vehicletype"
import PaymentScreen from "./src/Screens/pay"
import RequestScreen from "./src/Screens/requests"
import ChatScreen from "./src/Screens/chatScreen"
import ProfileEdit from "./src/Screens/EditProfile"
import ConfirmEmailScreen from "./src/Screens/ConfirmEmailScreen.js"
import ForgotPasswordScreen from "./src/Screens/ForgotPasswordScreen"
import NewPasswordScreen from "./src/Screens/NewPasswordScreen"
import RegisteredCars from "./src/Screens/RegisteredCars";
import VihicleDetail from "./src/Screens/vihicleDetail";
import MapScreen from "./src/Screens/map";

import Iconicons from "react-native-vector-icons/Ionicons"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Amplify from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

const Stack = createNativeStackNavigator();
const locationStack= createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

 //https://ionic.io/ionicons
const LocationStackScreen = () => {
  return(
    <locationStack.Navigator>
        <locationStack.Screen 
        name="Home" 
        component={
          LocationScreen} 
          options={{
            title: 'Available car washes',
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
          }}/>
        <locationStack.Screen 
        name="requests" 
        component={
          RequestScreen} 
        options={{
          header: () => null
          }} />
        <locationStack.Screen 
        name="Messanger" 
        component={
          MessagesScreen} />
        <locationStack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        />
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
         else if (rn === 'requests') {
          iconName = focused ? 'list' : 'list-outline'
         }
      
        return <Iconicons name={iconName} size={size} color={"#064451"} />
       },
       tabBarLabel:() => {return null}
     })}
    >
        <Tabs.Screen name="LocationScreenStack" component={LocationStackScreen} options={{header: () => null}} />
        <locationStack.Screen 
        name="requests" 
        component={RequestScreen}
        options={{
          title: 'My Requests',
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
        }}
        />
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
        }}
        />
        <locationStack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          header: () => null}} />
    </Tabs.Navigator>
  ) 
}
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen 
        name="Splash" 
        component={HomeScreen} 
        options={{
          header: () => null}} />
       <Stack.Screen 
        name="CheckoutScreen" 
        component={CheckoutScreen} 
        options={({route}) => ({
          title: "Checkout",
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "white",
            fontWeight: "600",
            fontSize: 30
          },
          headerStyle: {
            backgroundColor: '#064451',
            shadowColor: '#064451',
            elevation: 0,
          },
        })} />
      
       <Stack.Screen 
        name="RegisteredCars" 
        component={RegisteredCars} 
        options={({route}) => ({ 
          //header: () => null,
          title: "Registered vehicles",
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "white",
            fontWeight: "600",
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: '#064451',
            shadowColor: '#064451',
            height: 100,
            elevation: 0,
          },
        })} />
       <Stack.Screen 
        name="CarBrand" 
        component={CarBrand} 
        options={({route}) => ({ 
          //header: () => null,
          title: "Vehicle Brand",
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "white",
            fontWeight: "600", 
            fontSize: 30,
          },
          headerStyle: {
            backgroundColor: '#064451',
            shadowColor: '#064451',
            height: 100,
            elevation: 0,
          },
        })} />
       
       <Stack.Screen 
        name="LocationScreen" 
        component={TabScreen}
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
          <Stack.Screen 
       name="ForgotPasswordScreen" 
       component={ForgotPasswordScreen} 
       options={{
         header: () => null}} />
       <Stack.Screen 
       name="ConfirmEmailScreen" 
       component={ConfirmEmailScreen} 
       options={{header: () => null}} />
        <Stack.Screen 
        name="NewPasswordScreen" 
        component={NewPasswordScreen} 
        options={{
          header: () => null}} />
        <Stack.Screen 
        name="ResgistEdit" 
        component={ResgistEdit} 
        options={{
          header: () => null}} />
        <Stack.Screen 
        name="SignupScreen" 
        component={SignupScreen} 
        options={{
          header: () => null}} />
        <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
        options={{
          header: () => null}} />
        <Stack.Screen 
        name="ConfirmScreen" 
        component={ConfirmScreen} 
        options={{
          header: () => null
        }}
        />
       
       
        <Stack.Screen 
        name="MapScreen" 
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
        <Stack.Screen 
        name="DateSetter" 
        component={DateSetter} 
        options={({route}) => ({ 
          //header: () => null,
          title: "Date and time",
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "white",
            fontWeight: "200",
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: '#064451',
            shadowColor: '#064451',
            height: 100,
            elevation: 0,
          },
        })} />
        {/* <Stack.Screen 
        name="SearchCarWash" 
        component={SearchCarWash} 
        options={{
          header: () => null}} /> */}
       
        <Stack.Screen 
        name="VehicleScreen" 
        component={VehicleScreen} 
        options={({route}) => ({
          title: "Services",
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "white",
            //fontWeight: "700",
            fontSize: 30
          },
          headerStyle: {
            backgroundColor: '#064451',
            shadowColor: '#064451',
            elevation: 0,
          },
        })} />
          <Stack.Screen 
        name="PaymentScreen" 
        component={PaymentScreen} 
        options={({route}) => ({
          title: "Payment",
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "white",
            fontWeight: "700",
            fontSize: 30
          },
          headerStyle: {
            backgroundColor: '#064451',
            shadowColor: '#064451',
            elevation: 0,
          },
        })} />
        <Stack.Screen 
        name="VihicleDetail" 
        component={VihicleDetail} 
        options={({route}) => ({ 
          //header: () => null,
          title: "Vehicle Brand",
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "white",
            fontWeight: "600", 
            fontSize: 30,
          },
          headerStyle: {
            backgroundColor: '#064451',
            shadowColor: '#064451',
            height: 100,
            elevation: 0,
          },
        })}/>
        <Stack.Screen 
        name="ProfileEdit" 
        component={ProfileEdit} 
        options={{
          header: () => null}} />
        
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