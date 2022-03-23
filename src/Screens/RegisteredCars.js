import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Pressable, 
    Dimensions, 
    FlatList, 
    TouchableOpacity,
    Alert, Image } from "react-native";
    import {
      Auth, 
      API,
      graphqlOperation,
    } from 'aws-amplify';
import { listRegisteredCars } from "../graphql/queries";
import { getUser } from "../graphql/queries";
import { deleteRegisteredCars } from "../graphql/mutations";
import COLORS from '../constants/consts/colors';
import Iconicons from "react-native-vector-icons/Ionicons"
import Modal from "react-native-modal";
import { Input } from 'react-native-elements';

const randomImages = [
  'https://tse2.mm.bing.net/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&pid=Api&P=0&w=221&h=178',
  'https://tse1.mm.bing.net/th?id=OIP.Q_-11kM22YOL505PnecHqgHaI9&pid=Api&P=0&w=300&h=300',
]

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
  const [car, setCar] = React.useState([]);
  const [id, setID] = React.useState([]);
  const [cur, setCur] = React.useState([]);
  const [isModalVisible, setModalVisible] = React.useState(false);
  const {packg, carD, global} = route?.params || {};
  //const { input } = route?.params || {};
  //const {carD} = route.params
  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }
  React.useEffect(() => {
    const fetchCars = async () => {
    const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
    const ID = userInfo.attributes.sub
   const userData = await API.graphql(graphqlOperation(getUser, {id: ID}));

      try {
        const usersData = await API.graphql(graphqlOperation(getUser, {id: ID}));
        if(usersData.data.getUser.car.items.length === 0)
        {
          navigation.navigate("CarBrand")
        }else{
          setCar(userData.data.getUser.car.items);          
        }
      } catch (e) {
        console.log(e);
      }
   
    }
    fetchCars();
  }, [car])
const show = () => {
  setModalVisible(!isModalVisible);

};
const close = () => {
  setModalVisible(!isModalVisible);
};
const del = async (id) => {
  Alert.alert("clicked", id)
  try{
      const car = {
          id: id,
      }
      const dedm = await API.graphql({query: deleteRegisteredCars, variables: {input: car}});
      Alert.alert("You have successfully deleted a car")
  } catch (e) {
    console.log(e)
      Alert.alert(e)
  } 
  
}
  return(
    <View style={styles.container}>   
    <View style={{height:"2%", }}></View>
    <FlatList 
      data={car}
      keyExtractor={item=>item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate("DateSetter", {carOpt : item, packg, carD, global}) }>
          <View style={styles.userInfo}>
          <View style={styles.UserImgWrapper}>
              <Image style={styles.UserImg} source={{uri: item.imageUrl}} />
          </View>
            <View style={styles.TextSection}>
                <Text style={styles.UserName}>{item.brand} - {item.regNO}</Text>
                <Text style={{width: width/1.8,fontWeight: 'bold', fontSize: 12, color: COLORS.black}}>Model: {item.model}</Text>
                <Text style={{width: width/1.8,fontWeight: 'bold', fontSize: 12, color: COLORS.black}}>Description: {item.Desc}</Text>
               <View style={{flexDirection: 'row', paddingTop: "2%", marginLeft:"50%"}}>
               <Pressable onPress={() => navigation.navigate("ResgistEdit", {carOpt : item}) }><Text style={{color: "green", fontSize: 16, fontWeight: "bold"}}>EDIT</Text></Pressable>
                <Pressable onPress={() => del(item.id)}><Text style={{paddingLeft: 20, color: "red", fontSize: 16, fontWeight: "bold"}}>DELETE</Text></Pressable>
                   </View> 
            </View>
          </View>   
       </TouchableOpacity>
      )}
    />
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    width: width/4.7,
    height: height/9,
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