import  React, {useState} from 'react';
import { Alert,SafeAreaView, Text, Pressable, ImageBackground, StyleSheet, View } from 'react-native';
import gbImage from '../../assets/pictures/homeBG3.jpg';
import CustomInput from '../components/CustomInput/CustomInput';
import {useForm, Controller} from 'react-hook-form';
import {Auth} from 'aws-amplify';

export default function LoginScreen({ navigation }) {
  const [loading,setLoading] =useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = async data => {
    if(loading){
      return;
    }
    setLoading(true);
    try{
      await Auth.signIn(data.username, data.password)
      navigation.navigate('LocationScreen');  
    }
    catch(e){
      Alert.alert('Failed', e.message);
      const username = data.username;
      if(e.message === 'User is not confirmed.')
      {
        navigation.navigate('ConfirmEmail', {username});
      }
    }
    setLoading(false);
  };
  return (
    <ImageBackground source={gbImage}  style={styles.container}>
      <View style={styles.frame}>
          <Text style={styles.title}>Log In</Text>
          <SafeAreaView>
            <Text style={styles.label}>Username</Text> 
            <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
          iconName='user'
        />
            <Text style={styles.label}>Password</Text> 
            <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          iconName='lock'
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />
           <Pressable style={styles.label}
                onPress={() => {
                navigation.navigate("ForgotPasswordScreen");
                }}>
                <Text style={styles.textBody}>Forgot Password?</Text>
          </Pressable>
               <Pressable 
               style={styles.login} 
               onPress={handleSubmit(onSignInPressed)}>
             <Text style={styles.text}>{loading ? 'Loading...': "Sign In"} </Text>
            </Pressable> 
            <View style={styles.space} />
            <Pressable 
               style={styles.loginG} 
               onPress={() => {
              //  Sign in with Google
              }}>
             <Text style={styles.text}>Log in with google+ </Text>
            </Pressable>
            <View style={styles.space} />     
            <Text style={styles.label}> Don't have an account?
             <Pressable style={styles.label}
                onPress={() => {
                navigation.navigate("SignupScreen");
                }}>
                <Text style={styles.link}>Sign up</Text>
              </Pressable>
            </Text> 
            <View style={styles.space} />

            {/* Social Icons */}
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
    fontWeight: "300",
    //fontFamily: `"Inter-Bold", "Inter", sans-serif`,
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
    overflow: "visible",
    // backgroundColor:'#064451',
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
  },
  frame: {
    width: "90%",
    // boxShadow: "0px 14px 9px 0px rgba(0, 0, 0, 0.05)",
    backgroundColor: "rgb(247, 247, 247)",
    overflow: "visible",
    borderRadius: 15,
   
  },
   title: {
      textAlign: 'center',
      marginTop: 25,
      overflow: 'visible',
      fontWeight: "700",
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
    display: 'flex',
    flexWrap: 'nowrap'
  }
});