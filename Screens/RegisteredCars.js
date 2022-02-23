import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Pressable, 
    Dimensions, 
    FlatList, 
    TouchableOpacity } from "react-native";
import COLORS from '../consts/colors';
import Iconicons from "react-native-vector-icons/Ionicons"

const { width, height } = Dimensions.get("screen");

const show = () => {
  setModalVisible(!isModalVisible);
  setService(1)
};

  const vehicle = [
    {
      id: '1',
      brand: 'BMW',
      RegNumber: 'FCK 814 MP',
      Desc: 'Red',
      model: '2021 - 3 series'
    },
    {
        id: '2',
        brand: 'Benz',
        RegNumber: 'FCK 344 KZN',
        Desc: 'White',
        model: '2001 - C63'
    },
  ]

export default function RegisteredCars({ navigation, route }) {
  //const {userName} = route.params
  return(
    <View style={styles.container}>
        <View style={{height: "12%", backgroundColor: "#064451", width: width, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
        <Iconicons name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: "white", margin: "5%"}}/>
           <Text style={{marginTop: "-10%", color: "white", fontSize:25, fontWeight:"bold", alignSelf: "center"}}>Registered Vehicles</Text>
        </View>
        <View style={{height:"2%", }}></View>
    
    <FlatList 
      data={vehicle}
      keyExtractor={item=>item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate("DateSetter") }>
          <View style={styles.userInfo}>
          <View style={styles.TextSection}>
              <View style={styles.UserInfoText}>
                  <Text style={styles.UserName}>{item.brand} - {item.RegNumber}</Text>
               </View>
            <View>
                <Text style={{width: width/1.8,fontWeight: 'bold', fontSize: 12, color: COLORS.black}}>Model: {item.model}</Text>
                <Text style={{width: width/1.8,fontWeight: 'bold', fontSize: 12, color: COLORS.black}}>Description: {item.Desc}</Text>
               <View style={{flexDirection: 'row', paddingTop: "2%"}}>
               <Pressable><Text style={{color: "green", fontSize: 16, fontWeight: "bold"}}>EDIT</Text></Pressable>
                <Pressable><Text style={{paddingLeft: 20, color: "red", fontSize: 16, fontWeight: "bold"}}>DELETE</Text></Pressable>
                <Pressable onPress={() => navigation.navigate("DateSetter") }><Text style={{marginLeft: "65%", color: "#064451", fontSize: 16, fontWeight: "bold"}}>SELECT</Text></Pressable>
                   </View> 
            </View>
          </View>
          </View>
       </TouchableOpacity>
      )}
    />
    <Iconicons 
    onPress={() => navigation.navigate("CarBrand")}
    name={"add-circle"} 
    size={80}
    color={"#064451"}
    style={{marginLeft: "75%"}}
    />
    </View>
    );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 20,
},
actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
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
    height: 100,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 2,
    marginBottom: 5,
    //marginTop: 1,
    borderRadius: 13,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    padding: 2,
    borderColor: "green",
    borderWidth: 1,
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