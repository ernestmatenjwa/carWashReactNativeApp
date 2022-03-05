import React, {useState, useEffect, Fragment} from 'react';
import { 
    View, 
    StyleSheet, 
    Image,
    Button,
    Alert,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';
import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants';
import { McText, McIcon } from '../component';
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import bankCard from './../assets/pictures/bankCard.jpg';
import { createOders } from '../src/graphql/mutations';
import {
  Auth, 
  API,
  graphqlOperation,
} from 'aws-amplify';
import { getUser } from '../src/graphql/queries';

const Payment = ({ navigation, route }) => {
  const [loading,setLoading] = useState(false);
  const {packg, carD, carOpt, t, d, subtotal} = route?.params || {};
  const [date, setDate] = useState(new Date());
  const [name, setName] = React.useState([]);
  
  const test = () => {
    var today = new Date();
    let fDate =  (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    setDate(fDate)
  }
  const order = async (data) => {
    var today = new Date();
    let fDate =  (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    setDate(fDate)
    const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
    const ID = userInfo.attributes.sub
    console.log(carOpt.brand);
    try{
      console.log('try');
     const userData = await API.graphql(graphqlOperation(getUser, {id: ID}));
     //console.log('yes22 ', userData);
    // console.log('>> ', profile.data?.data.getOrders.name, '<<');
     setName(userData.data.getUser.name)
     //console.log(userData.data.getUser.name)
       } catch (e) {
           console.log('error getting user 22', e);  
       }
    // if(loading){
    //   return;
    // }
    // setLoading(true);
    //return
    console.log(name + '123');
    //return
    
    try{
      const oderr = {
      userID: userInfo.attributes.sub,
      brand: carOpt.brand,
      regNO: carOpt.regNO,
      userName: name,
      package: packg.package,
      o_date: date,
    }
    //console.log(oderr)
    //return
      await API.graphql(
        graphqlOperation(
          createOders,
          { input: oderr }
        )
      ) 
      //navigation.navigate("RegisteredCars");
  }
  catch(e){
    Alert.alert('Error',e.message);
    console.log(e.message);
  }
    navigation.navigate('ConfirmScreen')
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{width: '100%'}}>
          <SectionHeader>
            <TouchableOpacity
             onPress={() => navigation.goBack()}>
              <McIcon 
                source={icons.back_arrow} 
                size={24} marginRight={5} 
                marginHorizontal={20}
                style = {{
                  color:'#064451'
                }}
                top={30}
              />
              <McText h1 style={{left: '120%', color: '#064451', marginBottom: 10 }}>
                Payment
              </McText>
            </TouchableOpacity>
          </SectionHeader>
        </View>

        <View>
          <McText onPress={test} h3 style={{color: '#064451', paddingLeft: 25}}>Select your payment method</McText>
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
        <View style={{width:100,height:100}}>

       
      <Image source={bankCard} />
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

        <View style={{width: '100%'}}>
          <CardNumber>
            <McText h4 style={{color: '#064451', paddingLeft: 25}}>Card Number</McText>
              <TextInput
                style={{
                  height: 40,
                  borderRadius: 20,
                  marginHorizontal: 10,
                  paddingHorizontal: 30,
                  borderBottomColor: '#C9C9C9',
                  borderBottomWidth: 3,
                }}
                defaultValue="1234 5689 1011 1213"
                color="#C9C9C9"
              />
          </CardNumber>
        </View>

        <View style={{width: '100%'}}>
          <CardName>
            <McText h4 style={{color: '#064451', paddingLeft: 25}}>Name on Card</McText>
            <TextInput
              style={{
                height: 40,
                borderRadius: 20,
                marginHorizontal: 10,
                paddingHorizontal: 30,
                borderBottomColor: '#C9C9C9',
                borderBottomWidth: 3,
              }}
              defaultValue="Karabo Molepo"
              color="#C9C9C9"
            />
          </CardName>
        </View>

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
                      borderRadius: 20,
                      paddingHorizontal: 30,
                      borderBottomColor: '#C9C9C9',
                      borderBottomWidth: 3,
                    }}
                    defaultValue="11"
                    color="#C9C9C9"
                  />
                </Month>
                <Day>
                  <TextInput
                    style={{
                      height: 40,
                      width: 75,
                      borderColor: 'gray',
                      borderRadius: 20,
                      paddingHorizontal: 30,
                      borderBottomColor: '#C9C9C9',
                      borderBottomWidth: 3,
                    }}
                    defaultValue="27"
                    color="#C9C9C9"
                  />
                </Day>
              </ExpirationDates>
            </ExpirationDate>

            <SecurityCode>
              <McText h4 style={{color: '#064451', paddingLeft: 25}}> Security Code </McText>
                <TextInput
                  style={{
                    height: 40,
                    width: 85,
                    borderColor: 'gray',
                    borderRadius: 20,
                    paddingHorizontal: 30,
                    borderBottomColor: '#C9C9C9',
                    borderBottomWidth: 3,
                  }}
                  left="20%"
                  defaultValue="250"
                  color="#C9C9C9"
                />
            </SecurityCode>
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
                onPress={order}
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
                  <McText>PAY</McText>
                </LinearGradient>
              </TouchableOpacity>
            </PayButton>
          </CardBottom>
        </View>
      </ScrollView>
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