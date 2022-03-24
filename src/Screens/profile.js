import * as React from 'react';
import { Text,  
  Dimensions, 
  StyleSheet, 
  View, 
  Image,
  Pressable,
  TouchableOpacity,
  Alert } from 'react-native';
import { StatusBar } from "expo-status-bar";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient';
import Modal from "react-native-modal";
import CustomInput from '../components/CustomInput/CustomInput';
import { API, graphqlOperation, Auth } from "aws-amplify";
import { getUser } from '../graphql/queries';
import { updateUser } from "../graphql/mutations";
import Icon from 'react-native-vector-icons/FontAwesome';
import {useForm} from 'react-hook-form';


const { width, height }= Dimensions.get("screen");

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


export default function ProfileScreen({ navigation }) {
  const [name, setName] = React.useState('');
  const [user, setUser] = React.useState([]);
  const [profile, setProfile] = React.useState([]);
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [id, setID] = React.useState('');
  const [isModalVisible, setModalVisible] = React.useState(false);
  
  const {control, handleSubmit, watch} = useForm();

  const show = () => {
    setModalVisible(!isModalVisible);
  };
  const close = () => {
    setModalVisible(!isModalVisible);
  };
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
         //e.preventDefault();
         console.log('called1111111========', ID);
         try{
           //console.log('try');
          const userData = await API.graphql(graphqlOperation(getUser, {id: ID}));
          //console.log('yes22 ', userData);
         // console.log('>> ', profile.data?.data.getUserByEmail.name, '<<');
          setProfile({data: userData})
          setName(userData.data.getUser.name)
              setEmail(userData.data.getUser.email)
              setPhone(userData.data.getUser.phone)
              setID(userData.data.getUser.id)
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
   }, [profile]);
   const apd = async data => {
    const {email: email, name: name, phone: phone} = data;
    //const {  location: b_location, name: bname, Desc : Desc, imageUrl: imageUrl } = data;
    console.log(data.name)
    try{
        const user = {
            id: id,
            name: data.name,
            email: data.email,
            phone: data.phone
        }
        console.log(user)
        const apdm = await API.graphql({query: updateUser, variables: {input: user}});
        console.log("You have successfully apdated your profile")
        Alert.alert("You have successfully apdated your profile")
        setModalVisible(!isModalVisible);
    } catch (e) {
      console.log(e)
        Alert.alert(e)
    } 
    
 }
  return (
    <View style={styles.container}  >
    <View style={styles.header}>
       <Text style={styles.HeaderText}>Welcome back,  {name}!</Text>
    </View>
   
    <Image style={styles.avatar} source={{uri:profile.data?.data.getUser.imageUrl}}/>
    <View style={styles.viewAl}>
    <Pressable 
      onPress={show}
      style={[styles.text_footer, {}]}>
      <Icon
          style={styles.iconZb}
          size={24}
          name="camera"
       />
      </Pressable> 
      <Pressable 
      // style={styles.iconZb} 
      onPress={show}>        
      <Icon
        style={styles.iconZb}
        size={24}
        name="edit"
      />
      </Pressable>
    </View>

   

    <View style={styles.body}>
    <View style={styles.items}>
          <Icon
          
          style={styles.icon}
            size={28}
            name="user"
          />
           <Text style={styles.name}>{name ? name: "FullName"}</Text>              
          
          </View>
          <View style={styles.items}>
          <Icon
          style={styles.icon}
            size={24}
            name="envelope"
          />
          <Text style={styles.info}>{email ? email : "example@gmail.com"}</Text>
      
          </View>
          <View style={styles.items} >
          <Icon
          
          style={styles.icon}
            size={24}
            name="phone"
          />
  <Text style={styles.description}>{phone ? phone: "+27 122 510 995"}</Text>
        
          </View>

    </View>
     {(() => {
    if (isModalVisible === true){
      return (
      <Modal isVisible={isModalVisible} style={{backgroundColor: "white",opacity: 0.8,}}>   
        <View
        style={{height:"80%"}}
        >
        <Text style={[styles.tit, {alignSelf: "center", color:"green"}]}>UPDATE</Text>
        <Text style={styles.tit}>Name</Text>
        <CustomInput
        name="name"
        control={control}
        style={styles.inpt}
          inputContainerStyle={styles.Con}
          inputStyle ={styles.inputText}
          defaultValue={name}
          rightIcon={<Icon size={24} 
          style={styles.icon} name='user'/>}
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
          }}
        />
          <Text style={styles.tit}>Email</Text>
        <CustomInput
        name="email"
        control={control}
        style={styles.inpt}
          inputContainerStyle={styles.Con}
          inputStyle ={styles.inputText}
          defaultValue={email}
          rightIcon={<Icon size={24} 
          style={styles.icon} name='envelope'/>}
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <Text style={styles.tit}>Phone Number</Text>
        <CustomInput
        name="phone"
        control={control}
          style={styles.inpt}
          inputContainerStyle={styles.Con}
          inputStyle ={styles.inputText}
          defaultValue={phone}
          rightIcon={<Icon size={24} 
          style={styles.icon} name='phone'/>}
          rules={{
            required: 'Phone is required',
            minLength: {
              value: 12,
              message: 'Phone should be at least 13 digits long',
            },
          }}
        />
        </View>
        <View style={{flexDirection:"row", alignContent: "center"}}>
        <Pressable
        onPress={handleSubmit(apd)}
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
    backgroundColor: "white",
    // padding: 1,
  },
  viewAl: {
    // marginTop:50,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  iconZb: {
    height: 30,
    width: 30,
    margin:40,
    color:"#064451"
  },
  header:{
    backgroundColor: "#064451",
    height:200,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius:25
  },
  HeaderText:{
    color: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:50,
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130,
    
    backgroundColor:  "#064451"
  },
 
  body:{
    margin: 15,
    // backgroundColor: `transparent`,
    borderColor: "#064451",
    borderWidth: 2,
    borderTopWidth:0,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius:25,
    padding: 15
  },
  bodyContent: {
    flex: 1,
    // alignItems: 'flex-start',
    padding:30,
  },
  items:{
    marginTop: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  name:{
    fontSize:22,
    color:"#064451",
    fontWeight:'600',
    // textAlign: 'flex-start',
  },
  icon:{
    color: "#064451",
    marginRight: 20,
  },
  info:{
    fontSize:20,
    color: "#064451",
    fontWeight:'400',
  },
  description:{
    fontSize:22,
    color: "#696969",
    fontWeight:'500',
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#064451",
  },
  buttonText:{
    color: "#ffffff",
  }
});

const style = StyleSheet.create({
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
