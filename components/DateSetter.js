import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

function DateSetter({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
      <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: COLORS.tial, marginTop: 9, marginLeft: 10}}/>
       <View style={{marginLeft: 35}}>
         <Text style={{fontSize: 30, fontWeight: "bold", color: COLORS.tial}}>Date & Time</Text>
         <Text style={{fontSize: 14, marginTop: 25, fontWeight: "bold", color: COLORS.tial}}>Select time and date</Text>
       </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <View></View>
      <Pressable style={style.bookbtn}
      onPress={() => {
        navigation.navigate("CheckoutScreen");
      }}>
        <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>Proceed</Text>
      </Pressable>
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
  bookbtn:{
    width: 110,
    height: 50,
    backgroundColor: COLORS.tial,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 290,
    marginBottom: 50
  }

});


export default DateSetter;

