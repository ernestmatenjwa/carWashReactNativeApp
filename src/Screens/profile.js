import * as React from 'react';
import { Text,  
  Dimensions, 
  StyleSheet, 
  View, 
  Image,
  Pressable,
  Alert } from 'react-native';
import { StatusBar } from "expo-status-bar";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient';
import Modal from "react-native-modal";
import CustomInput from '../components/CustomInput/CustomInput';
import { API, graphqlOperation, Auth } from "aws-amplify";
import { getUser } from '../graphql/queries';
import { updateUser } from "../graphql/mutations";
import Iconicons from "react-native-vector-icons/Ionicons"
import {useForm} from 'react-hook-form';


const { width, height }= Dimensions.get("screen");

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


export default function ProfileScreen({ navigation }) {
  const [name, setName] = React.useState('Full name');
  const [user, setUser] = React.useState([]);
  const [profile, setProfile] = React.useState([]);
  const [email, setEmail] = React.useState('x@gmail.com');
  const [phone, setPhone] = React.useState('xx xxxx xxxx');
  const [id, setID] = React.useState('');
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [imgeUrl, setImageUrl] = React.useState("https://image.shutterstock.com/image-vector/camera-add-icon-260nw-1054194038.jpg");
  const {control, handleSubmit, watch} = useForm();

  const show = () => {
    setModalVisible(!isModalVisible);
  };
  const close = () => {
    setModalVisible(!isModalVisible);
  };
  const signOut = () => {
    Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
  const editProfile = async (data) => {
    try {
      
    } catch (e) {
      console.log(e);
    }
  }
  React.useEffect(() => {
    const getProfile = async (e) => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      const ID = userInfo.attributes.sub
         try{
          const userData = await API.graphql(graphqlOperation(getUser, {id: ID}));
          setProfile({data: userData})
          setName(userData.data.getUser.name)
              setEmail(userData.data.getUser.email)
              setPhone(userData.data.getUser.phone)
              setID(userData.data.getUser.id)
              setImageUrl(userData.data.getUser.imageUrl)
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
   }, [profile]);
   const apd = async data => {
    const {email: email, name: name, phone: phone} = data;
    try{
        const user = {
            id: id,
            name: data.name,
            email: data.email,
            phone: data.phone
        }
        console.log(user)
        const apdm = await API.graphql({query: updateUser, variables: {input: user}});
        Alert.alert("You have successfully apdated your profile")
        setModalVisible(!isModalVisible);
    } catch (e) {
      console.log(e)
        Alert.alert(e)
    } 
    
 }
  return (
    <View style = {styles.container}>
    <View style={{ flexDirection: "row", marginBottom: "10%"}}>
        <Iconicons style={{padding: 10}} name="camera-outline" size={35} color={"#064451"} />
        {<Image style={{ width: width/4.7,
                         height: height/9,
                         borderRadius: 33,
                         borderWidth: 1,
                         borderColor: "grey",
                         }} 
                         source={{uri: imgeUrl}} />}<Iconicons onPress={() =>  navigation.push("ProfileEdit", {name, email, phone, id})} style={{padding: 10}} name="create-outline" size={35} color={"#064451"} />
    </View>
 
     <Text style={[styles.text_footer, {marginTop:"-10%"}]}>Full Name</Text>
     <View style={{borderWidth: 1, borderColor: "grey", padding: 7, width: 300,  alignSelf: "center"}}>
     <Text style={{fontSize: 16}}>{name}</Text>
     </View>
     
     <Text style={styles.text_footer}>Email Address</Text>
     <View style={{borderWidth: 1, borderColor: "grey", padding: 7, width: 300, alignSelf: "center"}}>
     <Text style={{fontSize: 16}}>{email}</Text>
     </View>
     <Text style={styles.text_footer}>Phone</Text>
     <View style={{borderWidth: 1, borderColor: "grey", padding: 7, width: 300, alignSelf: "center"}}>
     <Text style={{fontSize: 16}}>{phone}</Text>
     </View>
     <Text onPress={navigation.push("Splash")}>Logout</Text>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: "grey"
    //overflow: "visible",
  },
  Con: {
    height: 35,
    padding: 5,
  },
  tit: {
    fontSize: 20,
    padding: 5,
    color: "#064451",
    fontWeight: "bold",
    paddingLeft: "5%",
  },
  inpt:{
    height: 30,
    borderColor: "black",
    backgroundColor: "white",
    opacity: 1,
    borderWidth: 0.5,
    borderColor: "black"
  },
  icon: {
      color: "#064451",
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
      paddingTop: 10,
      paddingLeft: "8%",
      alignSelf: "flex-start",
      fontWeight: "bold"
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
      //marginTop: "-3%"
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
