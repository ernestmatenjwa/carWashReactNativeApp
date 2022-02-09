import "react-native-gesture-handler"
import React from 'react';
import { Text,
         View, 
         StyleSheet,
        Dimensions,
        TextInput, SafeAreaView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from "axios";

const { width, height } = Dimensions.get("screen");

export default function LocationScreen({ navigation }) {
  
  const [people, setPeople] = React.useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);

  return (
  <SafeAreaView>
      <LinearGradient
   colors={["#064451", "#064451"]}
   style={styles.container} 
  >
  {/*}  <View style={{height: 10}}></View>
  <Text style={{fontSize:20, fontWeight: "bold"}}>   Select nearest service provider</Text>
  <TextInput 
    style={styles.seachInput}
    placeholder='   Search car wash'
  />*/}
 </LinearGradient>
 <View style={{height: height/2.3, backgroundColor: "red"}}>
    <Text onPress={() =>  navigation.push("ConfirmScreen")}>Map area</Text>
 </View>
 <View style={{height: height/4, }}>
 <FlatList 
        numColumns={1}
        keyExtractor={(item) => item.id} 
        data={people} 
        renderItem={({ item }) => ( 
          <Text style={styles.item}>{item.name}</Text>
        )}
  />
 </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height / 5,
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
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 3,
    padding: 30,
    backgroundColor: '#fff',
    fontSize: 24,
  },
})