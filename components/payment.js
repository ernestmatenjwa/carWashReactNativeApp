import * as React from 'react';
import { Text, View,StyleSheet,SafeAreaView,TextInput,Pressable,Image } from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RadioForm from 'react-native-simple-radio-button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//import bankCard from './../assets/pictures/bankCard.jpg';


export default function PaymentScreen({ navigation }) {

  var PaymentMethod = [
    {label: "Credit Card", Value: 0},
    {label: "Cash", Value: 1},
   
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
      <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: COLORS.tial, marginTop: 9, marginLeft: 10}}/>
       <View style={{marginLeft: 35}}>
         <Text style={{fontSize: 30, fontWeight: "bold", color: COLORS.tial}}>Payment Method</Text>
         <Text style={{fontSize: 14, marginTop: 25, fontWeight: "bold", color: COLORS.tial}}>Select Your Payment Method</Text>
       </View>
      </View>
      

      {/* <View  >
           <RadioForm
            onPress={(Value) => {}}
            radio_props={PaymentMethod}
            style={{flexDirection:'row',margin:20,justifyContent:"space-around"}}
            
           />
         </View> */}
<View style={{alignItems:'center'}}>
<Image  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
</View>
    
      <View>
        <View style={{paddingLeft:20,paddingRight:20}}>

        <Text style={styles.text_footer}>Card Number</Text>
        <View style={styles.action}>
            
                  <TextInput
                  placeholder="1234 4587 789 1234"
                  styles={styles.textInput}
                  autoCapitalize="none"
                  />
                
             </View>

             <Text style={styles.text_footer}>Name Of Card</Text>
        <View style={styles.action} >
            
                  <TextInput
                  placeholder="Not Smith"
                  styles={styles.textInput}
                  autoCapitalize="none"
                  />
                
             </View>
             <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
               <View>
                 <Text style={styles.text_footer}>Expiration Date</Text>
                 
                 <TextInput
                  placeholder="11 22"
                  autoCapitalize="none"
                  style={{ borderBottomWidth: 1,
                    borderBottomColor: '#f2f2f2',}}
                  />
               </View>


               <View >
                 <Text style={styles.text_footer}>Security Code</Text>
                 <TextInput
                  placeholder="*****"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  style={{ borderBottomWidth: 1,
                    borderBottomColor: '#f2f2f2',}}
                  />
               </View>
             </View>

        </View>


          
            <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between' }}>
                     
        <View>

        <View style={{paddingLeft:20}}>
              <Text>Subtotal</Text>
              <Text style={{fontSize:20,fontWeight:'bold'}}>R120.00</Text>
              </View>
            </View>

        <Pressable style={styles.bookbtn}
      onPress={() => {
        navigation.navigate("ConfirmScreen");
      }}>
        <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>Pay</Text>
      </Pressable>
    
      </View> 
          


             </View>
      </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  header:{
    marginTop: 30,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  
},
textInput: {
  flex: 1,
  //marginTop: Platform.OS === 'ios' ? 0 : -12,
  paddingLeft: 10,
  color: '#05375a',
  
},
text_footer: {
  color: '#05375a',
  fontSize: 15,
  marginTop:25
},
bookbtn:{
  width: 120,
  height: 50,
  backgroundColor: COLORS.tial,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  marginRight:10,
  alignSelf:'flex-end',
  

 
},
image:{
width:'90%',
resizeMode:'contain',



  

}
  

});