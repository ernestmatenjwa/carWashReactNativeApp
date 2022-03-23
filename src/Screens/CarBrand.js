import React, { useState } from 'react';
import { View, Text,FlatList, SafeAreaView, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import COLORS from '../constants/consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RadioButton from '../Screens/RadioButton';

const { width, height }= Dimensions.get("screen");


const currentVehicle = [
  {
    carBrandName: 'BMW',
    carRegistration: 'WWE 123 GP',
    carImg: require('../../assets/users/user-3.jpg'),
  }
];

const options = [
  {
    key: 0,
    text: 'BMW',
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwASsSDoxipjjqxCwLOYnHXesJSn2lxcR7Eit0GmdHChAnipOEtLx9LOIgCOsghO-37TY&usqp=CAU",
  },
  {
    key: 1,
    text: 'VolksWagen',
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkKNv1lYE7ZBLiytQL6lJjzGUwNlQcq0E7zUClDrCKmHkGtDsiUyFyh1_J1UmV0GmsfAE&usqp=CAU",
  },
  {
    key: 2,
    text: 'Toyota',
    imageURL: "https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png",
  },
  {
    key: 3,
    text: 'Nissan',
    imageURL: "https://www.carlogos.org/car-logos/nissan-logo-2013-700x700.png",
  },
  {
    key: 4,
    text: 'Mercedes',
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/800px-Mercedes-Logo.svg.png",
  },
  {
    key: 5,
    text: 'Audi',
    imageURL: "https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854",
  },
  {
    key: 6,
    text: 'Haval',
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUyzPoQSJIMywPIaaM666CWWHslpmiDhFeRt6I5x4YgtxtIg3l4HYckcYZ8Kf6TeQu3w&usqp=CAU",
  },
  {
    key: 7,
    text: 'Scania',
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKApNPnRVSENifl0gb11c_jxU5xmoP2dpSnGsG5KNEZMcdHuOt6rLEHrhCBN92J90X23c&usqp=CAU",
  },
  {
    key: 8,
    text: 'Honda',
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGsSkfZU858sNV-T4SsYQtYlAeV3deV0fXIw&usqp=CAU",
  },
  {
    key: 11,
    text: 'Jaguar',
    imageURL:"https://image.shutterstock.com/image-photo/manama-bahrain-april-09-2018-260nw-1066020683.jpg",
  },
  {
    key: 12,
    text: 'Ferrari',
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEEmX6r5qW42tD2k7YV0KkmeqGnBa6yXur7ajSwx9RPxv6X3B_UjbcZIQx2qhEp6V33Q&usqp=CAU",
  },
  {
    key: 13,
    text: 'Lamborghini',
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzLb0zFyeNXTqGqLxlWhsYOQWi1Eah3WcT-kxZUX4idlo_dHKge6wfE946-XsvWSsJiU&usqp=CAU",
  },
 
  {
    key: 15,
    text: 'Shevrolet',
    imageURL: "https://www.logocentral.info/wp-content/uploads/2019/05/Chevrolet-Logo-2013-1920x1080.png",
  },
  
  {
    key: 17,
    text: 'Man',
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTMn1zeVy-zrQFMD40pDvWjEt3IeuX4Tkb2HXvuVLYOu13UYS4b_lmDiuLl_x-VvJ8nw&usqp=CAU",
  },
  {
    key: 18,
    text: 'Porche',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPeAzkcNDylx8a5197m8JbDlmG_7YNLP-wCJKOr2UTtxJ53lDqV2qs2huJss2Ju0A0OY0&usqp=CAU',
  },
  {
    key: 19, 
    text: 'Ford',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQ0rkRuJqMJi3VfXanLYLOYCA-9v0HJMsIKKqho_2hlHjpUuVhYswwQzrRvm7nrsRLZs&usqp=CAU',
  },
  {
    key: 20,
    text: 'Others',
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzMghPbEfK8pspGUUyBN6AFPk5aKD1U5YQyggmfknh4QVPafwP3IhM4ttUu0IxqAch6Y&usqp=CAU",
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
    
  };
  

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, height:"100%"}}>
    <View style={{height: 150, backgroundColor: '#064451', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, }}>
    <View>
        <View style={{ paddingHorizontal: 20, }}>
            <Text style={style.subHeader}>Select your vehicle brand</Text>
        </View>
        {/* <View style={style.currentCar}>
             <Image style={style.UserImg} source={selectedOption.imageURL}/>
             <Text onPress={() =>  navigation.push("VihicleDetail", {Brand : selectedOption.text})} style={{color: COLORS.white, fontWeight: 'bold', marginTop: -35, marginLeft: 90}}>Click here for {selectedOption.text} </Text>
        </View> */}
    </View>
            {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
            </View> */}
    </View>
    <View style={style.footer}>
      <View style={style.partco}>
      <FlatList 
      style={{width:width/1.2,}}
      data={options}
      keyExtractor={item=>item.key}
      renderItem={({item}) => (
        <View style={[style.buttonContainer, {}]} >   
        <Image 
          style={[style.UserImg, {}]} 
          source={{uri:item.imageURL}}
        />
         <Text style={{fontSize: 10, fontWeight: "bold", textTransform: "uppercase", color: "black"}}>{item.text}</Text>
          <TouchableOpacity
          onPress={() => navigation.navigate("VihicleDetail", {Brand : item})}
          style={style.circle}
          >
          <View style={{}} /> 
        </TouchableOpacity>
      </View>
      )}
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
    paddingTop: "10%",
    //height: "80%",
   // marginBottom: "1%",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: "6%",
    //paddingBottom: "5%",
    //height: "15%",
    //width: "60%"
    paddingRight: "5%",
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 15,
    borderWidth: 1,
    marginLeft: 14,
    borderColor: '#064451',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#064451',
  },
  UserImg:{
    width: 95,
    height: 95,
    borderRadius: 40,
    marginRight: -50,
  },
  imgName: {

  },
  header:{
    marginTop: 40,
    //flexDirection: 'row',
    paddingHorizontal: 20,
  },
   
  subHeader:{
    color: COLORS.white,
    marginTop: "5%",
    fontWeight: 'bold',
    fontSize: 17,

  },
  footer: {
    height: "84%",
    width: width/1.12,
    backgroundColor: COLORS.gray,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    marginTop: -45,
     // paddingBottom: 20,
  },
  currentCar:{
    height: 60,
    width: 370,
    alignSelf: 'center',
    backgroundColor: '#54BAB9',
    borderRadius: 30,
    marginTop: "1%",
    width: width/1.12,
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

