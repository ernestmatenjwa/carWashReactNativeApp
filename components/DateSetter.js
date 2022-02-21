import React,{useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button,Platform,Pressable,TouchableOpacity } from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
//import { event } from 'react-native-reanimated';



function DateSetter({navigation}) {
  const [mode,setMode] = useState('date');
  const [show,setShow] = useState(false);
  const [text,setText] = useState('Empty');

  const [date, setDate] = useState(new Date());
 

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDay() + (tempDate.getMonth() +1) + '/'+ tempDate.getFullYear();
    let fTime = 'Hours' + tempDate.getHours()+' | Minutes' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime)
    
    console.log(fDate + '(' + fTime +')')
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
      <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: COLORS.tial, marginTop: 9, marginLeft: 10}}/>
       <View style={{marginLeft: 35}}>
         <Text style={{fontSize: 30, fontWeight: "bold", color: COLORS.tial}}>Date & Time</Text>
         <Text style={{fontSize: 14, marginTop: 25, fontWeight: "bold", color: COLORS.tial}}>Select time and date</Text>
       </View>
      </View>

        <View>
        
      <View  style={{width:"90%", alignItems:'center',padding:50, borderColor:COLORS.tial, borderWidth:2, margin:25}}>
        <Text style={{fontWeight:'bold',fontSize:20}}>{text}</Text>
    
      </View>
      
      <View style={{margin:20, flexDirection:'row',justifyContent:'space-around'}}>

     
      <TouchableOpacity
      style={{width:100,height:70,backgroundColor:COLORS.tial, borderRadius:20,
        alignItems:'center',justifyContent:'center'}}
           onPress={showDatepicker}
            >
              <Text style={{color:'white', fontSize:20,fontWeight:"500"}}>Select date</Text> 

            </TouchableOpacity>


            <TouchableOpacity
        
        style={{width:100,height:70,backgroundColor:COLORS.tial, borderRadius:20,
          alignItems:'center',justifyContent:'center'}}

            onPress={showTimepicker}
            >

<Text  style={{color:'white', fontSize:20,fontWeight:"500"}}>Select time </Text> 
            </TouchableOpacity>


      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          display="spinner"
          themeVariant="dark" 
        />
      )}
    </View>



      
      
       <View style={{ alignItems: 'center', flex: 1,marginTop:0,marginLeft:50}}>
       
      <Pressable style={style.bookbtn}
      onPress={() => {
        navigation.navigate("CheckoutScreen");
      }}>
        <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>Proceed</Text>
      </Pressable>
      </View> 
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header:{
    marginTop: 30,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  bookbtn:{
    width: 170,
    height: 50,
    backgroundColor: COLORS.tial,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 100,
    marginBottom: 50,
    marginTop:50
  },

  

});


export default DateSetter;