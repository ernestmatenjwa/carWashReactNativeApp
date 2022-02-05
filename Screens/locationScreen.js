import React from 'react';
import { Text,
         View, 
         StyleSheet,
        Dimensions,
        TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get("screen");

export default function LocationScreen({ navigation }) {
  return (
  <View>
      <LinearGradient
   colors={["#064451", "#064451"]}
   style={styles.container} 
  >
    <View style={{height: 10}}></View>
  <Text style={{fontSize:20, fontWeight: "bold"}}>   Select nearest service provider</Text>
  <TextInput 
    style={styles.seachInput}
    placeholder='   Search car wash'
  />
 </LinearGradient>
 <View style={{height: height/2.5, backgroundColor: "red"}}>
    <Text>Map area</Text>
 </View>
 <View style={{height: height/3, backgroundColor: "green"}}>
    <Text>items</Text>
 </View>
  </View>

 
 
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height / 7,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
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