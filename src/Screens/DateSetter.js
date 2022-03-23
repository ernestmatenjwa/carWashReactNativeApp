import React,{useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button,Platform,Pressable,TouchableOpacity, Alert } from 'react-native';
import COLORS from '../constants/consts/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";



function DateSetter({navigation, route}) {
  const [mode,setMode] = useState('date');
  const [show,setShow] = useState(false);
  const [text,setText] = useState('Empty');
  const {packg, carD, carOpt, global} = route?.params || {};
  const [t,setT] = useState('XX:XX');
  const [d,setD] = useState('XX-XX-XX');
  const [date, setDate] = useState(new Date());
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate()+' '+month[(tempDate.getMonth())]+' '+tempDate.getFullYear()
    let fTime = tempDate.getHours()+':' + (tempDate.getMinutes());
    setText('Date: ' + fDate + '\n Time: ' + fTime)
    setD(fDate)
    setT(fTime)
    //console.log(fDate + '(' + fTime +')')
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
    <View style={style.container}>
        <View style={style.SectionHeader}>
        </View>
        <View style={style.SectionHeader}>
        <Text style={{fontSize: 18, paddingLeft: "5%", marginTop: "3%", fontWeight: "bold", color:"white"}}>Select time and date</Text>
        </View>
        <View>
        <View style={{height: 15}}></View>
      <View  style={{width:300, height:100, alignItems:'center', alignSelf:'center', borderColor:COLORS.tial, borderWidth:2, }}>
        <Text style={{fontWeight:'bold',fontSize:20}}>{text}</Text>
      </View>
      <View style={{
     //marginTop:"0%", 
     //marginLeft:"18%",
     flexDirection: 'row', 
     width:"150%",
     marginLeft: "12%"
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
          //display="default"
          onChange={onChange}
          display="spinner"
          themeVariant="dark" 
        />
      )}
    </View>
    {(() => {
              if (text === "Empty"){
                  return (
                    <Pressable style={[style.bookbtn, {backgroundColor: "red"}]}
                     onPress={() => {
                      Alert.alert("Please choose time/Date before you submit")
                    }}>
                    <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>Submit</Text>
                    </Pressable>
                  )
              }
              return (
                <Pressable  style={[style.bookbtn, {}]}
                 onPress={() => {
                 navigation.navigate("CheckoutScreen", {packg, carD, carOpt, t, d, global});
                }}>
                <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>Submit</Text>
                </Pressable>
              );
            })()}
            
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SectionHeader: {
    backgroundColor: "#064451",
    width: "100%",
    //height: 10,
    flex: 0.3,
    marginTop: "-30%",
    flexDirection: "row",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  header:{
    //marginTop: 30,
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: "#064451",
    height: "20%",
    borderBottomEndRadius:20,
    borderBottomStartRadius:20
  },
  bookbtn:{
    width: "80%",
    height: 50,
    backgroundColor: COLORS.tial,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    borderRadius: 10,
    //marginLeft: 170,
    marginBottom: 50,
    marginTop:"40%"
  },
});


export default DateSetter;