import React, {useState, useEffect, Fragment} from 'react';
import { 
    View, 
    StyleSheet, 
    Image,
    Text,
    Alert,
    TouchableOpacity,
    TextInput,
    Pressable
} from 'react-native';
import Input from "../components/custumized"
import {LinearGradient} from 'expo-linear-gradient';
import { COLORS, icons } from '../../constants';
import { McText, McIcon } from '../../component';
import bankCard from '../../assets/pictures/bankCard.jpg';
import { createUserRequests } from '../graphql/mutations';
//import { crea } from '../graphql/mutations';
import {
  Auth, 
  API,
  graphqlOperation,
} from 'aws-amplify';
import {useForm, Controller} from 'react-hook-form';

export default function PaymentScreen({ navigation, route }) {
  const [loading,setLoading] = useState(false);
  const {packg, carD, carOpt, t, d,global, subtotal} = route?.params || {};
  const [date, setDate] = useState(new Date());
  const [name, setName] = React.useState([]);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  
  const test = () => {
    var today = new Date();
    let fDate =  (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    setDate(fDate)
  }
  const pay = async (data) => {
    console.log(carOpt.brand, 'alexxxxxx');
    if(loading){
      return;
    }
    setLoading(true);
    var today = new Date();
    let fDate =  (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    setDate(fDate)
    const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
    //const ID = userInfo.attributes.sub
    //console.log(carOpt.brand, 'alexxxxxx');
    // try{
    //   console.log('try');
    //  const userData = await API.graphql(graphqlOperation(getUser, {id: ID}));
    // //console.log('yes22 ', userData);
    // // console.log('>> ', profile.data?.data.getOrders.name, '<<');
    //  //setName(userData.data.getUser.name)
    // //console.log(userData.data.getUser.name)
    //    } catch (e) {
    //        console.log('error getting user 22', e);  
    //    }
    // if(loading){
    //   return;
    // }
    // setLoading(true);
    //return
    console.log('alexxx123111111111111');
    //return
    const s = "PENDING WASH...";
    const reqq = {
      brand: carOpt.brand,
      regNO: carOpt.regNO,
      model: carOpt.model,
      Desc: carOpt.Desc,
      location: carD.location,
      userName: userInfo.username,
      status: s,
      totalDue: subtotal,
      package: packg.package,
      packDesc: carD.id,
      carwashName: carD.name,
      serTime: d +' '+ t,
      carUrl: carOpt.imageUrl,
      userRequestId: userInfo.attributes.sub,
    }
    //console.log(" +++++++++++++++++",reqq)
   //return
    try{
      await API.graphql(
        graphqlOperation(
          createUserRequests,
          { input: reqq }
        )
      ) 
      Alert.alert('You have succesfully requested to wash a car');
      //navigation.navigate("RegisteredCars");
  }
  catch(e){
    Alert.alert('Error',e.message);
    console.log(e.message);
  }
  //   try{
  //     //console.log('123', s);
    
  //   //console.log(oderr)
  //   //return
  //   console.log("we here 1")
  //     await API.graphql(
  //       graphqlOperation(
  //         createRequests,
  //         { input: oderr }
  //       )
  //     ) 
  //     console.log("we here 2")
  //     //navigation.navigate("RegisteredCars");
  // }
  // catch(e){
  //   Alert.alert('Error',e.message);
  //   console.log(e.message);
  // }
    navigation.navigate('ConfirmScreen')
    setLoading(false);
  }

  return (
  <View style={styles.container}>
        <Text style={{color: '#064451', paddingLeft: 29, alignSelf: "flex-start"}}>Fill in card details</Text>
        <View style={{alignItems: "center", padding: 10}}>
        <Image 
           source={bankCard} 
           style={{
            width:300,
            height:190}} />
        </View>

            <Text style={{color: '#064451', paddingLeft: 29, alignSelf: "flex-start"}}>Card Number</Text>
            <View style={styles.Month}>
                  <TextInput
                    style={{
                      height: 40,
                      width: 300,
                      borderColor: 'gray',
                      borderRadius: 5,
                      paddingHorizontal: 20,
                      borderColor: '#C9C9C9',
                      borderWidth: 3,
                    }}
                    name="cardnumber"
                    placeholder="Enter card number"
                    control={control}
                    rules={{
                      required: 'Card number is required',
                      minLength: {
                        value: 10,
                        message: 'Card number should be minimum 10 characters long',
                      },
                    }}
                  />
                </View>
            <Text style={{color: '#064451', paddingLeft: 29, alignSelf: "flex-start"}}>Bank Name</Text>
            <View style={styles.Month}>
                  <TextInput
                    style={{
                      height: 40,
                      width: 300,
                      borderColor: 'gray',
                      borderRadius: 5,
                      paddingHorizontal: 20,
                      borderColor: '#C9C9C9',
                      borderWidth: 3,
                    }}
                    name="cardname"
                    placeholder="Enter card name"
                    control={control}
                    rules={{
                      required: 'Bank name is required',
                      minLength: {
                        value: 3,
                        message: 'Bank name should be minimum 10 characters long',
                      },
                    }}
                  />
                </View>
        <View style={{width: '100%'}}>
          <View style={styles.CardBackDetails}>
            <View style={styles.ExpirationDate} >
              <Text h4 style={{color: '#064451'}}> Expiration Date </Text>
              <View style={styles.ExpirationDates}>
                <View style={styles.Month}>
                  <TextInput
                    style={{
                      height: 40,
                      width: 75,
                      borderColor: 'gray',
                      borderRadius: 5,
                      paddingHorizontal: 20,
                      borderColor: '#C9C9C9',
                      borderWidth: 3,
                    }}
                    placeholder="MM"
                    name="mm"
                    control={control}
                    rules={{
                      required: 'date is required',
                      minLength: {
                        value: 2,
                        message: 'date should be minimum 1 characters long',
                      },
                    }}
                  />
                </View>
                <View style={styles.Day}>
                  <TextInput
                    style={{
                      height: 40, 
                      width: 75,
                      borderColor: 'gray',
                      borderRadius: 5,
                      paddingHorizontal: 15,
                      borderColor: '#C9C9C9',
                      borderWidth: 3,
                    }}
                    placeholder="YYYY"
                    name="yy"
                    control={control}
                    rules={{
                      required: 'Year is required',
                      minLength: {
                        value: 4,
                        message: 'date should be minimum 4 characters long',
                      },
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.CardBottom}>
            <View style={styles.Subtotal}>
              <Text style={{color: '#064451', fontSize: 22, paddingLeft: 25, left: '-15%'}}> Subtotal </Text>
              <Text style={{color: '#064451', fontSize: 20, fontWeight: "bold", paddingLeft: 25, left: '-11%'}}>R {subtotal}</Text>
            </View>
            <View style={styles.PayButton}>
              <TouchableOpacity
              
              >
                    <Pressable
                    onPress={handleSubmit(pay)} 
                    style={{
                      backgroundColor: '#064451', 
                      width: '100%', 
                      height: 53, 
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center'}} >
                    <Text 
                      style={{
                      color: 'white'}}>
                    {loading ? 'Loading...': "PAY"}</Text>
                </Pressable>
                {/* <LinearGradient
                  //color: '#064451'
                  start={{x:0, y: 1}}
                  end={{x:1, y: 1}}
                  style = {{
                    width: '100%',
                    height: 53,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text>PAY</Text>
                </LinearGradient> */}
              </TouchableOpacity>
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
  Subtotal:{
    width: "50%",
    height: 50,
  },
  PayButton: {
    width: "50%",
    height: 50,
  },
 /* container: {
    flex: 1,
    backgroundColor: "grey",
  },*/
  Month: {
    //alignItems: "center",
  },
  Day: {
    //alignItems: "center",
  },
  ExpirationDate: {
    width: "45%",
    height: 50
  },
  ExpirationDates: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  SecurityCode: {
    width: "45%",
    height: 50,
  },
  CardNumber: {
    marginVertical: 10
  },
  CardName: {
    marginVertical: 10
  },
  CardBackDetails: {
    flexDirection: "row",
    width: "100%",
    height: 65,
    paddingTop: 10,
    paddingLeft: 25
  },
  CardBottom: {
    width: "90%",
    height: 100,
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: '10%',
  },
  CardSection: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  PaymentSection: {
    flexDirection: "row",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  Card: {
    backgroundColor: "#D9E9ED",
    borderColor: "#064451",
    borderWidth: 2,
    height: 50,
    width: 150,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  Cash: {
    backgroundColor: "#fff",
    borderColor: "#C9C9C9",
    borderWidth: 2,
    height: 50,
    width: 150,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  SectionHeader: {
    flexDirection: "row"
  },
});