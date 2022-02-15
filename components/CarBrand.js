import React, { useState } from 'react';
import { View, Text,TextInput, SafeAreaView, StyleSheet, ScrollView, Image} from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RadioForm, {
  // RadioButton, 
  RadioButtonInput, 
  RadioButtonLabel
} from 'react-native-simple-radio-button';
import gbImage from '../assets/pictures/car.jpg';
import RadioButton from '../Screens/RadioButton';

import BMW from '../assets/pictures/Cars/BMW.jpg'
import VW from '../assets/pictures/Cars/VW.jpg'


const currentVehicle = [
  {
    carBrandName: 'BMW',
    carRegistration: 'WWE 123 GP',
    carImg: require('../assets/users/user-3.jpg'),
  }
];

const options = [
  {
    key: 0,
    text: 'BMW',
    imageURL: require('../assets/pictures/Cars/BMW.jpg'),
    regNumber: "DC34HF GP"
  },
  {
    key: 1,
    text: 'VolksWagen',
    imageURL: require('../assets/pictures/Cars/VW.jpg'),
    regNumber: "FCK 344 KZN"
  },
  {
    key: 2,
    text: 'Toyota',
    imageURL: require('../assets/pictures/Cars/Toyota.jpg'),
    regNumber: "DCH 342 NW"
  },
  {
    key: 3,
    text: 'Nissan',
    imageURL: require('../assets/pictures/Cars/Nissan.jpg'),
    regNumber: "12434FD CT"
  },
  {
    key: 4,
    text: 'Others',
    imageURL: require('../assets/pictures/car.jpg'),
    regNumber: "Not Provided"
  },
  
];



function CarBrand ({navigation}) {
  const [selectedOption, setSelectedOption] = React.useState(options[0]);

  const onSelect = (item) => {
    
    setSelectedOption(options[item]);
    
    if (selectedOption && selectedOption.key === item.key) {
      setSelectedOption(options[item.key]);
    } else {
      setSelectedOption(options[item.key]);
    }
    // console.log(selectedOption.text);
  };
  

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
             <Image style={style.UserImg} source={selectedOption.imageURL}/>
             <Text onPress={() =>  navigation.push("DateSetter")} style={{color: COLORS.white, fontWeight: 'bold', marginTop: -35, marginLeft: 90}}>Continue with {selectedOption.text} {selectedOption.regNumber}</Text>
             </View>
            </ScrollView>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            </View>
        </View>
        <View style={style.footer}>
         
            <View style={style.partco}>
              <RadioButton
              selectedOption={selectedOption}
              onSelect={onSelect}
              options={options}
            />
          </View>
        </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
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


export default CarBrand;

