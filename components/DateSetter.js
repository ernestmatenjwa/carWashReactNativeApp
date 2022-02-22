import React,{useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button,Platform,Pressable,TouchableOpacity } from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/Ionicons';
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
      <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: COLORS.white, marginTop: 9, marginLeft: 0}}/>
       <View style={{marginLeft: 35}}>
         <Text style={{fontSize: 40, marginTop: "40%", fontWeight: "bold", alignSelf: "center", color: COLORS.white}}>Date & Time</Text>

       </View>
      </View>
      <Text style={{fontSize: 18, paddingLeft: "5%", marginTop: "3%", fontWeight: "bold", color: COLORS.tial}}>Select time and date</Text>
        <View>
        
      <View  style={{width:"90%", alignItems:'center',padding:50, borderColor:COLORS.tial, borderWidth:2, margin:25}}>
        <Text style={{fontWeight:'bold',fontSize:20}}>{text}</Text>
      </View>
      <View style={{
     //marginTop:"0%", 
     //marginLeft:"18%",
     flexDirection: 'row', 
     width:"150%",
     marginLeft: "20%"
  }}>
   <Icon
    onPress={showTimepicker}
    size={50} 
    color={"#064451"}
    name="time-outline" 
    //onPress={() => navigation.navigate('MapScreen')}  
   />
   <Text style={{marginTop:"10%", fontSize: 15, marginLeft: "-8%", fontWeight: "bold"}}>Time</Text>
     <Icon
    onPress={showDatepicker}
    size={50} 
    color={"#064451"}
    name="calendar-outline" 
    style={{marginLeft:"25%"}}
    //onPress={() => navigation.navigate('MapScreen')}  
   />
   <Text style={{marginTop:"10%", fontSize: 15, marginLeft: "-7%", fontWeight: "bold"}}>Date</Text>
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
   
      <Pressable style={style.bookbtn}
      onPress={() => {
        navigation.navigate("CheckoutScreen");
      }}>
        <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>Proceed</Text>
      </Pressable>
   
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header:{
    //marginTop: 30,
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: "#064451",
    height: "25%",
    borderBottomEndRadius:20,
    borderBottomStartRadius:20
  },
  bookbtn:{
    width: 170,
    height: 50,
    backgroundColor: COLORS.tial,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 170,
    marginBottom: 50,
    marginTop:"40%"
  },

  

});


export default DateSetter;