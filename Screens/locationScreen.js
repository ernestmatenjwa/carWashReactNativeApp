import "react-native-gesture-handler"
import React from 'react';
import { Text,
  View, 
  StyleSheet,
 Dimensions,
 SafeAreaView,
 FlatList,
 TouchableOpacity,
Image } from 'react-native';
import Iconicons from "react-native-vector-icons/Ionicons"
import { LinearGradient } from 'expo-linear-gradient';
import mapImage from "../assets/pictures/map.jpg"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import COLORS from '../consts/colors';

const { width, height } = Dimensions.get("screen");

export default function LocationScreen({ navigation }) {
  const [carwash, SetCarwash] = React.useState([
    {
      id: '1',
      userName: 'Alex Car wash',
      userImg: require('../assets/pictures/car.jpg'),
      location: 'Johannesburg',
      Desc: 'We have provide good service',
    },
    {
      id: '2',
      userName: 'Mpho Car wash',
      userImg: require('../assets/pictures/car.jpg'),
      location: 'Pretoria',
      Desc: 'We have provide good service',
    },
    {
      id: '3',
      userName: 'Shaun',
      userImg: require('../assets/pictures/car.jpg'),
      location: 'Mbombela',
      Desc: 'We have provide good service',
    },
    {
      id: '4',
      userName: 'Alex Car wash',
      userImg: require('../assets/pictures/car.jpg'),
      location: 'Johannesburg',
      Desc: 'We have provide good service',
    },
    {
      id: '5',
      userName: 'Mpho Car wash',
      userImg: require('../assets/pictures/car.jpg'),
      location: 'Pretoria',
      Desc: 'We have provide good service',
    },
    {
      id: '6',
      userName: 'Shaun',
      userImg: require('../assets/pictures/car.jpg'),
      location: 'Mbombela',
      Desc: 'We have provide good service',
    },
    {
      id: '7',
      userName: 'Shaun',
      userImg: require('../assets/pictures/car.jpg'),
      location: 'Mbombela',
      Desc: 'We have provide good service',
    },
  ]);
  const [searchValue, onChangesearchValue] = React.useState('');

  return (
  <SafeAreaView>
    <View style={{height: "10%", backgroundColor: "#064451", width: width, }}>
           <Text style={{color: "white", paddingTop: "5%", fontSize:20, fontWeight:"700", alignSelf: "center"}}>Edit Profile</Text>
        </View>
  <Input 
    //onChangeText={event => {onChangesearchValue(event.target.value)}}
    inputContainerStyle={styles.inputContainer}
    inputStyle ={[styles.inputText, {padding: 10}]}
    placeholder="Search..."
    rightIcon={ <Icon size={24} 
    style={styles.icon} name='search'/>}
  />
  <Text style={{color: "#064451", paddingLeft: 10, fontSize: 15, fontWeight: "800"}}>Select a carwash closer to you</Text>
     
 <FlatList 
 style={{height:height/1.54}}
      data={carwash}
      keyExtractor={item=>item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate("VehicleScreen") }>
          <View style={styles.userInfo}>
          <View style={styles.UserImgWrapper}>
              <Image style={styles.UserImg} source={item.userImg} />
          </View>
          <View style={styles.TextSection}>
              <View style={styles.UserInfoText}>
                  <Text style={[styles.UserName, {marginTop: "-10%", color: "#064451", textTransform: "uppercase" }]}>{item.userName}</Text>
               </View>
            <View style={{marginTop: "-5%", }}>
                <Text style={styles.MessageText}>Location:   {item.location}</Text>
                <Text style={{width: width/1.8,fontWeight: 'bold', fontSize: 12, color: COLORS.black}}>Description: {item.Desc}</Text>
            </View>
          </View> 
          </View>
       </TouchableOpacity>
      )}
    />
   <View style={{
     marginTop:"-20%", 
     marginLeft:"85%",
     width:"100%",
  }}>
    <Icon
    size={50} 
    color={"#064451"}
    name="map-marker" 
    onPress={() => navigation.navigate('MapScreen')}  
   />
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 20,
},
container: {
    backgroundColor: COLORS.gray,
    flex: 1,
  },
  item: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    marginTop: 35,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
  subHeader:{
    color: COLORS.tial,
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 15,

  },
  price:{
    fontSize: 15,
    marginRight: -85,
    marginTop: -23,
    fontWeight: 'bold',
    marginRight: 100
  },
  userInfo: {
    width: width/1.03,
    height: 130,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 2,
    marginBottom: 5,
    marginTop: 15,
    borderRadius: 13,
    padding: 2,
    
  },
  UserImg: {
    width: width/2.7,
    height: height/8,
    borderRadius: 13,
    marginBottom: 15,
  },
  TextSection: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
  },
  UserInfoText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  UserName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "grey",
  },
  MessageText:{
    fontWeight: 'bold',
    fontSize: 14, 
    color: COLORS.lightGray
  },

  UserImgWrapper: {
    paddingTop: 10,
    paddingBottom: 15,
  },

})