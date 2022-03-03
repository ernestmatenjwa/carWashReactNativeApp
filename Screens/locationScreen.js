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
import { listCarwashes } from "../src/graphql/queries";
import {
  Auth, 
  API,
  graphqlOperation,
} from 'aws-amplify';

import COLORS from '../consts/colors';

const { width, height } = Dimensions.get("screen");

export default function LocationScreen({ navigation }) {
  const [businesses, setBusinesses] = React.useState([]);

  React.useEffect(() => {
    const fetchBusineses = async () => {
      try {
        const usersData = await API.graphql(
          graphqlOperation(
            listCarwashes
          )
        )
        setBusinesses(usersData.data.listCarwashes.items);
        console.log(usersData.data.listCarwashes.items)
      } catch (e) {
        console.log(e);
      }
    }
    fetchBusineses();
  }, [])

  const [searchValue, onChangesearchValue] = React.useState('');

  return (
  <SafeAreaView>
    <View style={{height: "15%", backgroundColor: "#064451", width: width, }}>
        <Text style={{color: "white", paddingTop: "4%", fontSize:20, fontWeight:"700", alignSelf: "center"}}>Available car wash</Text>
    </View>
  <Input 
    //onChangeText={event => {onChangesearchValue(event.target.value)}}
    inputContainerStyle={styles.inputContainer}
    inputStyle ={[styles.inputText, {padding: 10}]}
    placeholder="Search..."
    rightIcon={ <Icon size={24} 
    style={styles.icon} name='search'/>}
  />
  <View style={{marginTop: "-4%"}}>
    <Text style={{color: "#064451", paddingLeft: 10, fontSize: 20, }}>Select a carwash closer to you</Text>
  </View>
 <FlatList 
 //style={{height:height/1.54}}
      data={businesses}
      keyExtractor={item=>item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate("VehicleScreen", {carD : item})}>
          <View style={styles.userInfo}>
          <View style={styles.UserImgWrapper}>
              <Image style={styles.UserImg} source={{uri: item.imageUrl}} />
          </View>
          <View style={styles.TextSection}>
              <Text style={[styles.UserName, {marginTop: "-10%", color: "#064451", textTransform: "capitalize",  }]}>{item.name}</Text>
              <Text style={styles.MessageText}>Location:   {item.location}</Text>
              <Text style={{width: width/1.8,fontWeight: 'bold', fontSize: 12, color: COLORS.black}}>Description: {item.Desc}</Text>
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
    //height: "60%",
    backgroundColor: COLORS.white,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 2,
    marginBottom: 5,
    marginTop: 2,
    borderRadius: 13,
    padding: 2,
    
  },
  UserImg: {
    width: 60,
    height: 50,
    borderRadius: 13,
    marginBottom: 15,
  },
  TextSection: {
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 25,
    //paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    //height: "50%"
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
    height: "60%",
    paddingTop: 10,
    paddingBottom: 15,
  },

})