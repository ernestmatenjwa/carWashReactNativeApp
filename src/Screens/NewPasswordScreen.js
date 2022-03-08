import React, {useState}from 'react';
import {Alert, SafeAreaView, TextInput, Text, Pressable, ImageBackground, StyleSheet, View } from 'react-native';
import gbImage from '../../assets/pictures/homeBG3.jpg';
import CustomInput from '../components/CustomInput/CustomInput';
import {useForm} from 'react-hook-form';
import {useRoute } from '@react-navigation/native';
import {Auth} from 'aws-amplify';

export default function NewPasswordScreen({ navigation }) {
  const [loading,setLoading] =useState(false);
  const route = useRoute();
  const {control, handleSubmit,watch} = useForm({defaultValues: {username: route?.params?.username}});
  const username = watch('username');

  const onSubmitPressed = async data => {
    if(loading){
      return;
    }
    setLoading(true);
    try{
      await Auth.forgotPasswordSubmit(data.username,data.code,data.password); 
      Alert.alert('Success','Please sign in with your new password');
      navigation.navigate('LoginScreen');
  }
    catch(e){
      Alert.alert('Failed', e.message);
    }
    setLoading(false);
  };

  const onSignInPress = () => {
    navigation.navigate('LoginScreen');
  };  
  
  return (
    <ImageBackground source={gbImage}  style={styles.container}>
      <View style={styles.frame}>
      <Text style={styles.title}>Create new password</Text>
        <SafeAreaView>
          
        <Text style={styles.label}>Username</Text> 
        <CustomInput
          placeholder="Username"
          name="username"
          control={control}
          rules={{required: 'Username is required'}}
          iconName='user'
        />
        
        <Text style={styles.label}>Code</Text> 
        <CustomInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{required: 'Code is required'}}
          iconName='lock'
        />
        
        <Text style={styles.label}>New Password</Text> 
        <CustomInput
          placeholder="Enter your new password"
          name="password"
          control={control}
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
    
          </SafeAreaView>
          <Pressable 
               style={styles.loginG} 
               onPress={handleSubmit(onSubmitPressed)}>
             <Text style={styles.text}>{loading ? 'Loading...': "Submit"} </Text>
            </Pressable>
            <View style={styles.space} />
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