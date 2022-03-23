import * as React from 'react';
import { Text, TouchableOpacity, ImageBackground, StyleSheet, View, Pressable } from 'react-native';
import { McText, McIcon } from '../components/component';
import { SIZES, COLORS, icons, images } from '../constants';
import {LinearGradient} from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons';

export default function CheckoutScreen({ navigation, route }) {
  const [subTotal, setSubTotal] = React.useState("");
  const {packg, carD, carOpt, global, t, d} = route?.params || {};
  return (
  <View style={styles.container}>
  <View style={styles.SectionHeader}>
  </View>
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
        <View style={styles.Receipt}>
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
            <View style={styles.SectionDetails}>
                <View style={styles.HeadingBox}>
                    {/*<McIcon 
                        source={icons.card} 
                        size={20} 
                        marginRight={5}
                        style={{
                            
                            tinyColor: '#064451'
                        }}
                    />*/}
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: COLORS.teal}}>
                        Service Details
                    </Text>
                </View>

                <View style={styles.TitleBox} >
                    <Text style={{color: COLORS.teal, paddingTop: 15, fontSize: 23}}>{packg.package} - {carOpt.model}</Text>
                </View>
                <Text 
                style={{color: COLORS.teal, paddingTop: 0, fontSize: 10}}>{carD.name} - {carD.location}</Text>
                <View style={styles.TimeBox} >
                    <View style={styles.DateBoxIcon}>
                    <Icon
                     size={60} 
                     color={"#064451"}
                     name="calendar"
                     marginRight={5} 
                     alignItems= 'center'
                     justifyContent= 'center'
                     left='5%' 
                    />
                       
                    </View> 

                    <View style={styles.DateBox} >
                        <View style={styles.Time}>
                            <Text style={{color: "black", fontSize: 18,}}>{packg.tmstimated}</Text>
                            <Text style={{color: "black", fontSize: 18}}>{d} at {t}</Text>
                        </View>
                    </View>   
                </View>
               <View style={{marginTop: "5%", }}>
               <Text style={{color: "#064451", fontSize: 20,}}>R {(packg.price*1.15).toFixed(2)}</Text>
                     {/* setSubTotal((packg.price*1.15).toFixed(2)) fontSize: 20, */}
                    <Text body6 style={{color: "black", }}> Tax Rate Of 15% Applies</Text>
               </View>
               <Pressable 
                    onPress={() => {
                    navigation.navigate('PaymentScreen', {subtotal: (packg.price*1.15).toFixed(2), packg, carD, carOpt, global, t, d})
                    }}
                    style={styles.login} >
                    <Text 
                    style={styles.text}>
                    CONFIRM</Text>
                </Pressable>
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
  login:{
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: "10%",
    //paddingVertical: 12, marginTop: "10%",
    //paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#064451',
    borderWidth:2,
    borderColor: '#064451',
    width: '94%',
    height: 50,
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    fontWeight:"bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
 /* container: {
    flex: 1,
    backgroundColor: "grey",
  },*/
  Date: {
    alignItems: "center",
  },
  Time: {
    //alignItems: "center",
  },
  DateBox: {
    alignItems: "center",
    flexDirection: "column",
  },
  DateBoxIcon: {
    //backgroundColor: "#064451",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  HeadingBox: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  TitleBox: {
    flexDirection: "row",
  },
  TimeBox: {
    flexDirection: "row",
    paddingTop: 10,
  },
  FooterBox: {
    top: "90%",
  },
  SectionDetails: {
    width: "100%",
    height: 150,
    padding: 20,
  },
  SectionHeader: {
    backgroundColor: "#064451",
    width: "100%",
    //height: "200%",
    flex: 0.3,
    marginTop: "-100%",
    flexDirection: "row",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  Receipt: {
    width: "109%",
    height: "150%",
    marginTop: "18%",
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "white",
    //alignItems: "center",
  },
});