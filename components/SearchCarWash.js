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




export default function  SearchCarWash({ navigation }) {

    const Card = ({service}) =>{
       return (<TouchableOpacity onPress={() => navigation.navigate("DateSetter") }>
              <View style={styles.card}>
                <View style={{height: 100, width: 100, alignItems: 'center'}}>
               <Image style={{flex: 1,resizeMode: 'contain', borderRadius: 13}} source={service.img}/>
                </View>
                <View style={{alignItems: 'flex-end', marginRight: 100, marginTop: -90}}>
                <Text style={{fontWeight: 'bold', fontSize: 17, color: COLORS.paile}}>
                {service.name}
                </Text>
                <Text style={styles.price}>
                R{service.price}
               </Text>
                </View>
                <View style={{alignItems: 'flex-end', marginRight: 100, marginTop: 10}}>
                  <Text style={{fontWeight: 'bold', fontSize: 14, color: COLORS.lightGray}}>
                  {service.time}
                  </Text>
                </View>
                <View style={{alignItems: 'flex-end', marginRight: 2.5, marginTop: 5}}>
                  <Text style={{fontWeight: 'bold', fontSize: 14, color: COLORS.black}}>
                  {service.describetion}
                  </Text>
                </View>
                <View style={{alignItems: 'flex-end', marginBottom: 50}}>
                
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
          marginTop: 11,
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
    card:{
        height:130,
        backgroundColor: COLORS.white,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
        marginTop: 15,
        flex: 1,
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
      }
    
})

