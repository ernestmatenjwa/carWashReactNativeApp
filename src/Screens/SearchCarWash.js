import React from 'react';
import { View,
          Text, 
          SafeAreaView, 
          StyleSheet, 
          FlatList, 
          Dimensions, 
          StatusBar,
          Image,
          ScrollView, 
          TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import services from '../consts/services';
import COLORS from '../consts/colors';



const { width, height } = Dimensions.get("screen");




export default function  SearchCarWash({ navigation }) {

    const Card = ({service}) =>{
       return (<TouchableOpacity onPress={() => navigation.navigate("DateSetter") }>
            <View style={styles.userInfo}>
            <View style={styles.UserImgWrapper}>
              <Image style={styles.UserImg} source={service.img} />
            </View>
            <View style={styles.TextSection}>
            <View style={styles.UserInfoText}>
            <Text style={styles.UserName}>{service.name}</Text>
            <Text style={styles.price}>R{service.price}</Text>
            </View>
            <Text style={styles.MessageText}>{service.time}</Text>
            <View>
            <Text style={{width: width/1.8,fontWeight: 'bold', fontSize: 12, color: COLORS.black}}>{service.describetion}</Text>
            </View>
           
            </View>
            </View>
       </TouchableOpacity>
    
         );
    };
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}} style={styles.container}>
            <StatusBar backgroundColor={COLORS.tial}/>
            <View style={styles.header}>
            <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: COLORS.tial, marginTop: 10, marginLeft: 10}}/>
            <View style={{marginLeft: 35}}>
                <Text style={{fontSize: 30, fontWeight: "bold", color: COLORS.tial}}>Service Packages</Text>
            </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{height: 120, paddingHorizontal: 20}}>
            <Text style={styles.subHeader}>Select Type of vehicle</Text>
            </View>
            </ScrollView>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            </View>
         <FlatList
        
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 20,
          paddingBottom: 20,
          paddingBottom: 50,

        }}
        f
        data={services}
        renderItem={({item}) => {
          return <Card service={item} />;
        }}
      />
        </SafeAreaView>

    );
};

const styles = StyleSheet.create ({
    header: {
        marginTop: 30,
        flexDirection: 'row',
        marginBottom: 20,
    },
    container: {
        backgroundColor: COLORS.gray,
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: '#F5F5F5',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        marginTop: 35,
        borderRadius: 10,
      },
      title: {
        fontSize: 32,
      },
      subHeader:{
        color: COLORS.tial,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 15,
    
      },
      price:{
        fontSize: 15,
        marginRight: -85,
        marginTop: -23,
        fontWeight: 'bold',
        marginRight: 100
      },
      userInfo: {
        width: width/1.03,
        height: 130,
        backgroundColor: COLORS.white,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 2,
        marginBottom: 5,
        marginTop: 15,
        borderRadius: 13,
        padding: 2,
        
      },
      UserImg: {
        width: width/2.7,
        height: height/8,
        borderRadius: 13,
        marginBottom: 15,
      },
      TextSection: {
        flexDirection: "column",
        justifyContent: "center",
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
      },
      UserInfoText: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
      },
      UserName: {
        fontSize: 14,
        fontWeight: "bold",
        //fontFamily: "Lato-Regular",
        marginTop: -23,
        color: COLORS.paile,
      },
      MessageText:{
        fontWeight: 'bold',
        fontSize: 14, 
        color: COLORS.lightGray
      },

      UserImgWrapper: {
        paddingTop: 10,
        paddingBottom: 15,
      },
})

