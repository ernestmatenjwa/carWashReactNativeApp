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
import moment from "moment";
import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants';
import {
    Auth, 
    API,
    graphqlOperation,
  } from 'aws-amplify';
import { listRequests } from "../graphql/queries";
import { getUser } from "../graphql/queries";
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
  const [cur, setCur] = React.useState([]);

  React.useEffect(() => {
    const fetchCars = async () => {
    const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
    const ID = userInfo.attributes.sub
   const userData = await API.graphql(graphqlOperation(getUser, {id: ID}));
      try {
        const usersData = await API.graphql(graphqlOperation(getUser, {id: ID}));

        if(usersData.data.getUser.car.items.length === 0)
        {
          //navigation.navigate("CarBrand")
        }else{
          setReq(userData.data.getUser.request.items);
        }
      } catch (e) {
        console.log(e);
      }
   
    }
    fetchCars();
  }, [req])
  return (
  <View style={{backgroundColor: "lightgrey"}} >
  <View style={{height: 10}}></View>
 
 <FlatList 
      data={req}
      keyExtractor={item=>item.id}
      renderItem={({item}) => (
        <View style={styles.userInfo}>
        <Image style={styles.UserImg} source={{uri: item.carUrl}} />
      <View style={styles.TextSection}>
      <View style={styles.TimeDate}>
      <View style={{height: 20}}></View>
  <Text style={{color: COLORS.gray, fontSize: 9,}}>{moment(item.createdAt).format('DD MMMM YYYY, h:mm:ss a')}</Text>
</View>
<View style={[styles.FirstRow, {flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}]}>
  <Text style={styles.UserName}>{/*item.vehicleType}{' - '*/}{item.package} - R {item.totalDue}</Text>
</View>
<View><Text>{item.brand} {item.model} {item.Desc} - {item.regNO}</Text></View>
<View><Text style={{color: "black"}}>{item.carwashName} - {item.location} </Text></View>
<View style={[styles.SecondRow, {flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}]}>
  <Text style={{color: COLORS.black, fontSize: 10}}>Service date: {item.serTime}</Text>
  <Text style={{color: COLORS.black, fontSize: 10}}>{item.status}</Text>
</View>
      </View>
</View>
      )
    }
    ListEmptyComponent={<View><Text>Sorry we currently dnt have requests from you</Text></View>}
    /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SecondRow: {

  },
  FirstRow: {

  },
  TimeDate: {

  },
  inputContainer: {
    //height: 50,
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
    width: width/1.03,
    height: 110,
    backgroundColor:"white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 2,
    marginBottom: 2,
    marginTop: 2,
    borderRadius: 13,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    //padding: 2,
  },
  UserImg: {
    width: 60,
    height: 60,
    borderRadius: 13,
    padding: 10,
    marginTop: 25,
  },
  TextSection: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    paddingTop: 1,
    //marginLeft: -110,
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
    color: "#064451",
  },
  MessageText:{
    fontWeight: 'bold',
    fontSize: 14, 
    color: "lightgrey",
  },

  UserImgWrapper: {
    padding: 30,
    //paddingBottom: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

})