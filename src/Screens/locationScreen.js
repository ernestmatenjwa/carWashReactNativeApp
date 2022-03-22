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
import _ from "lodash";
import { SearchBar} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { listCarwashes } from "../graphql/queries";
import { getUser } from "../graphql/queries";
import { createUser } from '../graphql/mutations';
import {
  Auth, 
  API,
  graphqlOperation,
} from 'aws-amplify';
import { getCarWashes, contains } from "./api/index";

import COLORS from '../constants/consts/colors';

const randomImages = [
  'https://tse2.mm.bing.net/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&pid=Api&P=0&w=221&h=178',
  'https://tse1.mm.bing.net/th?id=OIP.Q_-11kM22YOL505PnecHqgHaI9&pid=Api&P=0&w=300&h=300',
]

const { width, height } = Dimensions.get("screen");

export default function LocationScreen({ navigation }) {
  const [businesses, setBusinesses] = React.useState([]);
  const [global, setGlobal] = React.useState('');
  const [profile, setProfile] = React.useState([]);

  // Search Properties
  const [data, setData] = React.useState([]);
  const [fullData, setFullData] = React.useState([]);
  const [query,setQuery] = React.useState("");


  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const data = _.filter(fullData, (user) => {
      return contains(user, formattedQuery);
    });
    setQuery(text);
    setData(data);
   };
   
  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }
  React.useEffect(() => {

    const fetchBusineses = async () => {
      try {
        console.log('alex1239')
        const usersData = await API.graphql(
          graphqlOperation(
            listCarwashes
          )
        )
        getCarWashes(
          usersData.data.listCarwashes.items,
          5,
          query
        ).then((u)=>{

          setData(u);
          setFullData(u);
        })
        setBusinesses(usersData.data.listCarwashes.items);
      } catch (e) {
        // console.log(e);
      }
     
    }
    fetchBusineses();
  }, [])
  React.useEffect( () => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if(userInfo){
        const userData = await API.graphql(
          graphqlOperation(
            getUser,
            { id: userInfo.attributes.sub }
            )
        )
        // console.log('alex1234')
        setProfile({data: userData})
        //return
        //console.log(userData.data.getUser.name);
        //setGlobal(userData.data.getUser.name)
        if (userData.data.getUser) {
          //console.log("User is already registered in database");
          return;
        }
        console.log('alex1')
        // console.log(businesses);
        //return
        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          email: userInfo.attributes.email,
          phone: "none",
          imageUrl: getRandomImage(),
        }
        await API.graphql(
          graphqlOperation(
            createUser,
            { input: newUser }
          )
        )
      }
    }
    fetchUser();
  }, [profile]) 


 
  
  return (
    <SafeAreaView>
     <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        value ={query}
        onChangeText={handleSearch}
      />
    <FlatList 
      style={{height:height/1.54}}
      data={data}
      keyExtractor={item=>item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate("VehicleScreen", {carD : item, global})}>
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