import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView, Image, Pressable} from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import gbImage from '../assets/pictures/car.jpg';



export default function CheckoutScreen({ navigation }) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{height: 300, backgroundColor: COLORS.tial, borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
      <View style={style.header}>
      <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: COLORS.white, marginTop: 13, marginLeft: 10}}/>
      </View>
      <View style={{marginLeft: 95}}>
        <Text style={{fontSize: 30, fontWeight: "bold", color: COLORS.white}}>Check Out</Text>
        </View>
      </View>
      <View style={style.footer}>
      <View style={{height: 207, width: 370, alignItems: 'center', marginBottom: 280}}>
      <Image style={{flex: 1,resizeMode: 'contain', borderTopLeftRadius: 33, borderTopRightRadius: 33}} source={gbImage}/>
      </View>
      <View>
      <Pressable style={style.bookbtn}
      onPress={() => {
        navigation.navigate("payment");
      }}>
        <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>Pay</Text>
      </Pressable>
      </View>
      </View>
    </SafeAreaView>
    
  );
};

const style = StyleSheet.create({
  header:{
    marginTop: 30,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  footer: {
    width: 370,
    backgroundColor: COLORS.gray,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    marginTop: -105,
    marginBottom: 70
},
bookbtn:{
  width: 300,
  height: 50,
  backgroundColor: COLORS.tial,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  alignSelf: 'center',
  marginBottom: 10
}
   
})