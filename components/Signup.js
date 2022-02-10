import * as React from 'react';
import { SafeAreaView, TextInput, Text, Pressable, ImageBackground, StyleSheet, View } from 'react-native';
import gbImage from './../assets/pictures/homeBG3.jpg';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default function SignupScreen({ navigation }) {
  const [text, onChangeText] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  
  return (
    <ImageBackground source={gbImage}  style={styles.container}>
      <View style={styles.frame}>
        <Text style={styles.title}>Sign Up</Text>
        <SafeAreaView>  
          <Text style={styles.label}>Full Name</Text> 
          <Input 
            onChangeText={onChangeText} value={text}
            inputContainerStyle={styles.inputContainer}
            inputStyle ={styles.inputText}                
            placeholder="Karabo Seheri"
            rightIcon={<Icon size={24} 
            style={styles.icon} name='user'/>}
          />
          <Text style={styles.label}>Email Address</Text> 
          <Input 
            onChangeText={onChangeEmail} value={email}
            inputContainerStyle={styles.inputContainer}
            inputStyle ={styles.inputText}                
            placeholder="gomo@gmail.com"
            rightIcon={<Icon size={24} style={styles.icon} name='envelope'/>}
          />

          <Text style={styles.label}>Phone Number</Text> 
          <Input 
            onChangeText={onChangeNumber} 
            value={number}
            inputContainerStyle={styles.inputContainer}
            inputStyle ={styles.inputText}                
            placeholder="+27 71 004 2020" keyboardType="numeric"
            rightIcon={<Icon size={24} 
            style={styles.icon} name='phone'/>}
          />

          <Text style={styles.label}>Password</Text> 
          <Input  secureTextEntry={true}
            onChangeText={onChangePassword} 
            value={password}
            inputContainerStyle={styles.inputContainer}
            inputStyle ={styles.inputText}
            type="password"
            placeholder="Password"
            rightIcon={<Icon size={28} 
            style={styles.icon} name='lock'/>} 
          />

           <Text style={styles.label}>
             Already have an account?
             <Pressable style={styles.label}
               onPress={() => {
               navigation.navigate("LoginScreen");
              }}>
             <Text style={styles.link}>Login</Text>
             </Pressable>
            </Text> 
         
            <View style={styles.space} />
            <Pressable 
               style={styles.login} 
               onPress={() => {
              //  navigation.navigate("LocationScreen");
            }}>
              <Text style={styles.text}>Create Account</Text>
            </Pressable>
 
            <View style={styles.space} />
            <Text style={styles.tnc}>
              By Signing up, you are agreeing to our Term & Conditions?        
            </Text>
            <View style={styles.space} />  
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:15,
    backgroundColor:"rgb(247, 247, 247)"
  },
  inputText: {
    color: '#064451',
    fontWeight:'normal',
    padding: 13,
    paddingLeft:15,
    marginRight:5,
    borderRadius:20,
  },
  inputContainer: {
    height: 50,
    borderRadius:20,
    borderColor: '#064451',
    borderWidth: 1,  
    paddingRight:10,
    backgroundColor:"rgb(247, 247, 247)",
  },
  icon:{
    color:'#064451',
    width:20,
  },
  card:{
    marginLeft:20
  },
  textBody:{
    fontSize:16,
    fontWeight:'bold',
    textAlign:'right',
    marginRight:15,  
    color: '#064451'
  
  },
  label: {
    overflow: 'visible',
    fontWeight:300,
    fontFamily: `"Inter-Bold", "Inter", sans-serif`,
    color: '#064451',
    fontSize: 18,  
    marginLeft: 15,
    marginBottom: 10,
  },
  link:{
    color: 'blue'
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  frame: {
    width: "90%",
    boxShadow: "0px 14px 9px 0px rgba(0, 0, 0, 0.05)",
    backgroundColor: "rgb(247, 247, 247)",
    overflow: "visible",
    borderRadius: 15,
  },
  title: {
      textAlign: 'center',
      marginTop: 25,
      overflow: 'visible',
      fontWeight:700,
      fontFamily: `"Inter-Bold", "Inter", sans-serif`,
      color: '#064451',
      fontSize: 20,  
      marginBottom: 30,    
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  login:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#064451',
    borderWidth:2,
    borderColor: '#064451',
    width: '94%',
    height: 50,
    marginLeft: 10,
  },
  loginG:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "rgb(11, 111, 131)",
    borderWidth:2,
    borderColor: '#064451',
    width: '94%',
    height: 50,
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    fontWeight:"bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  tnc:{
    textAlign:"center",
    width:"100%"
  },
  socials:{
    textAlign:"center",
    width:"100%"
  }
});
