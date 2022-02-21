import "react-native-gesture-handler"
import React from 'react';
import { Text,
  View, 
  StyleSheet,
 Dimensions,
 ImageBackground,
 FlatList,
 TouchableOpacity,
Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import mapImage from "../assets/pictures/map.jpg"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const { width, height } = Dimensions.get("screen");

const carwash = [
  {
    id: '1',
    userName: 'Alex Car wash',
    userImg: require('../assets/pictures/car.jpg'),
    location:
      'Johannesburg',
  },
  {
    id: '2',
    userName: 'Mpho Car wash',
    userImg: require('../assets/pictures/car.jpg'),
    location:
      'Pretoria',
  },
  {
    id: '3',
    userName: 'Shaun',
    userImg: require('../assets/pictures/car.jpg'),
    location:
      'Mbombela',
  },
  
];

export default function LocationScreen({ navigation }) {
  const [searchValue, onChangesearchValue] = React.useState('');

  return (
  <View>
      <LinearGradient
   colors={["#064451", "#064451"]}
   style={styles.container} 
  >
    <View style={{height: 10}}></View>
  <Text style={{fontSize:20, fontWeight: "bold"}}>   Select nearest service provider</Text>
  <View style={{height: 10}}></View>
  <Input 
    onChangeText={onChangesearchValue} value={searchValue}
    inputContainerStyle={styles.inputContainer}
    inputStyle ={styles.inputText}
    placeholder="Search"
    rightIcon={ <Icon size={24} 
    style={styles.icon} name='search'/>}
  />
 </LinearGradient>
 <ImageBackground source={mapImage} style={{height: height/2}}>
    {/* <Text style={{fontSize: 25 }} onPress={() =>  navigation.push("CarBrand")}>CarBrand screen</Text>
    <Text style={{fontSize: 25 }} onPress={() =>  navigation.push("DateSetter")}> DateSetter screen</Text>
    <Text style={{fontSize: 25 }} onPress={() =>  navigation.push("SearchCarWash")}>SearchCarWash screen</Text>
    <Text style={{fontSize: 25 }} onPress={() =>  navigation.push("ConfirmScreen")}>Confirm screen</Text>
    <Text style={{fontSize: 25 }} onPress={() =>  navigation.push("CheckoutScreen")}>checkout screen</Text>
    <Text style={{fontSize: 25 }} onPress={() =>  navigation.push("VehicleScreen")}> Vehicle screen</Text>
    <Text style={{fontSize: 25 }} onPress={() =>  navigation.push("PaymentScreen")}>Payment screen</Text> */}
 </ImageBackground>
 <View style={{height: height/6, borderRadius: 70}}>
 <FlatList 
      data={carwash}
      keyExtractor={item=>item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('VehicleScreen')}>
          <View style={styles.userInfo}>
            <View style={styles.UserImgWrapper}>
              <Image style={styles.UserImg} source={item.userImg} />
            </View>
            <View style={styles.TextSection}>
              <View style={styles.UserInfoText}>
                <Text style={styles.UserName}>{item.userName}</Text>
              </View>
              <Text style={styles.MessageText}>{item.location}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
 </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height / 6.8,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  inputContainer: {
    height: 50,
    borderRadius:20,
    //borderColor: '#064451',
    //borderWidth: 1,  
    paddingRight:10,
    backgroundColor:"rgb(247, 247, 247)",
  },
  inputText: {
    color: '#064451',
    fontWeight:'normal',
    padding: 13,
    paddingLeft:15,
    marginRight:5,
    borderRadius:20,
  },
  seachInput: {
    fontSize: 15,
    paddingRight:10,
    fontWeight: "bold",
    borderRadius: 20,
    width: width / 1.1,
    height: 50,
    backgroundColor: "#f8f8ff",
    marginTop: height / 90,
    alignSelf: 'center'
  },
  card: {
    width: "100%",
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  UserImgWrapper: {
    paddingTop: 50,
    paddingBottom: 15,
  },
  UserImg: {
    width: 120,
    height: 70,
    borderRadius: 0,
  },
  icon:{
    color:'#064451',
    width:20,
  },
  TextSection: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  UserInfoText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  UserName: {
    fontSize: 14,
    fontWeight: "bold",
    //fontFamily: "Lato-Regular",
  },
  PostTime: {
    fontSize: 12,
    color: "#666",
    //fontFamily: "Lato-Regular",
  },
  MessageText: {
    fontSize: 14,
    color: "#333333"
  }
})