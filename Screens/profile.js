import * as React from 'react';
import { Text,  Image, StyleSheet, View, TextInput,TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import img from "../assets/pictures/person.png"

export default function ProfileScreen({ navigation }) {
  const [text, onChangeText] = React.useState('');
  return (
    <View style = {styles.container}>
<View style = {{justifyContent:'center',alignItems:'center', width:"100%", marginTop: "6%", marginBottom: "0%"}}>          
   <Image source={img} style={styles.UserImg} /> 
</View>
<Text style = {styles.text_header}>Alex Mathenjwa </Text>
<Text style={styles.text_footer}>Full Name</Text>
<Input 
    onChangeText={onChangeText} value={text}
    inputContainerStyle={styles.inputContainer}
    inputStyle ={styles.inputText}                
    placeholder="Alex Mathenjwa"
    disabled
/>

<Text style={styles.text_footer1}>Email Address</Text>
<Input 
    onChangeText={onChangeText} value={text}
    inputContainerStyle={styles.inputContainer}
    inputStyle ={styles.inputText}                
    placeholder="alexmatenjwa@gmail.com"
    disabled
/>
<Text style={styles.text_footer1}>Phone</Text>
<Input 
    onChangeText={onChangeText} value={text}
    inputContainerStyle={styles.inputContainer}
    inputStyle ={styles.inputText}                
    placeholder="0729476167"
    disabled
/>
{/* <View style={styles.button}> 
    <LinearGradient
       colors={['#064451', '#064451']}
       style={styles.signIn}
    ><Text style={[
        styles.textSign, 
        {color:'#fff'}]}>Edit</Text>
    </LinearGradient>
</View> */}
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    //backgroundColor: '#009387'
    padding: 20,
    paddingLeft: 50,
  },
  UserImg: {
    width: 90,
    height: 90,
    borderRadius: 25,
  },
  icon:{
      color:'#064451',
      width:10,
    },
  inputText: {
      color: '#064451',
      fontWeight:'normal',
     // fontFamily: '"Inter-Bold", "Inter", sans-serif',
      //padding: 1,
      paddingLeft:15,
      marginRight:5,
     // borderRadius:20,
    },
    inputContainer: {
      height: 40,
      width: "88%",
      //borderRadius:20,
      borderColor: '#064451',
      //borderWidth: 0.5,  
      paddingRight:20,
      backgroundColor:"rgb(247, 247, 247)",
    },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      height: 450,
      marginLeft:10,
      marginRight:10,
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      paddingHorizontal: 20,
      paddingVertical: 30,
      
      
     
  },
  text_header: {
      color: '#064451',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign:'center',
      paddingTop: "5%"
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18,
      marginTop: "5%",
      paddingLeft:10,
      paddingBottom: 5,
  },
  text_footer1: {
    color: '#05375a',
    fontSize: 18,
    //marginTop: "5%",
    paddingLeft:10,
    paddingBottom: 5,
},

  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderTopWidth:1,
      borderTopColor:'#f2f2f2',
      borderLeftWidth:1,
      borderLeftColor:'#f2f2f2',
      borderRightWidth:1,
      borderRightColor:'#f2f2f2',
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      //marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
      
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 35
  },
  signIn: {
      width: '50%',
      height: 50,
      justifyContent: 'center',
      marginLeft: "40%",
      alignItems: "center",
      borderRadius: 10,
      
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  text:{
      color: '#05375a',
  },
  icons:{
      flexDirection:'row',
      alignItems:'flex-start'
  },
  image: {
    height:'100%',
    width:"100%",
    justifyContent:'center',
    alignItems:"center",
    borderRadius:25,
    overflow:'hidden'
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
  
    }
});
