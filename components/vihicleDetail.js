// import * as React from 'react';
// import { Text, Pressable, ImageBackground, StyleSheet, View, StatusBar } from 'react-native';
// import gbImage from '../assets/pictures/homeBG3.jpg';
// import COLORS from '../consts/colors';

// export default function vihicleDetail({ navigation }) {
//   return (
//     <View>
//         <Text onPress={() =>  navigation.push("CheckoutScreen")}>Pay eeeee</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   titlee: {
//       position: 'absolute',
//       fontSize: 60,
//       display: 'flex',
//       alignItems: 'center',
//       textTransform: 'uppercase',
//       color: 'white',
//       fontWeight: 'bold',
//       textAlign: 'center',
//       top: 100,
//   },
//   signup: {
//     position: 'absolute',
//     bottom: '30%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 30,
//     elevation: 3,
//     backgroundColor: '#064451',
//     width: '70%',
//     height: '7.4%',
//   },
//   login: {
//     position: 'absolute',
//     bottom: '20%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 30,
//     elevation: 3,
//     backgroundColor: 'transparent',
//     borderWidth:2,
//     borderColor: '#064451',
//     width: '70%',
//     height: '7.4%',
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 21,
//     letterSpacing: 0.25,
//     color: 'white',
//   },
//   space: {
//     width: 20, // or whatever size you need
//     height: 5,
//   },
// });

import React, { useState } from 'react';
import { View, Text,TextInput, SafeAreaView, StyleSheet, ScrollView, Image} from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';

import gbImage from '../assets/pictures/car.jpg';
import RadioButton from '../Screens/RadioButton';





  



function vihicleDetail ({navigation}) {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
          <View style={{height: 300, backgroundColor: COLORS.tial, borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
            <View style={style.header}>
            <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: COLORS.white, marginTop: 13, marginLeft: 10}}/>
            <View style={{marginLeft: 35}}>
                <Text style={{fontSize: 30, fontWeight: "bold", color: COLORS.white}}>Model & Car</Text>
            </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{height: 120, paddingHorizontal: 20}}>
            <Text style={style.subHeader}>Fill in vihicle Detail</Text>
            </View>
             
            </ScrollView>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            </View>
        </View>
        <View style={style.footer}>
        <SafeAreaView>
            <Text style={style.label}>Enter Registration</Text> 
            <Input 
                  onChangeText={onChangeEmail} value={email}
                  inputContainerStyle={style.inputContainer}
                  inputStyle ={style.inputText}
                  placeholder="WWW 224 GP"
                  rightIcon={ <Icon size={28} 
                  style={style.icon} name='lock'/>}
            />
            <Text style={style.label}>Model type</Text> 
            <Input  secureTextEntry={true}
                  onChangeText={onChangePassword} 
                  value={password}
                  inputContainerStyle={style.inputContainer}
                  inputStyle ={style.inputText}
                  placeholder="example@gmail.com"
                  rightIcon={<Icon size={28} 
                  style={style.icon} name='lock'/>} 
              />
                   <Text style={style.label}>Select vihicle Colour</Text> 

<View>
         <Text onPress={() =>  navigation.push("CheckoutScreen")}>NEXT</Text>
    </View>
            
            {/* Social Icons */}
          </SafeAreaView>
          
        </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  inputText: {
    color: '#064451',
    fontWeight:'normal',
    padding: 1,
    paddingLeft:15,
    marginRight:5,
    borderRadius:20,
   // fontFamily: '"Inter-Bold", "Inter", sans-serif',
  },
  inputContainer: {
    height: 40,
    borderRadius:20,
    borderColor: '#064451',
    borderWidth: 1,  
    paddingRight:10,
    backgroundColor:"rgb(247, 247, 247)",  
    //fontFamily: '"Inter-Bold", "Inter", sans-serif',
  },
  icon:{
    color:'#064451',
    width:20,
  },
  label: {
    overflow: 'visible',
    fontWeight: "300",
   // fontFamily: '"Inter-Bold", "Inter", sans-serif',
    color: '#064451',
    fontSize: 18,  
    marginLeft: 15,
    marginBottom: 10,
  },
  partco:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgName: {

  },
  header:{
    marginTop: 30,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
   
  subHeader:{
    color: COLORS.white,
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 17,

  },

  footer: {
      width: 370,
      // height: 150,
      backgroundColor: COLORS.gray,
      borderRadius: 25,
      // borderTopLeftRadius: 25,
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:'center',
      marginTop: -35,
  },
  currentCar:{
    height: 60,
    width: 370,
    alignSelf: 'center',
    backgroundColor: '#54BAB9',
    borderRadius: 30,
    marginTop: -20,
  },
  UserImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 5,
    marginTop: 5,
  },
  

});


export default vihicleDetail;






 



