
import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";


import car from './../assets/pictures/car.jpg';

import { ScrollView } from "react-native-gesture-handler";

export default function VihicleScreen({ navigation }) {
    return(
      
        <View style={styles.container}>
          <Text style={styles.subHeader}>Select Type Of Vehicle Brand </Text>

         
           
            

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
<Text>Car</Text>

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
<Text>Minivan</Text>

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
<Text>Bus</Text>

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
<Text>Motorcycle</Text>

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
<Text>Truck</Text>

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
<Text>Tractor</Text>



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
<Text>Abnormal car</Text>

                </View>

                
                 
            </View>

           
          
            
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
  
        //color:'#009387 ',
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

})