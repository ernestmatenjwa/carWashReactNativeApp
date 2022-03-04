import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Pressable, 
    Dimensions, 
    FlatList, 
    TouchableOpacity,
    InputText } from "react-native";
import COLORS from '../consts/colors';
import Iconicons from "react-native-vector-icons/Ionicons"
import Modal from "react-native-modal";
import { Input } from 'react-native-elements';

const { width, height } = Dimensions.get("screen");

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
  //const [carBrand, setCarBrand] = React.useState(false);
  const [isModalVisible, setModalVisible] = React.useState(false);
  const {packg, carD} = route?.params || {};
  //const { input } = route?.params || {};
  //const {carD} = route.params
const show = () => {
  setModalVisible(!isModalVisible);
  //console.log(packg, "++++++++", carD)
};
const close = () => {
  setModalVisible(!isModalVisible);
};
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
            <View>
                <Text style={styles.UserName}>{item.brand} - {item.RegNumber}</Text>
                <Text style={{width: width/1.8,fontWeight: 'bold', fontSize: 12, color: COLORS.black}}>Model: {item.model}</Text>
                <Text style={{width: width/1.8,fontWeight: 'bold', fontSize: 12, color: COLORS.black}}>Description: {item.Desc}</Text>
               <View style={{flexDirection: 'row', paddingTop: "2%"}}>
               <Pressable onPress={show}><Text style={{color: "green", fontSize: 16, fontWeight: "bold"}}>EDIT</Text></Pressable>
                <Pressable><Text style={{paddingLeft: 20, color: "red", fontSize: 16, fontWeight: "bold"}}>DELETE</Text></Pressable>
                <Pressable 
                onPress={() => navigation.navigate("DateSetter")}
                style={{marginLeft: "50%"}}
                ><Text style={{ color: "#064451", fontSize: 16, fontWeight: "bold"}}>SELECT</Text></Pressable> 
                   </View> 
            </View>
          </View>   
       </TouchableOpacity>
      )}
    />
    {(() => {
    if (isModalVisible === true){
      return (
        <Modal isVisible={isModalVisible} style={{backgroundColor: "white", opacity: 0.8, }}>   
          <View
          style={{ }}
          >
          <Text style={[styles.tit, {alignSelf: "center", color:"green"}]}>UPDATE</Text>
          <Text style={styles.tit}>Car Brand</Text>
          <Input
          style={styles.inpt}
            inputContainerStyle={styles.Con}
            inputStyle ={styles.inputText}
            value="BMW"
          />
            <Text style={styles.tit}>Car Model</Text>
          <Input
          style={styles.inpt}
            inputContainerStyle={styles.Con}
            inputStyle ={styles.inputText}
            value="4series"
          />
          <Text style={styles.tit}>Registration Number</Text>
          <Input
            style={styles.inpt}
            inputContainerStyle={styles.Con}
            inputStyle ={styles.inputText}
            value="425 42C"
          />
          <Text style={styles.tit}>Discription</Text>
          <Input
          style={styles.inpt}
          inputContainerStyle={styles.Con}
          inputStyle ={styles.inputText}
          value="Red"
          />
          </View>
          <View style={{flexDirection:"row", alignContent: "center"}}>
          <Pressable
          style={{padding: 10}}
          ><Text style={{fontSize: 20, fontWeight: "bold", color: "green"}}>UPDATE</Text></Pressable>
          <Pressable 
          onPress={close}
          style={{padding: 10}}
          ><Text style={{fontSize: 20, fontWeight: "bold", color: "red"}}>CANCEL</Text></Pressable>
          </View>
        </Modal>
        )
      }
      return (
        null
        );
      })()}
        <View style={{
     marginTop:"-20%", 
     marginLeft:"80%",
     width: "100%",
  }}>
    <Iconicons
    size={70} 
    color={"#064451"}
    name="add-circle" 
    onPress={() => navigation.navigate('CarBrand')}  
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
tit: {
  fontSize: 20,
  padding: 5,
  color: "#064451",
  fontWeight: "bold"
},
inpt:{
  height: 30,
  borderColor: "black",
  backgroundColor: "white",
  opacity: 1,
  borderWidth: 0.5,
  borderColor: "black"
},
inputText: {
  fontSize: 20,
  padding: 10,
  color: "black"
},
Con: {
  height: 35,
  padding: 5,
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