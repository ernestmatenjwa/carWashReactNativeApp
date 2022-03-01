import  React, {useState} from 'react';
import {Alert, SafeAreaView, TextInput, Text, Pressable, ImageBackground, StyleSheet, View } from 'react-native';
import gbImage from './../assets/pictures/homeBG3.jpg';
import CustomInput from './CustomInput/CustomInput';
import CustomButton from './CustomButton/CustomButton';

import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

import Amplify from 'aws-amplify';
import awsconfig from './../src/aws-exports';
Amplify.configure(awsconfig);

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


export default function SignupScreen({ navigation }) {

  const [loading,setLoading] =useState(false);
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');

  const onRegisterPressed = async (data) => {
    const {username,password,email,name} = data;
    if(loading){
      return;
    }
    setLoading(true);
    try{
        await Auth.signUp({
        username,
        password,
        attributes: {email,name,preferred_username: username},
      });
      
      Alert.alert('Success','Hi '+ username +' your account has been created successful. \n Please check your email to verify your account!');
      navigation.navigate('ConfirmEmail',{username});
    }
    catch(e){
      Alert.alert('Error',e.message);
      console.log(e.message);
      if(e.message === 'User already exists')
      {
        navigation.navigate('SignIn');
      }

    }
    
    setLoading(false);
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };


  return (
    <ImageBackground source={gbImage}  style={styles.container}>
      <View style={styles.frame}>
        <Text style={styles.title}>Sign Up</Text>
        <SafeAreaView>  
        <Text style={styles.label}>Username</Text> 
        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
            
          }}
          iconName='user'
        />
        
        <Text style={styles.label}>Email Address</Text>
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
          iconName='envelope'
        />
        <Text style={styles.label}>Password</Text> 
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
          iconName='lock'
        />
        
        <Text style={styles.label}>Confirm Password</Text> 
        <CustomInput
          name="password-repeat"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }}
          iconName='lock'
        />
           <Text style={styles.label}>
             Already have an account?
             <Pressable style={styles.label}
               onPress={() => {
               navigation.navigate("SignIn");
              }}>
             <Text style={styles.link}>Sign In</Text>
             </Pressable>
            </Text> 
         
            <View style={styles.space} />
            <Pressable 
               style={styles.login} 
               onPress={handleSubmit(onRegisterPressed)}>
              <Text style={styles.text}>
              {loading ? 'Loading...': "Create Account"}
                </Text>
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
   // fontFamily: '"Inter-Bold", "Inter", sans-serif',
    padding: 1,
    paddingLeft:15,
    marginRight:5,
    borderRadius:20,
  },
  inputContainer: {
    height: 40,
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
    fontWeight: "300",
    // fontFamily: '"Times New Roman", Times, serif',
   // fontFamily: '"Inter-Bold", "Inter", sans-serif',
    color: '#064451',
    fontSize: 18,  
    marginLeft: 15,
    marginBottom: 4,
  },
  link:{
    color: 'blue',
    fontWeight: "300",

  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  frame: {
    width: "90%",
    //boxShadow: "0px 14px 9px 0px rgba(0, 0, 0, 0.05)",
    backgroundColor: "rgb(247, 247, 247)",
    overflow: "visible",
    borderRadius: 15,
  },
  title: {
      textAlign: 'center',
      marginTop: 15,
      overflow: 'visible',
      fontWeight: "700",
      //fontFamily: `"Inter-Bold", "Inter", sans-serif`,
      color: '#064451',
      fontSize: 20,  
      marginBottom: 10,    
  },
  space: {
    width: 20, // or whatever size you need
    height: 10,
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
