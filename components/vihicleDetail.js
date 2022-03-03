import React, { useState } from 'react';
import { View, Text,TextInput, SafeAreaView, StyleSheet, ScrollView, Image,Pressable} from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';
import Iconicons from "react-native-vector-icons/Ionicons"

function VihicleDetail ({navigation}) {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
          <View style={{height: "38%", backgroundColor: COLORS.tial, borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
            <View style={style.header}>
            <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: COLORS.white, marginTop: 13, marginLeft: 10}}/>
            <View style={{marginLeft: 35}}>
                <Text style={{fontSize: 30, fontWeight: "bold", color: COLORS.white}}>Vihicle details</Text>
            </View>
            </View>
            <Text style={style.subHeader}>Fill in vihicle Detail</Text>
            
        </View>
        <View>
        <Text style={[style.label, {paddingTop: "5%"}]}>Registration Number</Text> 
          <Input 
            onChangeText={onChangeEmail} value={email}
            inputContainerStyle={style.inputContainer}
            inputStyle ={style.inputText}                
            placeholder="Enter reg..."
            rightIcon={<Iconicons size={24} style={style.icon} name='pencil'/>}
          />
          <Text style={style.label}>Car Model</Text> 
          <Input 
            onChangeText={onChangeEmail} value={email}
            inputContainerStyle={style.inputContainer}
            inputStyle ={style.inputText}                
            placeholder="Enter model"
            rightIcon={<Iconicons size={24} style={style.icon} name='pencil'/>}
          />
          <Text style={style.label}>Discription</Text> 
          <Input 
            onChangeText={onChangeEmail} value={email}
            inputContainerStyle={style.inputContainer}
            inputStyle ={style.inputText}                
            placeholder="Enter description"
            rightIcon={<Iconicons size={24} style={style.icon} name='pencil'/>}
          />
        </View>
    <Pressable style={style.bookbtn}
      onPress={() => {
        navigation.navigate("DateSetter");
      }}>
        <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>Proceed</Text>
      </Pressable>
        
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
    borderRadius:2,  
   // fontFamily: '"Inter-Bold", "Inter", sans-serif',
  },
  inputContainer: {
    height: 40,
    width:'100%',
    borderRadius: 8,
    borderColor: '#064451',
    borderWidth: 1,  
    paddingRight:10,
    backgroundColor:"rgb(247, 247, 247)",  
    //fontFamily: '"Inter-Bold", "Inter", sans-serif',
  },
  icon:{
    color:'#064451',
    width:15,
  },
  label: {
    overflow: 'visible',
    fontWeight: "700",
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
    marginTop: "30%",
    fontWeight: 'bold',
    padding: "10%",
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
  black:{
    height:50,
    width:50,
    backgroundColor:"black",
    borderRadius:25
  },
  gray:{
    height:50,
    width:50,
    backgroundColor:"gray",
    borderRadius:25
  },
  white:{
    height:50,
    width:50,
    backgroundColor:"white",
    borderRadius:25
  },
  blue:{
    height:50,
    width:50,
    backgroundColor:"blue",
    borderRadius:25
  },
  red:{
    height:50,
    width:50,
    backgroundColor:"red",
    borderRadius:25
  },
  brown:{
    height:50,
    width:50,
    backgroundColor:"brown",
    borderRadius:25
  },
  Yellow:{
    height:50,
    width:50,
    backgroundColor:"yellow",
    borderRadius:25
  },
  bookbtn:{
    width: 170,
    height: 50,
    backgroundColor: COLORS.tial,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 170,
    marginBottom: 50,

  },

  

});


export default VihicleDetail;






 



