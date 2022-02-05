import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import { 
      Text,
      View, 
      TextInput,
      Dimensions,
      ImageBackground
     } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import gbImage from '../assets/pictures/homeBG3.jpg'

import { styles } from "../styles/styles"

const { width, height } = Dimensions.get("screen")

export default function SignupScreen({ navigation }) {
      return(
        
        <ImageBackground source={gbImage} style={styles.container}>
            <View style={ styles.inputContainer }>
            <View style={{height: 10}}></View>
               <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center", color: "#064451"}}>SIGN UP</Text>
               <View style={styles.spaces}></View>
               <Text style={{fontSize: 15, color: "#064451" }}>Full Name</Text>
               <View style={{height: 10}}></View>
                 <TextInput 
                 style={styles.input}
                 placeholder='Enter name'
                 />
                 <View style={{height: 10}}></View>
                 <Text style={{fontSize: 15, color: "#064451" }}>Email Address</Text>
                 <View style={{height: 10}}></View>
                  <TextInput 
                 style={styles.input}
                 placeholder='Enter email'
                 />
                 <View style={{height: 10}}></View>
                 <Text style={{fontSize: 15, color: "#064451"}}>Phone number</Text>
                 <View style={{height: 10}}></View>
                  <TextInput 
                 style={styles.input}
                 placeholder='Enter phone no'
                 />
                 <View style={{height: 10}}></View>
                 <Text style={{fontSize: 15, color: "#064451" }}>Password</Text>
                 <View style={{height: 10}}></View>
                  <TextInput 
                 style={styles.input}
                 placeholder='Enter password'
                 />
                 <Text style={{fontSize: 15, textAlign: 'right', color: "#064451", fontWeight: "bold" }}>Forgot password?</Text>
                 <View style={{height: 10}}></View>
                 <View style={{ alignItems: "center", marginTop: 20 }}>
                   <TouchableOpacity onPress={() =>  navigation.push("LocationScreen")}>
                     <LinearGradient 
                    
                     style={{width: width / 1.2, padding: 15, borderRadius: 10}}
                     colors={["#064451", "#064451"]}
                     >
                    <Text 
                     style={{
                       color: "#fff",
                       textAlign: "center",
                       fontWeight: "900",
                       fontSize: 16
                     }}
                    >CREATE ACCOUNT</Text>  
                     </LinearGradient>
                   </TouchableOpacity>
                 </View>
                 <View 
                  style={{ 
                    alignItems: "stretch",
                    marginVertical: 10,
                    flexDirection: "row"
                  }}
                 >
                   <Text style={{ color: "#888" }}>Already connected?</Text>
                  
                     <Text onPress={() =>  navigation.push("LoginScreen")}>  Sign In</Text>
                  
                 </View>
              
            </View>
          </ImageBackground>
        
      )
}
