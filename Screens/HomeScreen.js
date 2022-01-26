import * as React from 'react';
import { Text, Pressable, ImageBackground, StyleSheet, View } from 'react-native';
import gbImage from '../assets/homeBG1.jpg'

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={gbImage} style={styles.container}>
     <Text style={styles.titlee}>Sek'Clean Car Wash Services</Text> 
     <Pressable 
      style={styles.signup} 
      onPress={() => {
       navigation.navigate("LoginScreen");
     }}
     ><Text style={styles.text}>Sign Up</Text></Pressable>
      <View style={styles.space} />
     <Pressable 
      style={styles.login} 
      onPress={() => {
       navigation.navigate("LoginScreen");
     }}
     ><Text style={styles.text}>Log in</Text></Pressable>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlee: {
      fontSize: 50,
      display: 'flex',
      alignItems: 'center',
      textTransform: 'uppercase',
      color: 'white',
      fontWeight: 'bold'
  },
  signup: {
    position: 'absolute',
    bottom: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: '#064451',
    width: '70%',
    height: '7.4%',
  },
  login: {
    position: 'absolute',
    bottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: 'transparent',
    borderWidth:2,
    borderColor: '#064451',
    width: '70%',
    height: '7.4%',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  space: {
    width: 20, // or whatever size you need
    height: 5,
  },
});