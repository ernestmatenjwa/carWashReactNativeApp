import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RadioForm, {
  RadioButton, 
  RadioButtonInput, 
  RadioButtonLabel
} from 'react-native-simple-radio-button';



function CarBrand ({navigation}) {
    
    var carType = [
      {label: "BMW", Value: 0},
      {label: "Toyota", Value: 1},
      {label: "VolksWagen", Value: 2},
      {label: "Nissan", Value: 3},
      {label: "Scania", Value: 4},
    ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
          <View style={{height: 300, backgroundColor: COLORS.tial, borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
            <View style={style.header}>
            <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: COLORS.white, marginTop: 13, marginLeft: 10}}/>
            <View style={{marginLeft: 35}}>
                <Text style={{fontSize: 30, fontWeight: "bold", color: COLORS.white}}>Vehicle Brand</Text>
            </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{height: 120, paddingHorizontal: 20}}>
            <Text style={style.subHeader}>Select your vehicle brand</Text>
            </View>
             <View style={style.currentCar}>
             <Text onPress={() =>  navigation.push("SearchCarWash")} style={{color: COLORS.white, fontWeight: 'bold', marginTop: 20, marginLeft: 90}}>Continue with BMW- WWE 123 GP</Text>
             </View>
            </ScrollView>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            </View>
        </View>
        <View style={style.footer}>
         <View style={style.checkbox}>
           <RadioForm
            onPress={(Value) => {}}
            radio_props={carType}
           />
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
   
  subHeader:{
    color: COLORS.white,
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 17,

  },

  footer: {
      width: 370,
      height: 150,
      backgroundColor: COLORS.gray,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      flex: 1,
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
  }
  

});


export default CarBrand;

