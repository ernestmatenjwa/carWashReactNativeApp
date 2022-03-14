import React, {useState, useEffect, Fragment} from 'react';
import { 
    View, 
    StyleSheet, 
    ImageBackground,
    Button,
    Alert,
    TouchableOpacity
} from 'react-native';
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient'
import { SIZES, COLORS, icons, images } from '../constants';
import { McText, McIcon } from '../components/component';

const Checkout = ({ navigation, route }) => {
  const [subTotal, setSubTotal] = useState("");
  const {packg, carD, carOpt, global, t, d} = route?.params || {};
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   useEffect(() => {
//     let {selectedEvent} = route.params;
//     setSelectedEvent(selectedEvent);
//   }, []);

return (
    <View style={styles.container}>
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
          <McText h1 style={{left: '120%', color: 'white', marginBottom: 10 }}>
            Checkout
          </McText>
        </TouchableOpacity>
      </SectionHeader>
      <View 
        style={{
          flexDirection: 'row', 
          marginHorizontal: 40,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 150,
          elevation: 12,
        }}>
        <Receipt>
            <ImageBackground
                resizeMode='cover'
                source={images.car}
                borderTopLeftRadius={20}
                borderTopRightRadius={20}
                style = {{
                  width: '100%',
                  //height: SIZES.height < 700 ? SIZES.height * 0.4:SIZES.height * 0.5,
                  height: SIZES.height * 0.25,
                  
                }}
            />
            <SectionDetails>
                <HeadingBox>
                    <McIcon 
                        source={icons.card} 
                        size={20} 
                        marginRight={5}
                        style={{
                            tinyColor: '#064451'
                        }}
                    />
                    <McText style={{fontSize: 14, fontWeight: 'bold', color: COLORS.teal}}>
                        Service Details
                    </McText>
                </HeadingBox>

                <TitleBox >
                    <McText h3 style={{color: COLORS.teal}}>{packg.package} - {carOpt.model}</McText>
                </TitleBox>

                <TimeBox >
                    <DateBoxIcon>
                        <McIcon 
                            source={icons.calendar1} 
                            size={24} 
                            marginRight={5} 
                            color='#064451' 
                            alignItems= 'center'
                            justifyContent= 'center'
                            left='5%'
                        />
                    </DateBoxIcon> 

                    <DateBox >
                        <Time marginleft={2} padding={0}>
                            <McText body6 style={{color: COLORS.txt, marginRight: 2}}> {packg.tmstimated}</McText>
                        </Time>
                        <Date marginleft={2} padding={0}>
                            <McText body6 style={{color: COLORS.txt, marginRight: 2}}>  {d} {t}</McText>
                        </Date>
                    </DateBox>   
                </TimeBox>

                <FooterBox>
                    <McText h3 style={{color: COLORS.txt}}> R {(packg.price*1.15).toFixed(2)}</McText>
                    {/* {setSubTotal((packg.price*1.15).toFixed(2))} */}
                    <McText body6 style={{color: COLORS.txt}}> Tax Rate Of 15% Applies</McText>
                    {/* <Button
                        title="Press me"
                        onPress={() => Alert.alert('Simple Button pressed')}
                        color= {COLORS.teal} 
                    /> */}
                    <TouchableOpacity 
                        onPress={() => {
                        navigation.navigate('RegisteredCars', {subtotal: (packg.price*1.15).toFixed(2), packg, carD, carOpt, global, t, d})
                      }}>
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
                          <McText>CONFIRM</McText>
                        </LinearGradient>
                    </TouchableOpacity>
                </FooterBox>
            </SectionDetails>
        </Receipt>
      </View>
    </View>
  );
};

const Date = styled.View`
    align-items: center 
`;

const Time = styled.View`
    align-items: center 
`;

const DateBox = styled.View`
    flex-direction: column;
    align-items: center;
`;

const DateBoxIcon = styled.View`
    background-color: #064451;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 5px
`;

const HeadingBox = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 15px;
`;

const TitleBox = styled.View`
    flex-direction: row
`;

const TimeBox = styled.View`
    flex-direction: row;
    padding-top: 10px
`;

const FooterBox = styled.View`
    top: 55px
`;

const SectionDetails = styled.View`
    width: 100%;
    height: 150px;
    padding: 20px;
`;

const SectionHeader = styled.View`
    background-color: ${COLORS.teal}
    flex: 0.3;
    padding-top: 30
    flex-direction: row
    border-bottom-left-radius: 15px
    border-bottom-right-radius: 15px
`;

const Receipt = styled.View`
  width: 100%;
  height: 500px;
  border-radius: ${SIZES.radius}
  background-color: ${COLORS.white}
  align-items: center;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey,
  },
});

export default Checkout;
