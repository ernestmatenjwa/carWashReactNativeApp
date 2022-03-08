import * as React from 'react';
import { Text,  Dimensions, StyleSheet, View, Image,Pressable } from 'react-native';
import { StatusBar } from "expo-status-bar";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient';
import Modal from "react-native-modal";
import { Input } from 'react-native-elements';
import { API, graphqlOperation, Auth } from "aws-amplify";
import { getUser } from '../graphql/queries';
import Icon from 'react-native-vector-icons/FontAwesome';


const { width, height }= Dimensions.get("screen");

export default function ProfileScreen({ navigation }) {
  const [name, setName] = React.useState('Alex Mathenjwa');
  const [user, setUser] = React.useState([]);
  const [profile, setProfile] = React.useState([]);
  const [email, setEmail] = React.useState('alexmatenjwa@gmail.com');
  const [phone, setPhone] = React.useState('0729476167');
  const [isModalVisible, setModalVisible] = React.useState(false);
  
  const show = () => {
    setModalVisible(!isModalVisible);
  };
  const close = () => {
    setModalVisible(!isModalVisible);
  };
  React.useEffect(() => {
    const getProfile = async (e) => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      const ID = userInfo.attributes.sub
         //e.preventDefault();
         console.log('called1111111========', ID);
         try{
           //console.log('try');
          const userData = await API.graphql(graphqlOperation(getUser, {id: ID}));
          //console.log('yes22 ', userData);
         // console.log('>> ', profile.data?.data.getUserByEmail.name, '<<');
          setProfile({data: userData})
          // console.log(profile)
            } catch (e) {
                console.log('error getting user 22', e);  
            } 
   }
       function loadUser() { 
           return Auth.currentAuthenticatedUser({bypassCache: true});
       }
       async function onLoad() {
           try {
               const user = await loadUser();
               setUser(user.attributes);
           }catch (e) {
               alert(e)
           }
       }
       onLoad();
       getProfile();
   }, []);
  return (
    <View style = {styles.container}>
    <View style = {{justifyContent:'center',alignItems:'center', width:"100%", }}>          
       <Image source={{uri:profile.data?.data.getUser.imageUrl}} style={styles.UserImg} /> 
    </View>
    <Text style={[styles.text_footer, {marginTop:"-10%"}]}>Full Name</Text>
    <Input 
        value={profile.data?.data.getUser.name}
        inputContainerStyle={[styles.inputContainer, {backgroundColor: "white", borderRadius: 10}]}
        inputStyle ={[styles.inputText, {paddingLeft: 15}]}                
        //placeholder="Alex Mathenjwa"
        rightIcon={ <Icon size={24} 
        style={styles.icon} name='user'/>}
        disabled
    />
    
    <Text style={styles.text_footer}>Email Address</Text>
    <Input 
        value={profile.data?.data.getUser.email}
        inputContainerStyle={[styles.inputContainer, {backgroundColor: "white", borderRadius: 10}]}
        inputStyle = {[styles.inputText, {paddingLeft: 15}]}
        //placeholder="alexmatenjwa@gmail.com"
        rightIcon={ <Icon size={24} 
        style={styles.icon} name='envelope'/>}
        disabled
    />
    <Text style={styles.text_footer}>Phone</Text>
    <Input 
        value={profile.data?.data.getUser.phone}
        inputContainerStyle={[styles.inputContainer, {backgroundColor: "white", borderRadius: 10}]}
        inputStyle = {[styles.inputText, {paddingLeft: 15}]}               
        //placeholder="0729476167"
        rightIcon={ <Icon size={24} 
        style={styles.icon} name='phone'/>}
        disabled
    />
    
        <Pressable 
        style={styles.loginG} 
        onPress={show}
        >
        <Text 
        style={{
            fontSize: 15, 
            color: "white"}}>Edit</Text>
        </Pressable>
        {(() => {
    if (isModalVisible === true){
      return (
      <Modal isVisible={isModalVisible} style={{backgroundColor: "white",opacity: 0.8,}}>   
        <View
        style={{height:"80%"}}
        >
        <Text style={[styles.tit, {alignSelf: "center", color:"green"}]}>UPDATE</Text>
        <Text style={styles.tit}>Name</Text>
        <Input
        style={styles.inpt}
          inputContainerStyle={styles.Con}
          inputStyle ={styles.inputText}
          onChangeText={setName}
          value={profile.data?.data.getUser.name}
        />
          <Text style={styles.tit}>Email</Text>
        <Input
        style={styles.inpt}
          inputContainerStyle={styles.Con}
          inputStyle ={styles.inputText}
          onChangeText={setEmail}
          value={profile.data?.data.getUser.email}
        />
        <Text style={styles.tit}>Phone Number</Text>
        <Input
          style={styles.inpt}
          inputContainerStyle={styles.Con}
          inputStyle ={styles.inputText}
          onChangeText={setPhone}
          value={profile.data?.data.getUser.phone}
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
    </View> 
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      width: width,
      //backgroundColor: '#009387'
      padding: 10
    },
    icon: {
        color: "#064451",
    },
    loginG:{
        alignItems: 'center',
        justifyContent: 'center',
        //alignSelf: "flex-end",
        //paddingVertical: 12,
        //paddingHorizontal: 32,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: "#064451",
        //borderWidth:2,
        //borderColor: '#064451',
        width: '40%',
        height: 50,
        marginLeft: "55%",
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
    UserImg: {
      width: 90,
      height: 90,
      borderRadius: 25,
      },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        height: 450,
        marginLeft:10,
        marginRight:10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        paddingHorizontal: 20,
        paddingVertical: 30,
        
        
       
    },
    text_header: {
        color: '#064451',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign:'center',
        paddingBottom:30
    },
    text_footer: {
        color: '#064451',
        fontSize: 18,
        paddingTop: 0,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderTopWidth:1,
        borderTopColor:'#f2f2f2',
        borderLeftWidth:1,
        borderLeftColor:'#f2f2f2',
        borderRightWidth:1,
        borderRightColor:'#f2f2f2',
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
      
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        //marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'flex-end',
        marginTop: "-5%"
    },
    signIn: {
        width: '30%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        //marginTop: "1%"
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    text:{
        color: '#05375a',
    },
    icons:{
        flexDirection:'row',
        alignItems:'flex-start'
    },
    image: {
      height:'100%',
      width:"100%",
      justifyContent:'center',
      alignItems:"center",
      borderRadius:25,
      overflow:'hidden'
      },
      text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
    
      }
  });
