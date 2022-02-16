import React from 'react';
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

const Payment = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <SectionHeader>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CheckoutScreen')
          }}>
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
      <View>
        <McText h3 style={{color: '#064451', paddingLeft: 25}}>Select your payment method</McText>
      </View>
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
      <CardSection>
          <Image
            resizeMode='cover'
            source={images.card}
            borderRadius={15}
            style = {{
              width: '100%',
              //height: SIZES.height < 700 ? SIZES.height * 0.4:SIZES.height * 0.5,
              height: SIZES.height * 0.25  
            }}
          />
      </CardSection>
      <CardNumber>
        <McText h3 style={{color: '#064451', paddingLeft: 25}}>Card Number</McText>
        <TextInput
          style={{
            height: 50,
            borderColor: 'gray',
            borderRadius: 20,
            marginHorizontal: 10,
            paddingHorizontal: 30,
            borderBottomColor: '#C9C9C9',
            borderBottomWidth: 3,
          }}
          defaultValue="1234 5689 1011 1213"
        />
      </CardNumber>

      <CardName>
        <McText h3 style={{color: '#064451', paddingLeft: 25}}>Name on Card</McText>
        <TextInput
          style={{
            height: 50,
            borderColor: 'gray',
            borderRadius: 20,
            marginHorizontal: 10,
            paddingHorizontal: 30,
            borderBottomColor: '#C9C9C9',
            borderBottomWidth: 3,
          }}
          defaultValue="Karabo Molepo"
        />
      </CardName>

      <CardBackDetails>
          <ExpirationDate>
            <McText h3 style={{color: '#064451', paddingLeft: 25, left: '-15%'}}> Expiration Date </McText>
            <ExpirationDates>
              <Month>
                <TextInput
                  style={{
                    height: 50,
                    borderColor: 'gray',
                    borderRadius: 20,
                    marginHorizontal: 10,
                    paddingHorizontal: 30,
                    borderBottomColor: '#C9C9C9',
                    borderBottomWidth: 3,
                  }}
                  defaultValue="11"
                />
              </Month>
              <Day>
                <TextInput
                  style={{
                    height: 50,
                    borderColor: 'gray',
                    borderRadius: 20,
                    marginHorizontal: 10,
                    paddingHorizontal: 30,
                    borderBottomColor: '#C9C9C9',
                    borderBottomWidth: 3,
                  }}
                  defaultValue="27"
                />
              </Day>
            </ExpirationDates>
          </ExpirationDate>
          <SecurityCode>
            <McText h3 style={{color: '#064451', paddingLeft: 25, left: '-15%'}}> Security Code </McText>
              <TextInput
                style={{
                  height: 50,
                  width: 100,
                  borderColor: 'gray',
                  borderRadius: 20,
                  marginHorizontal: 10,
                  paddingHorizontal: 30,
                  borderBottomColor: '#C9C9C9',
                  borderBottomWidth: 3,
                }}
                defaultValue="250"
                top='-20%'
              />
          </SecurityCode>
      </CardBackDetails>
      <CardBottom>
        <Subtotal>
          <McText body3 style={{color: '#064451', paddingLeft: 25, left: '-15%'}}> subtotal </McText>
          <McText h2 style={{color: '#064451', paddingLeft: 25, left: '-15%'}}> R210.00 </McText>
        </Subtotal>
        <PayButton>
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
        </PayButton>
      </CardBottom>
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
  width: 45px;
  height: 25px;
`;

const Day = styled.View`
  width: 45px;
  height: 25px;
`;

const ExpirationDate = styled.View`
  width: 45%;
  height: 50px;
`;

const ExpirationDates = styled.View`
  width: 45%;
  height: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const SecurityCode = styled.View`
  width: 45%;
  height: 50px;
`;

const CardNumber = styled.View`
  top: 25%;
`;

const CardName = styled.View`
  top: 27%;
`;

const CardBackDetails = styled.View`
  top: 53%;
  align-items: center;
  justify-content: center;
  flex-direction: row
`;

const CardBottom = styled.View`
  top: 60%;
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center
  flex-direction: row;
  left: 3%
`;
const CardSection = styled.View`
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center
  top: 12%;
  left: 5%;
`;

const PaymentSection = styled.View`
  flex-direction: row
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center
  margin: 20px;
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
