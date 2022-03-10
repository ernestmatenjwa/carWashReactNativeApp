import "react-native-gesture-handler"
import React from 'react';
import { Text,
  View, 
  StyleSheet,
 Dimensions,
 Alert,
 FlatList,
 TouchableOpacity,
Image } from 'react-native';
import {
    Auth, 
    API,
    graphqlOperation,
  } from 'aws-amplify';
import { listRequests } from "../graphql/queries";
import { getRequests } from "../graphql/queries";
import { LinearGradient } from 'expo-linear-gradient';
import mapImage from "../../assets/pictures/map.jpg"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { color } from "react-native-elements/dist/helpers";

const { width, height } = Dimensions.get("screen");

const carwash = [
  {
    id: '1',
    package: 'Full wash',
    date: '12/02',
    user: 'Alex Mathenjwa',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '2',
    package: 'Full wash',
    date: '12/02',
    user: 'Gomolemo sibiya',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '3',
    package: 'Full wash',
    date: '12/02',
    user: 'Shaun Lekalakala',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '4',
    package: 'Full wash',
    date: '12/02',
    user: 'Mpho Everlin',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '5',
    package: 'Full wash',
    date: '12/02',
    user: 'Gomolemo sibiya',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '6',
    package: 'Full wash',
    date: '12/02',
    user: 'Shaun Lekalakala',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '7',
    package: 'Full wash',
    date: '12/02',
    user: 'Alex Mathenjwa',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '8',
    package: 'Full wash',
    date: '12/02',
    user: 'Gomolemo sibiya',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '9',
    package: 'Full wash',
    date: '12/02',
    user: 'Shaun Lekalakala',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '10',
    package: 'Full wash',
    date: '12/02',
    user: 'Mpho Everlin',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '11',
    package: 'Full wash',
    date: '12/02',
    user: 'Gomolemo sibiya',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '12',
    package: 'Full wash',
    date: '12/02',
    user: 'Shaun Lekalakala',
    carBrand: 'BMW - WWE 123 GP',
  },
];

export default function RequestScreen({ navigation }) {
  const [searchValue, onChangesearchValue] = React.useState('');
  const [req, setReq] = React.useState([]);

  /*React.useEffect(() => {
    const getR = async (e) => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      const ID = userInfo.attributes.sub
         //e.preventDefault();
        // console.log('called1111111========', ID);
         try{
           console.log('try');
          const userData = await API.graphql(graphqlOperation(getRequests, {id: ID}));
          console.log('yes22 ', userData);
         // console.log('>> ', profile.data?.data.getUserByEmail.name, '<<');
         setReq({data: userData})
         console.log(req)
         console.log("===================")
            } catch (e) {
                console.log('error getting user 22', e);  
            } 
    }
    getR();
   }, []);*/

  React.useEffect(() => {
    const fetchReq = async () => {
      try {
        const usersData = await API.graphql(
          graphqlOperation(
            listRequests
          )
        )
        //return
        if(usersData.data.listRequests.items.length === 0)
        {
          Alert.alert("You have not made any request to any car wash yet")
          return
        }
        setReq(usersData.data.listRequests.items);
        for (let step = 0; step < 5; step++) {
          
          //console.log('Walking east one step ', req.items.brand);
        }
        //console.log(req)
      } catch (e) {
        console.log(e);
      }
   
    }
    fetchReq();
  }, [])

  return (
  <View style={{backgroundColor: "lightgrey"}} >
  <View style={{height: 10}}></View>
 
 <FlatList 
      style={{width: width, paddingBottom: 0, height: width/0.61666 /*elevation: 50*/}}
      data={req}
      keyExtractor={item=>item.id}
      renderItem={({item}) => (
        <View >
          <View style={styles.userInfo}>
            <View style={styles.TextSection}>
              <View style={styles.UserInfoText}>
                <Text style={styles.packagee}>{item.package} | {item.carwash}</Text>
              </View>
              <Text style={styles.carbranndd}>{item.brand} - {item.regNO}</Text>
              
              <Text style={styles.UserName}>Service date: {item.o_date} | Total: R {item.totalDue}</Text>
              <Text style={styles.UserName}>Req date: {item.createdAt}</Text>
              <Text style={{color: "green",  }}>status: {item.status}</Text>
            </View>
          </View>
        </View>
      )}
    />
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
    backgroundColor:"white",
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
    paddingBottom: 20,
  },
  u: {
    fontSize: 10,
    color: "lightgrey",
    fontWeight: "700",
  },
  UserImgWrapper: {
    paddingTop: 50,
    paddingBottom: 15,
    marginLeft: 5,
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
    paddingBottom: 1,
    paddingTop: 3,
    paddingLeft: 5,
    marginLeft: 10,
    width: width - 20,
    //borderWidth: 0.1,
    //elevation: 100,
   // borderColor: "#cccccc",
    borderLeftColor: "#064451",
    borderLeftWidth: 7,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    backgroundColor: "white"
  },
  UserInfoText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: -4,
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5,
  },
  UserName: {
    fontSize: 14,
    fontWeight: "bold",
    //margin: 20,
    //fontFamily: "Lato-Regular",
  },
  packagee: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#064451",
    color: "white",
    //fontFamily: "Lato-Regular",
  },
  carbranndd: {
    fontSize: 18,
    fontWeight: "500",
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