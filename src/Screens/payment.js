import React, {useState, useEffect, Fragment} from 'react';
import { 
    View, 
    StyleSheet, 
    Image,
    Button,
    Alert,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import Input from "../components/custumized"
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';
import { COLORS, icons } from '../../constants';
import { McText, McIcon } from '../../component';
import bankCard from '../../assets/pictures/bankCard.jpg';
import { createRequests } from '../graphql/mutations';
import {
  Auth, 
  API,
  graphqlOperation,
} from 'aws-amplify';
import {useForm, Controller} from 'react-hook-form';
//import { getUser } from '../src/graphql/queries';

const Payment = ({ navigation, route }) => {
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
  const order = async (data) => {
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
      id: userInfo.attributes.sub,
      brand: carOpt.brand,
      regNO: carOpt.regNO,
      userName: userInfo.username,
      status: s,
      totalDue: subtotal,
      package: packg.package,
      carwash: carD.name,
      o_date: d +' '+ t,
    }
    try{
      await API.graphql(
        graphqlOperation(
          createRequests,
          { input: reqq }
        )
      ) 
      Alert.alert('You have succesfully booked to wash a car');
      //navigation.navigate("RegisteredCars"); marginTop: "10%",<ion-icon name="calendar-clear-outline"></ion-icon>
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
        <View>
          <McText h3 style={{color: '#064451', paddingLeft: 25}}>Select your payment method</McText>
        </View>
        <View 
          style={{
            width: '100%', 
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <PaymentSection>
            <TouchableOpacity> 
              <Card style={{flexDirection: 'row'}}>
                <McIcon 
                  source={icons.card} 
                  size={24} marginRight={5} 
                  backgroundColor='#064451' 
                  borderRadius={5}
                  paddingHorizontal={10}
                />
                <McText h3 color='#064451'>Card</McText>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity> 
              <Cash style={{flexDirection: 'row'}}>
                <McIcon 
                  source={icons.cash} 
                  size={24} 
                  marginRight={5} 
                  paddingHorizontal={10} 
                  backgroundColor='#C9C9C9' 
                  borderRadius={5}
                />
                <McText h3 color='#C9C9C9'>Cash</McText>
              </Cash>
            </TouchableOpacity>
          </PaymentSection>
        </View>
        <View style={{alignItems: "center", padding: 10}}>
           <Image 
           source={bankCard} 
           style={{
             width:300,
             height:190}} />
        </View>

        {/* <View style={{width: '100%'}}>
          <CardSection>
            <Image 
              resizeMode='cover'
              source={images.card}
              borderRadius={15}
            />
          </CardSection>
        </View> */}
            <McText h4 style={{color: '#064451', paddingLeft: 25}}>Card Number</McText>
            <Input
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
            <McText h4 style={{color: '#064451', paddingLeft: 25}}>Card Name</McText>
            <Input
              name="cardname"
              placeholder="Enter card name"
              control={control}
              rules={{
                required: 'Card name is required',
                minLength: {
                  value: 3,
                  message: 'Card name should be minimum 10 characters long',
                },
              }}
              />
        <View style={{width: '100%'}}>
          <CardBackDetails>
            <ExpirationDate style={{paddingLeft: 25}}>
              <McText h4 style={{color: '#064451'}}> Expiration Date </McText>
              <ExpirationDates>
                <Month>
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
                        value: 10,
                        message: 'date should be minimum 1 characters long',
                      },
                    }}
                  />
                </Month>
                <Day>
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
                    name="cardnumber"
                    control={control}
                    rules={{
                      required: 'Date is required',
                      minLength: {
                        value: 10,
                        message: 'date should be minimum 4 characters long',
                      },
                    }}
                  />
                </Day>
              </ExpirationDates>
            </ExpirationDate>
          </CardBackDetails>
        </View>

        <View style={{width: '100%'}}>
          <CardBottom>
            <Subtotal>
              <McText body3 style={{color: '#064451', paddingLeft: 25, left: '-15%'}}> subtotal </McText>
              <McText h2 style={{color: '#064451', paddingLeft: 25, left: '-15%'}}>R {subtotal}</McText>
            </Subtotal>
            <PayButton>
              <TouchableOpacity
                onPress={handleSubmit(order)}
              >
                <LinearGradient
                  colors={COLORS.btnLinear}
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
                  <McText>{loading ? 'Loading...': "PAY"}</McText>
                </LinearGradient>
              </TouchableOpacity>
            </PayButton>
          </CardBottom>
        </View>
    </View>
  );
};

const Subtotal = styled.View`
  width: 50%;
  height: 50px;
`;

const PayButton = styled.View`
  width: 50%;
  height: 50px;
`;

const Month = styled.View`
  
`;

const Day = styled.View`
  
`;

const ExpirationDate = styled.View`
  width: 45%;
  height: 50px;
`;

const ExpirationDates = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const SecurityCode = styled.View`
  width: 45%;
  height: 50px;
`;

const CardNumber = styled.View` 
  marginVertical: 10px;
`;

const CardName = styled.View` 
  marginVertical: 10px;
`;

const CardBackDetails = styled.View`
  flex-direction: row;
  width: 100%;
  height: 65px;
  paddingTop: 10px;
`;

const CardBottom = styled.View`
  width: 90%;
  height: 100px;
  flex-direction: row;
  paddingLeft: 20px;
  paddingTop: 10%;
`;
const CardSection = styled.View`
  width: 100%;
  height: 200;
  align-items: center;
  justify-content: center;
`;

const PaymentSection = styled.View`
  flex-direction: row
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center
  margin: 5px;
`;

const Card = styled.View`
  background-color: #D9E9ED;
  border-color: #064451;
  border-width: 2;
  height: 50px;
  width: 150px;
  margin-horizontal: 10px
  align-items: center;
  justify-content: center;
  border-radius: 5px
`;

const Cash = styled.View`
  background-color: #fff;
  border-color: #C9C9C9;
  border-width: 2;
  height: 50px;
  width: 150px;
  margin-horizontal: 10px
  align-items: center;
  justify-content: center;
  border-radius: 5px
`;

const SectionHeader = styled.View`
  flex-direction: row;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey,
  },
});

export default Payment;