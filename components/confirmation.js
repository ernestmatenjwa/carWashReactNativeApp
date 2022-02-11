import React from 'react';
import { Text,
         View, 
         StyleSheet,
        Dimensions,
        Image } from 'react-native';
import paymentPic from "../assets/pictures/paymentPic.jpg"
 

const { width, height } = Dimensions.get("screen");

export default function ConfirmScreen({ navigation }) {
  return (
 <View style={styles.container}>
   <Image source={paymentPic} style={{alignSelf: "center", width: height / 4, height: height / 4, marginTop: height / 4}}  />
   <View style={{marginTop: height / 20}}>
    <Text onPress={() =>  navigation.push("LocationScreen")} style={{textAlign: "center", color: "#064451", fontSize: 18}}>Your order is successfull!</Text>
    <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold", color: "#064451"}}>Now You Can Seat And Relax</Text>
   </View>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  seachInput: {
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 40,
    width: width / 1.1,
    height: 60,
    backgroundColor: "#f8f8ff",
    marginTop: height / 40,
    alignSelf: 'center'
  }
})