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
import { updateUser } from "../graphql/mutations";

const { width, height }= Dimensions.get("screen");

export default function ProfileEdit({ navigation, route }) {
  const {name, email, phone} = route.params;
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
    // <View style = {styles.container}>
    //     <View style={{height: height/4.8, backgroundColor: "#064451", width: width, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
    //     <Icon1 name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: "white", margin: "5%"}}/>
    //        <Text style={{color: "white", paddingTop: "2%", fontSize:50, fontWeight:"700", alignSelf: "center"}}>Edit Profile</Text>
    //     </View>
    // <View style = {{justifyContent:'center',alignItems:'center', width:"100%", marginTop: "1%", marginBottom: "0%"}}>          
    //    <Image source={img} style={styles.UserImg} /> 
    // </View>
    // <Text style = {styles.text_header}>Alex Mathenjwa </Text>
    // <Text style={styles.text_footer}>Full Name</Text>
    // <Input 
    //     //onChangeText={onChangeText} value={text}
    //     inputContainerStyle={[styles.inputContainer, {backgroundColor: "white", borderRadius: 10}]}
    //     inputStyle ={[styles.inputText, {paddingLeft: 15}]}                
    //     value={name}
    //     rightIcon={ <Icon size={24} 
    //     style={styles.icon} name='user'/>}
    // />
    
    // <Text style={styles.text_footer}>Email Address</Text>
    // <Input 
    //     //onChangeText={onChangeEmail} value={text}
    //     inputContainerStyle={[styles.inputContainer, {backgroundColor: "white", borderRadius: 10}]}
    //     inputStyle = {[styles.inputText, {paddingLeft: 15}]}
    //     value={email}
    //     rightIcon={ <Icon size={24} 
    //     style={styles.icon} name='envelope'/>}
    // />
    // <Text style={styles.text_footer}>Phone</Text>
    // <Input 
    //     //onChangeText={onChangePhone} value={text}
    //     inputContainerStyle={[styles.inputContainer, {backgroundColor: "white", borderRadius: 10}]}
    //     inputStyle = {[styles.inputText, {paddingLeft: 15}]}               
    //     value={phone}
    //     rightIcon={ <Icon size={24} 
    //     style={styles.icon} name='phone'/>}
    // />
    
    //     <Pressable 
    //     style={styles.loginG} 
    //     // onPress={() =>  navigation.push("ProfileEdit")}
    //     >
    //     <Text 
    //     style={{
    //         fontSize: 15, 
    //         color: "white"}}>Submit</Text>
    //     </Pressable>
    // </View>
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
        iconName='person'
        rules={{
          required: 'Name is required',
          minLength: {
            value: 2,
            message: 'Name should be at least 3 characters long',
          },
        }}
      />
        <Text style={styles.tit}>Email</Text>
      <CustomInput
      name="model"
      control={control}
        style={styles.inpt}
        inputContainerStyle={styles.Con}
        inputStyle ={styles.inputText}
        defaultValue={carOpt.model}
        iconName='envelop'
        rules={{
          required: 'Car Model is required',
          minLength: {
            value: 2,
            message: 'Car Model should be at least 2 characters long',
          },
        }}
      />
      <Text style={styles.tit}>Phone Number</Text>
      <CustomInput
      name="phone"
      control={control}
        style={styles.inpt}
        inputContainerStyle={styles.Con}
        inputStyle ={styles.inputText}
        defaultValue={carOpt.regNO}
        iconName='cell'
        rules={{
          required: 'Phone Number is required',
          minLength: {
            value: 3,
            message: 'Phone Number should be at least 3 characters long',
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
  
  