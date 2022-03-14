import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Pressable, 
    Dimensions, 
    Alert, 
    TouchableOpacity,
    InputText } from "react-native";
    import {
      Auth, 
      API,
      graphqlOperation,
    } from 'aws-amplify';
import { listRegisteredCars } from "../graphql/queries";
import COLORS from '../constants/consts/colors';
import Iconicons from "react-native-vector-icons/Ionicons"
import Modal from "react-native-modal";
import CustomInput from '../components/CustomInput/CustomInput';
import {useForm} from 'react-hook-form';
import { updateRegisteredCars } from "../graphql/mutations";


const { width, height } = Dimensions.get("screen");

export default function  ResgistEdit({ navigation, route }) {
  const {carOpt} = route?.params || {};
  const {control, handleSubmit, watch} = useForm();

  const apd = async data => {
    const {name: name, model: model, regNO: regNO, Desc: desc} = data;
    console.log(data)
    try{
        const car = {
            id: carOpt.id,
            brand: data.name,
            model: data.model,
            regNO: data.regNO,
            Desc: data.desc
        }
        const apdm = await API.graphql({query: updateRegisteredCars, variables: {input: car}});
        console.log("You have successfully apdated your car")
        Alert.alert("You have successfully apdated your car")
    } catch (e) {
      console.log(e)
        Alert.alert(e)
    } 
    navigation.navigate("RegisteredCars")
 }
    return (
    <View style={styles.container}>
      <View style={{marginTop: "30%",height:width-2, width:"90%", alignSelf: "center", flex: 1}}>
      <View
      style={{ }}
      >
      <Text style={[styles.tit, {alignSelf: "center", color:"green"}]}>UPDATE</Text>
      <Text style={styles.tit}>Car Brand</Text>
      
      <CustomInput
      name="name"
      control={control}
        style={styles.inpt}
        inputContainerStyle={styles.Con}
        inputStyle ={styles.inputText}
        defaultValue={carOpt.brand}
        iconName='pencil'
        rules={{
          required: 'Brand name is required',
          minLength: {
            value: 2,
            message: 'Brand name should be at least 2 characters long',
          },
        }}
      />
        <Text style={styles.tit}>Car Model</Text>
      <CustomInput
      name="model"
      control={control}
        style={styles.inpt}
        inputContainerStyle={styles.Con}
        inputStyle ={styles.inputText}
        defaultValue={carOpt.model}
        iconName='pencil'
        rules={{
          required: 'Car Model is required',
          minLength: {
            value: 2,
            message: 'Car Model should be at least 2 characters long',
          },
        }}
      />
      <Text style={styles.tit}>Registration Number</Text>
      <CustomInput
      name="regNO"
      control={control}
        style={styles.inpt}
        inputContainerStyle={styles.Con}
        inputStyle ={styles.inputText}
        defaultValue={carOpt.regNO}
        iconName='pencil'
        rules={{
          required: 'Registration Number is required',
          minLength: {
            value: 3,
            message: 'Registration Number should be at least 3 characters long',
          },
        }}
      />
      <Text style={styles.tit}>Discription</Text>
      <CustomInput
      name="desc"
      control={control}
      style={styles.inpt}
      inputContainerStyle={styles.Con}
      inputStyle ={styles.inputText}
      defaultValue={carOpt.Desc}
      iconName='pencil'
      rules={{
        required: 'Description is required',
        minLength: {
          value: 3,
          message: 'Description should be at least 3 characters long',
        },
      }}
      />
        <View style={{flexDirection:"row", alignContent: "center"}}>
      <Pressable
      onPress={handleSubmit(apd)}
      style={{padding: 10}}
      ><Text style={{fontSize: 20, fontWeight: "bold", color: "green"}}>UPDATE</Text></Pressable>
      <Pressable 
      onPress={() => navigation.goBack()}
      style={{padding: 10}}
      ><Text style={{fontSize: 20, fontWeight: "bold", color: "red"}}>CANCEL</Text></Pressable>
      </View>
      </View>
    
      </View>
    </View>
    );
};

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

