import React,{useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button,Platform,Pressable } from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
//import { event } from 'react-native-reanimated';



function DateSetter({navigation}) {
  const [mode,setMode] = useState('date');
  const [show,setShow] = useState(false);
  const [text,setText] = useState('Empty');

  const [date, setDate] = useState(new Date(1598051730000));
 

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
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
          <Text>Select Date</Text>
      <View  style={{margin:20}}>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <Text>Select Time</Text>
      <View style={{margin:20}}>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
      
       <View style={{ alignItems: 'center', flex: 1}}>
        <View></View>
      <Pressable style={style.bookbtn}
      onPress={() => {
        navigation.navigate("vihicleDetail");
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

