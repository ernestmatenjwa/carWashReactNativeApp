import React from 'react';
import { Text,
         View, 
         StyleSheet,
        Dimensions,
        Image } from 'react-native';
import paymentPic from "../assets/pictures/paymentPic.jpg"
import Iconicons from "react-native-vector-icons/Ionicons"

//<ion-icon name="checkmark-circle"></ion-icon>
const { width, height } = Dimensions.get("screen");

export default function ConfirmScreen({ navigation }) {
  return (
 <View style={styles.container}>
   <Iconicons name="checkmark-circle" size={300} color={"#064451"}/>
   <View style={{marginTop: height / 20}}>
    <Text style={{textAlign: "center", color: "#064451", fontSize: 18}}>Your order is successfull!</Text>
    <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold", color: "#064451"}}>Now You Can Seat And Relax</Text>
    <Text onPress={() =>  navigation.push("LocationScreen")} style={{textAlign: "center", color: "green", fontSize: 18, fontWeight: "700"}}>Home</Text>
   </View>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center"
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