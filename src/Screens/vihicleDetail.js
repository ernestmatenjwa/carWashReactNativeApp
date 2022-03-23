import React, { useState } from 'react';
import { View, Text,Alert, SafeAreaView, Image, StyleSheet, Pressable, Dimensions} from 'react-native';
import COLORS from '../constants/consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Auth, 
  API,
  graphqlOperation,
} from 'aws-amplify';
import CustomInput from '../components/cus';
import {useForm, Controller} from 'react-hook-form';
import { createRegisteredCars } from '../graphql/mutations';

const randomImages = [
  'https://tse2.mm.bing.net/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&pid=Api&P=0&w=221&h=178',
  'https://tse1.mm.bing.net/th?id=OIP.Q_-11kM22YOL505PnecHqgHaI9&pid=Api&P=0&w=300&h=300',
]
const { width, height } = Dimensions.get("screen");

function VihicleDetail ({navigation, route}) {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [loading,setLoading] = useState(false);
  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const {Brand} = route.params
  const register = async (data) => {
    const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
    const { reg_no, model, Desc } = data;
    if(loading){
      return;
    }
    setLoading(true);
    const car = {
      brand: Brand.text,
      regNO: data.reg_no,
      model: data.model,
      Desc: data.Desc,
      imageUrl: Brand.imageURL,
      userCarId: userInfo.attributes.sub,
    }
    try{
      await API.graphql(
        graphqlOperation(
          createRegisteredCars,
          { input: car }
        )
      ) 
      Alert.alert('You have succesfully added a vehicle');
      navigation.navigate("LocationScreen");
  }
  catch(e){
    Alert.alert('Error',e.message);
    console.log(e.message);
  }
    setLoading(false);
  }

  return (
    <View style={style.container}>
          <View style={{height: "20%", width: "100%", marginTop: "-30%", backgroundColor: "#064451", borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
            <Text style={[style.subHeader, {marginTop: "25%", color: "white", paddingLeft: "10%"}]}>Fill in vihicle Detail</Text> 
        </View>
        <View>
        <Image 
          style={[style.UserImg, {alignSelf: "center"}]} 
          source={{uri:Brand.imageURL}}
        />
        <Text style={{alignSelf: "center", fontWeight: "bold"}}>{Brand.text}</Text>
        <Text style={[style.label, {paddingTop: "5%"}]}>Registration Number</Text> 
        <CustomInput
          name="reg_no"
          placeholder="Enter registration"
          control={control}
          rules={{required: 'Registration is required'}}
          iconName='pencil'
        />
          <Text style={style.label}>Car Model</Text>
          <CustomInput
          name="model"
          placeholder="Enter model"
          control={control}
          rules={{required: 'Model is required'}}
          iconName='pencil'
        /> 
          <Text style={style.label}>Discription</Text> 
          <CustomInput
          name="Desc"
          placeholder="Enter description"
          control={control}
          rules={{required: 'Username is required'}}
          iconName='pencil'
        />
        </View>
    <Pressable 
      style={style.bookbtn}
      onPress={handleSubmit(register)}
    >
        <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>{loading ? 'Loading...': "Submit"}</Text>
      </Pressable>
        
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookbtn:{
    width: "83%",
    height: 50,
    backgroundColor: "#064451",
    justifyContent: 'center',
    alignItems: 'center',


  },
  header: {
      marginTop: 30,
      flexDirection: 'row',
      marginBottom: 20,
  },
  tit: {
    fontSize: 20,
    paddingRight: "30%",
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
      width: 50,
      height: 50,
      borderRadius: 70,
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
});


export default VihicleDetail;






 



