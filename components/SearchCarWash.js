import React from 'react';
import { View,
          Text, 
          SafeAreaView, 
          StyleSheet, 
          FlatList, 
          Dimensions, 
          StatusBar,
          Image, 
          TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import services from '../consts/services';
import COLORS from '../consts/colors';

const width = Dimensions.get("screen").width/2-13


export default function  SearchCarWash({ navigation }) {

    const Card = ({service}) =>{
       return (<TouchableOpacity onPress={() => navigation.navigate("DateSetter") }>
              <View style={styles.card}>
                <View style={{height: 100, alignItems: 'center'}}>
               <Image style={{flex: 1,resizeMode: 'contain'}} source={service.img}/>
              </View>
         </View>
       </TouchableOpacity>
    
         );
    };
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}} style={styles.container}>
            <StatusBar backgroundColor={COLORS.tial}/>
            <View style={styles.header}>
                <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: COLORS.tial, marginTop: 13, marginLeft: 10}}/>
                <View style={{marginRight: 50}}>
                    <Text style={{fontSize: 33, fontWeight: "bold", color: COLORS.tial}}>Service Package</Text>
                    <Text style={{fontSize: 17, fontWeight: "bold", color: COLORS.tial}}>Select the type of service you want</Text>
                </View>
            </View>
          <FlatList 
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
           numColumns={2}
           data={services}
           renderItem={(item) => <Card service={item}/>}
        />
        </SafeAreaView>

    );
};

const styles = StyleSheet.create ({
    header: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    card:{
        height:200,
        backgroundColor: COLORS.white,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        marginTop: 15,
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
})

