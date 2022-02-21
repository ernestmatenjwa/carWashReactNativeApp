
import React from "react";
import { View,
    Text,
    StyleSheet,
    Image, 
    Dimensions, 
    FlatList, 
    TouchableOpacity } from "react-native";
import COLORS from '../consts/colors';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Iconicons from "react-native-vector-icons/Ionicons"

const { width, height } = Dimensions.get("screen");

const Tractor = [
  {
    id: '1',
    package: 'Full Body wash',
    userImg: require('../assets/pictures/serImgs/tractor.jpg'),
    tmstimated: '30min-40min',
    price: '410',
    Description: 'Exterior wash, Interior clean up and vaccum',
  },
  {
    id: '2',
    package: 'Half Body wash',
    userImg: require('../assets/pictures/serImgs/tractor1.jpg'),
    tmstimated: '15min-30min',
    price: '305',
    Description: 'Exterior wash only!',
  },]
  const bus = [
    {
      id: '1',
      package: 'Full Body wash',
      userImg: require('../assets/pictures/serImgs/bus2.jpg'),
      tmstimated: '30min-40min',
      price: '450',
      Description: 'Exterior wash, Interior clean up and vaccum',
    },
    {
      id: '2',
      package: 'Half Body wash',
      userImg: require('../assets/pictures/serImgs/bus.jpg'),
      tmstimated: '15min-30min',
      price: '340',
      Description: 'Exterior wash only!',
    },
  ]

export default function More2({ navigation, route }) {
  return(
    <View style={styles.container}>
        <View style={{height: "10%", backgroundColor: "#064451", width: width, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
        <Icon1 name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: "white", margin: "5%"}}/>
           <Text style={{marginTop: "-10%", color: "white", fontSize:25, fontWeight:"500", alignSelf: "center"}}>More Services</Text>
        </View>
      <Text style={{color: "#064451", paddingLeft: 10, fontSize: 15, fontWeight: "800"}}>B u s</Text>
      <FlatList 
      data={bus}
      keyExtractor={item=>item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate("CarBrand") }>
          <View style={styles.userInfo}>
          <View style={styles.UserImgWrapper}>
              <Image style={styles.UserImg} source={item.userImg} />
          </View>
          <View style={styles.TextSection}>
              <View style={styles.UserInfoText}>
                  <Text style={styles.UserName}>{item.package}</Text>
                  <Text style={[styles.price, {color: "green", paddingTop: "2%"}]}>R{item.price}</Text>
               </View>
            
            <View>
                <Text style={{width: width/1.8,fontWeight: 'bold', fontSize: 12, color: COLORS.black}}>{item.Description}</Text>
                <Text style={styles.MessageText}>{item.tmstimated}</Text>
            </View>
          </View>
          </View>
       </TouchableOpacity>
      )}
    />
    <Text style={{ color: "#064451", paddingLeft: 10, fontSize: 15, fontWeight: "800"}}>T r a c t o r</Text>
    <FlatList 
      data={Tractor}
      keyExtractor={item=>item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate("CarBrand") }>
          <View style={styles.userInfo}>
          <View style={styles.UserImgWrapper}>
              <Image style={styles.UserImg} source={item.userImg} />
          </View>
          <View style={styles.TextSection}>
              <View style={styles.UserInfoText}>
                  <Text style={styles.UserName}>{item.package}</Text>
                  <Text style={[styles.price, {color: "green", paddingTop: "2%"}]}>R{item.price}</Text>
               </View>
            
            <View>
                <Text style={{width: width/1.8,fontWeight: 'bold', fontSize: 12, color: COLORS.black}}>{item.Description}</Text>
                <Text style={styles.MessageText}>{item.tmstimated}</Text>
            </View>
          </View>
          </View>
       </TouchableOpacity>
       
      )}
    />
     <View style={{
     marginTop:"-20%", 
     marginLeft:"80%",
     width:1,
  }}>
    <Iconicons
    size={70} 
    color={"#064451"}
    name="arrow-forward-circle" 
    onPress={() => navigation.navigate('More3')}  
   />
    </View>
</View>   
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