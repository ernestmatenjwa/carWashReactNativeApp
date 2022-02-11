
import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";


import car from './../assets/pictures/car.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

import { ScrollView } from "react-native-gesture-handler";

export default function VihicleScreen({ navigation }) {
    return(
    <View style={styles.container}>
      <View style={styles.header}>
         <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: COLORS.tial, marginTop: 9, marginLeft: 10}}/>
         <View style={{marginLeft: 35}}>
         <Text style={{fontSize: 30, fontWeight: "bold", color: COLORS.tial}}>Vihicle Type</Text>
         <Text style={{fontSize: 14, marginTop: 25, fontWeight: "bold", color: COLORS.tial}}>Select Type Of Vihicle</Text>
         </View>
      </View>

      <View style={styles.box}>
            
            <View style={styles.inner}>
            <Image
style={{
width: 150,
height: 80,
borderRadius:10,
marginTop:30
}}
source={car }
/>
<Text  onPress={() =>  navigation.push("CarBrand")}>Car</Text>

            </View>
             
        </View>
        <View style={styles.box}>
            <View style={styles.inner}>
            <Image
style={{
width: 150,
height: 80,
borderRadius:10,
marginTop:30
}}
source={car }
/>
<Text  onPress={() =>  navigation.push("CarBrand")}>Minivan</Text>

            </View>
             
        </View>
        <View style={styles.box}>
            <View style={styles.inner}>
            <Image
style={{
width: 150,
height: 80,
borderRadius:10,
marginTop:30
}}
source={car }
/>
<Text  onPress={() =>  navigation.push("CarBrand")}>Bus</Text>

            </View>

            
             
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
            <Image
style={{
width: 150,
height: 80,
borderRadius:10,
marginTop:30
}}
source={car }
/>
<Text  onPress={() =>  navigation.push("CarBrand")}>Motorcycle</Text>

            </View>

            
             
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
            <Image
style={{
width: 150,
height: 80,
borderRadius:10,
marginTop:30
}}
source={car }
/>
<Text  onPress={() =>  navigation.push("CarBrand")}>Truck</Text>

            </View>

            
             
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
            <Image
style={{
width: 150,
height: 80,
borderRadius:10,
marginTop:30
}}
source={car }
/>
<Text  onPress={() =>  navigation.push("CarBrand")}>Tractor</Text>



            </View>

            
             
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
            <Image
style={{
width: 150,
height: 80,
borderRadius:10,
marginTop:30
}}
source={car }
/>
<Text  onPress={() =>  navigation.push("CarBrand")}>Abnormal car</Text>

            </View>

            
             
        </View>
      

       {/* <View style={styles.box}>
          <View style={styles.inner}>
             <Image
             style={{
               width: 150,
               height: 80,
               borderRadius:10,
               marginTop:30
              }}
              source={car }
              />
              <Text>Car</Text>
              </View>
        </View>
              <View style={styles.box}>

     

         
           
            

            <View style={styles.box}>
              
            
                <View style={styles.inner}>
                <Image
  style={{
    width: 150,
    height: 80,
borderRadius:10,
marginTop:30
  }}
  source={car }
/>
<Text onPress={() =>  navigation.push("CarBrand")}>Car</Text>

                </View>
                 
            </View>
            <View style={styles.box}>

                <View style={styles.inner}>
                <Image
  style={{
    width: 150,
    height: 80,
borderRadius:10,
marginTop:30
  }}
  source={car }
/>
<Text onPress={() =>  navigation.push("CarBrand")}>Minivan</Text>

                </View>
                 
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                <Image
  style={{
    width: 150,
    height: 80,
borderRadius:10,
marginTop:30
  }}
  source={car }
/>
<Text onPress={() =>  navigation.push("CarBrand")}>Bus</Text>

                </View>

                
                 
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                <Image
  style={{
    width: 150,
    height: 80,
borderRadius:10,
marginTop:30
  }}
  source={car }
/>
<Text onPress={() =>  navigation.push("CarBrand")}>Motorcycle</Text>

                </View>

                
                 
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                <Image
  style={{
    width: 150,
    height: 80,
borderRadius:10,
marginTop:30
  }}
  source={car }
/>
<Text onPress={() =>  navigation.push("CarBrand")}>Truck</Text>

                </View>

                
                 
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                <Image
  style={{
    width: 150,
    height: 80,
borderRadius:10,
marginTop:30
  }}
  source={car }
/>
<Text onPress={() =>  navigation.push("CarBrand")}>Tractor</Text>



                </View>

                
                 
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                <Image
  style={{
    width: 150,
    height: 80,
borderRadius:10,
marginTop:30
  }}
  source={car }
/>
<Text onPress={() =>  navigation.push("CarBrand")}>Abnormal car</Text>

                </View>

                
                 
            </View>

           
          
            
        </View> */}
        </View>
       
      
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'85%',
   
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
    },
 
    inner:{
  
      
        backgroundColor:'#ffffff',
    alignItems:'center',
       height:150,
        borderRadius:10,
        margin:4,
        padding:5,
        
    },
    subHeader:{
      color: 'black',
      marginTop: 30,
      fontWeight: 'bold',
      fontSize: 17,
  
    },
    header:{
      marginTop: 30,
      flexDirection: 'row',
      paddingHorizontal: 20,
    },

})