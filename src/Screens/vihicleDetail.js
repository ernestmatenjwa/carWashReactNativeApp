import React, { useState } from 'react';
import { View, Text,Alert, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import COLORS from '../constants/consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Auth, 
  API,
  graphqlOperation,
} from 'aws-amplify';
import CustomInput from '../components/CustomInput/CustomInput';
import {useForm, Controller} from 'react-hook-form';
import { createRegisteredCars } from '../graphql/mutations';

const randomImages = [
  'https://tse2.mm.bing.net/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&pid=Api&P=0&w=221&h=178',
  'https://tse1.mm.bing.net/th?id=OIP.Q_-11kM22YOL505PnecHqgHaI9&pid=Api&P=0&w=300&h=300',
]

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
      userID: userInfo.attributes.sub,
      brand: Brand,
      regNO: data.reg_no,
      model: data.model,
      Desc: data.Desc,
      imageUrl: getRandomImage(),
    }
    try{
      await API.graphql(
        graphqlOperation(
          createRegisteredCars,
          { input: car }
        )
      ) 
      Alert.alert('You have succesfully added a vehicle');
      navigation.navigate("RegisteredCars");
  }
  catch(e){
    Alert.alert('Error',e.message);
    console.log(e.message);
  }
    setLoading(false);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
          <View style={{height: "38%", backgroundColor: COLORS.tial, borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
            <View style={style.header}>
            <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: COLORS.white, marginTop: 13, marginLeft: 10}}/>
            <View style={{marginLeft: 35}}>
                <Text style={{fontSize: 30, fontWeight: "bold", color: COLORS.white}}>Vihicle details</Text>
            </View>
            </View>
            <Text style={style.subHeader}>Fill in vihicle Detail</Text>
            
        </View>
        <View>
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
        
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  inputText: {
    color: '#064451',
    fontWeight:'normal',
    padding: 1,
    paddingLeft:15,
    marginRight:5,
    borderRadius:2,  
   // fontFamily: '"Inter-Bold", "Inter", sans-serif',
  },
  inputContainer: {
    height: 40,
    width:'100%',
    borderRadius: 8,
    borderColor: '#064451',
    borderWidth: 1,  
    paddingRight:10,
    backgroundColor:"rgb(247, 247, 247)",  
    //fontFamily: '"Inter-Bold", "Inter", sans-serif',
  },
  icon:{
    color:'#064451',
    width:15,
  },
  label: {
    overflow: 'visible',
    fontWeight: "700",
   // fontFamily: '"Inter-Bold", "Inter", sans-serif',
    color: '#064451',
    fontSize: 18,  
    marginLeft: 15,
    marginBottom: 10,
  },
  partco:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgName: {

  },
  header:{
    marginTop: 30,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
   
  subHeader:{
    color: COLORS.white,
    marginTop: "30%",
    fontWeight: 'bold',
    padding: "10%",
    fontSize: 17,

  },

  footer: {
      width: 370,
      // height: 150,
      backgroundColor: COLORS.gray,
      borderRadius: 25,
      // borderTopLeftRadius: 25,
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:'center',
      marginTop: -35,
  },
  currentCar:{
    height: 60,
    width: 370,
    alignSelf: 'center',
    backgroundColor: '#54BAB9',
    borderRadius: 30,
    marginTop: -20,
  },
  UserImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 5,
    marginTop: 5,
  },
  black:{
    height:50,
    width:50,
    backgroundColor:"black",
    borderRadius:25
  },
  gray:{
    height:50,
    width:50,
    backgroundColor:"gray",
    borderRadius:25
  },
  white:{
    height:50,
    width:50,
    backgroundColor:"white",
    borderRadius:25
  },
  blue:{
    height:50,
    width:50,
    backgroundColor:"blue",
    borderRadius:25
  },
  red:{
    height:50,
    width:50,
    backgroundColor:"red",
    borderRadius:25
  },
  brown:{
    height:50,
    width:50,
    backgroundColor:"brown",
    borderRadius:25
  },
  Yellow:{
    height:50,
    width:50,
    backgroundColor:"yellow",
    borderRadius:25
  },
  bookbtn:{
    width: 170,
    height: 50,
    backgroundColor: COLORS.tial,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 170,
    marginBottom: 50,

  },

  

});


export default VihicleDetail;






 



