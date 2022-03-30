import * as React from 'react';
import { Text,  
  Dimensions, 
  StyleSheet, 
  View, 
  Image,
  Pressable,
  ImageBackground,
  Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useForm} from 'react-hook-form';
import { getUser } from "../graphql/queries";
import { updateUser } from '../graphql/mutations';
import { API, graphqlOperation, Auth } from "aws-amplify";
import gbImage from "../../assets/splash.png"

// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import Amplify, {Storage} from 'aws-amplify';
import awsconfig from '../aws-exports'
Amplify.configure(awsconfig)


const { width, height }= Dimensions.get("screen");

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function ProfileScreen({ navigation, route }) {
  const [name, setName] = React.useState('Full name');
  const [user, setUser] = React.useState([]);
  const [profile, setProfile] = React.useState([]);
  const [email, setEmail] = React.useState('x@gmail.com');
  const [phone, setPhone] = React.useState('xxx xxxx xxxx');
  const [id, setID] = React.useState('');
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [imgeUrl, setImageUrl] = React.useState("https://image.shutterstock.com/image-vector/camera-add-icon-260nw-1054194038.jpg");
  

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setImageUrl(pickerResult.uri);
    const file ={
          uri: pickerResult.uri,
          name: "profilePic",
          type: 'image/png'
          }
          // console.log("Bulk ",pickerResult);
          // console.log("File: ",file);

          Storage.put(file , pickerResult.uri,{
            level: 'public/profilePic' + id,
            keyPrefix: 's3/',
            bucket: 'reactnat-carwashapp-profile-storage225304-staging',  //Bucket name
            region: 'us-east-1',
            contentType: file.type
          }).then(res=>{
            
            console.log("Storage: ", res.key.uri)
            setImageUrl(res.key.uri);
             try{
              const admin = {
                  id: id,
                  imageUrl: res.key.uri
              }
              const apdm =  API.graphql({query: updateUser, variables: {input: admin}});
              Alert.alert("You have successfully apdated your profile")
              
          } catch (e) {
            console.log(e)
              Alert.alert(e)
          } 
          })

  }
  React.useEffect(() => {
    const getProfile = async (e) => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
         try{
            const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}));
            setProfile({data: userData})
            setName(userData.data.getUser.name)
            setEmail(userData.data.getUser.email)
            setPhone(userData.data.getUser.phone)
            setID(userData.data.getUser.id)
            setImageUrl(userData.data.getUser.imageUrl)
          // console.log(profile);

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

  return (
    <View style={styles.container}>
    <View style={styles.header}>
       <Text style={styles.HeaderText}>Welcome back,  {name}!</Text>
    </View>
   
    <Image style={styles.avatar} source={{uri:imgeUrl}}/>
    <View style={styles.viewAl}>
    <Pressable 
      style={[styles.text_footer, {}]}
      onPress={openImagePickerAsync}
     >
      <Icon
          style={styles.iconZb}
          size={24}
          name="camera"
       />
      </Pressable> 
      <Pressable 
      // style={styles.iconZb} 
      onPress={() => navigation.navigate("ProfileEdit", {name, email, phone, id})}>        
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
           <Text style={styles.name}>{name}</Text>              
          </View>
          <View style={styles.items}>
          <Icon
          style={styles.icon}
            size={24}
            name="envelope"
          />
          <Text style={styles.info}>{email}</Text>
          </View>
          <View style={styles.items} >
          <Icon
          style={styles.icon}
            size={24}
            name="phone"
          />
         <Text style={styles.description}>{phone}</Text>
        </View>
    </View>
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
