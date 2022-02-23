import React from "react";
import { View,
  Text,
  StyleSheet,
  Image, 
  Dimensions, 
  FlatList, 
  TouchableOpacity,
  Button } from "react-native";
import COLORS from '../consts/colors';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Iconicons from "react-native-vector-icons/Ionicons"
import Modal from "react-native-modal";

import carImg from "../assets/pictures/serImgs/bmw.jpg"
import taxImg from "../assets/pictures/serImgs/taxi.jpg"
import busImg from "../assets/pictures/serImgs/bus2.jpg"
import truckImg from "../assets/pictures/serImgs/truck.jpg"
import bikeImg from "../assets/pictures/serImgs/motob1.jpg"
import abnImg from "../assets/pictures/serImgs/abnomal.jpg"

const { width, height } = Dimensions.get("screen");

const car = [
  {
    id: '1',
    package: 'Full Body wash',
    userImg: require('../assets/pictures/serImgs/carInt.jpg'),
    tmstimated: '10min-15min',
    price: '105',
    Description: 'Exterior wash, Interior clean up and vaccum',
  },
  {
    id: '2',
    package: 'Half Body wash',
    userImg: require('../assets/pictures/serImgs/bmw.jpg'),
    tmstimated: '5min-10min',
    price: '79',
    Description: 'Exterior wash only!',
  },]
  const Motorcycle = [
    {
      id: '1',
      package: 'Full Body wash',
      userImg: require('../assets/pictures/serImgs/motob1.jpg'),
      tmstimated: '30min-40min',
      price: '77',
      Description: 'Exterior wash, Interior clean up and vaccum',
    },
  ]
  const taxi = [
    {
      id: '1',
      package: 'Full Body wash',
      userImg: require('../assets/pictures/serImgs/taxi.jpg'),
      tmstimated: '15min-20min',
      price: '145',
      Description: 'Exterior wash, Interior clean up and vaccum',
    },
    {
      id: '2',
      package: 'Half Body wash',
      userImg: require('../assets/pictures/serImgs/van.jpg'),
      tmstimated: '10min-15min',
      price: '115',
      Description: 'Exterior wash only!',
    },
  ]

  const bus = [
    {
      id: '1',
      package: 'Full Body wash',
      userImg: require('../assets/pictures/serImgs/bus2.jpg'),
      tmstimated: '30min-40min',
      price: '450',
      Description: 'Exterior wash, Interior clean up and vaccum',
    },
    {
      id: '2',
      package: 'Half Body wash',
      userImg: require('../assets/pictures/serImgs/bus.jpg'),
      tmstimated: '15min-30min',
      price: '340',
      Description: 'Exterior wash only!',
    },
  ]
    const truck = [
      {
        id: '1',
        package: 'Full Body wash',
        userImg: require('../assets/pictures/serImgs/truck.jpg'),
        tmstimated: '30min-40min',
        price: '250',
        Description: 'Exterior wash, Interior clean up and vaccum',
      },
      {
        id: '2',
        package: 'Half Body wash',
        userImg: require('../assets/pictures/serImgs/truck1.jpg'),
        tmstimated: '15min-30min',
        price: '205',
        Description: 'Exterior wash only!',
      },
    ]
    const Abnormal = [
      {
        id: '1',
        package: 'Full Body wash',
        userImg: require('../assets/pictures/serImgs/abnormal.jpg'),
        tmstimated: '30min-40min',
        price: '512',
        Description: 'Exterior wash, Interior clean up and vaccum',
      },
      {
        id: '2',
        package: 'Half Body wash',
        userImg: require('../assets/pictures/serImgs/abnomal.jpg'),
        tmstimated: '15min-30min',
        price: '488',
        Description: 'Exterior wash only!',
      },]

export default function VihicleScreen({ navigation, route }) {
  const [service, setService] = React.useState(0);
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setService(1)
  };
  const toggleModal1 = () => {
    setModalVisible(!isModalVisible);
    setService(2)
  };
  const toggleModal2 = () => {
    setModalVisible(!isModalVisible);
    setService(3)
  };
  const toggleModal3 = () => {
    setModalVisible(!isModalVisible);
    setService(4)
  };
  const toggleModal4 = () => {
    setModalVisible(!isModalVisible);
    setService(5)
  };
  const toggleModal5 = () => {
    setModalVisible(!isModalVisible);
    setService(6)
  };
  const onSelect = () => {
    setModalVisible(!isModalVisible);
    navigation.navigate("RegisteredCars")
  };
  return(
    <View style={styles.container}>
       <View style={{height: "10%", backgroundColor: "#064451", width: width, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
        <Iconicons name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: "white", margin: "5%"}}/>
           <Text style={{marginTop: "-15%", color: "white", fontSize:25, fontWeight:"500", alignSelf: "center"}}>Services</Text>
        </View>
    <Text style={{paddingLeft: 15, paddingTop: 5, fontSize:20, color: "#064451", fontWeight: "bold"}}>Tab car type for to select package</Text>
    <View style={{marginTop:"8%", 
                  width:'100%',
                  flexDirection:'row', 
                  flexWrap:'wrap',
                  justifyContent:'center',
                  }}>
    <TouchableOpacity
     style={[styles.inner, {}]}
     onPress={toggleModal}
     >
        <View >
           <Image 
           source={carImg}
           style={{marginTop: "2%", width:150, height:100, borderRadius: 5}}
           />
           <Text style={{alignSelf:"center", color: "#064451", fontWeight: "bold", fontSize: 18 }}>Car</Text>
        </View>
        
      </TouchableOpacity>   
      <TouchableOpacity 
      style={styles.inner}
      onPress={toggleModal1}
      >
        <View>
        <Image 
           source={busImg}
           style={{marginTop: "2%", width:150, height:100, borderRadius: 5}}
           />
           <Text style={{alignSelf:"center", color: "#064451", fontWeight: "bold", fontSize: 18 }}>Bus</Text>
        </View>
        
      </TouchableOpacity>   
      <TouchableOpacity 
      style={styles.inner}
      onPress={toggleModal2}
      >
        <View>
        <Image 
           source={bikeImg}
           style={{marginTop: "2%", width:150, height:100, borderRadius: 5}}
           />
           <Text style={{alignSelf:"center", color: "#064451", fontWeight: "bold", fontSize: 18 }}>Motorcycle</Text>
        </View>
        
      </TouchableOpacity>   
      <TouchableOpacity 
      style={styles.inner}
      onPress={toggleModal3}
      >
        <View>
        <Image 
           source={truckImg}
           style={{marginTop: "2%", width:150, height:100, borderRadius: 5}}
           />
           <Text style={{alignSelf:"center", color: "#064451", fontWeight: "bold", fontSize: 18 }}>Truck </Text>
        </View>
       
      </TouchableOpacity>   
      <TouchableOpacity 
      style={styles.inner}
      onPress={toggleModal4}
      >
        <View>
        <Image 
           source={taxImg}
           style={{marginTop: "2%", width:150, height:100, borderRadius: 5}}
           />
           <Text style={{alignSelf:"center", color: "#064451", fontWeight: "bold", fontSize: 18 }}>Taxi</Text>
        </View>
        
      </TouchableOpacity>   
      <TouchableOpacity 
      style={styles.inner}
      onPress={toggleModal5}
      >
        <View>
        <Image 
           source={abnImg}
           style={{marginTop: "2%", width:150, height:100, borderRadius: 5}}
           />
           <Text style={{alignSelf:"center", color: "#064451", fontWeight: "bold", fontSize: 18 }}>Abnormal</Text>
        </View>
        
      </TouchableOpacity>
    </View>
    {(() => {
              if (service === 1){
                  return (
                    <View >
                    <Modal isVisible={isModalVisible}>
                      <View>
                      <View>
                      <Iconicons name={"close"} size={50} color={"red"}
                        onPress={toggleModal}
                        style={{marginLeft: "85%", marginTop: "-55%"}}
                        />
                      </View>
   
                      <Text style={{fontSize:30, fontWeight: "bold", alignSelf:"center", color: "white"}}>Vehicle Pachage</Text>
                    <FlatList
                    //style={{width: "99%"}}
                    showsVerticalScrollIndicator={false}
                   data={car}
                   keyExtractor={item=>item.id}
                   renderItem={({item}) => (
                     <TouchableOpacity onPress={onSelect}>
                       <View style={styles.userInfo}>
                       <View style={styles.UserImgWrapper}>
                           <Image style={styles.UserImg} source={item.userImg} />
                       </View>
                       <View style={styles.TextSection}>
                           <View style={styles.UserInfoText}>
                               <Text style={styles.UserName}>{item.package}</Text>
                            </View>
                         
                         <View style={{flex: 1, width: "60%"}}>
                             <Text style={{fontWeight: 'bold', fontSize: 12, color: "grey"}}>{item.Description}</Text>
                             <Text style={styles.MessageText}>{item.tmstimated}</Text>
                         </View>
                       </View>
                       </View>
                    </TouchableOpacity>
                   )}
                 />
                      </View>
                    </Modal>
                  </View>
                //     <>
                //     <Text style={{fontSize:20, fontWeight: "bold", alignSelf:"center", color: "#064451"}}>Car  packages</Text>
                //     <FlatList
                //     showsVerticalScrollIndicator={false}
                //    data={car}
                //    keyExtractor={item=>item.id}
                //    renderItem={({item}) => (
                //      <TouchableOpacity onPress={() => navigation.navigate("RegisteredCars") }>
                //        <View style={styles.userInfo}>
                //        <View style={styles.UserImgWrapper}>
                //            <Image style={styles.UserImg} source={item.userImg} />
                //        </View>
                //        <View style={styles.TextSection}>
                //            <View style={styles.UserInfoText}>
                //                <Text style={styles.UserName}>{item.package}</Text>
                //                <Text style={[styles.price, {color: "green", paddingTop: "2%"}]}>R{item.price}</Text>
                //             </View>
                         
                //          <View>
                //              <Text style={{width: width/1.8,fontWeight: 'bold', fontSize: 12, color: COLORS.black}}>{item.Description}</Text>
                //              <Text style={styles.MessageText}>{item.tmstimated}</Text>
                //          </View>
                //        </View>
                //        </View>
                //     </TouchableOpacity>
                //    )}
                //  />
                //  </>
                  )
              }
              if (service === 2){
                return (
                  <View >
                  <Modal isVisible={isModalVisible}>
                    <View>
                    <View>
                    <Iconicons name={"close"} size={50} color={"red"}
                      onPress={toggleModal}
                      style={{marginLeft: "85%", marginTop: "-55%"}}
                      />
                    </View>
 
                    <Text style={{fontSize:30, fontWeight: "bold", alignSelf:"center", color: "white"}}>Vehicle Pachage</Text>
                  <FlatList
                  //style={{width: "99%"}}
                  showsVerticalScrollIndicator={false}
                 data={bus}
                 keyExtractor={item=>item.id}
                 renderItem={({item}) => (
                   <TouchableOpacity onPress={onSelect}>
                     <View style={styles.userInfo}>
                     <View style={styles.UserImgWrapper}>
                         <Image style={styles.UserImg} source={item.userImg} />
                     </View>
                     <View style={styles.TextSection}>
                         <View style={styles.UserInfoText}>
                             <Text style={styles.UserName}>{item.package}</Text>
                          </View>
                       
                          <View style={{flex: 1, width: "60%"}}>
                             <Text style={{fontWeight: 'bold', fontSize: 12, color: "grey"}}>{item.Description}</Text>
                             <Text style={styles.MessageText}>{item.tmstimated}</Text>
                         </View>
                     </View>
                     </View>
                  </TouchableOpacity>
                 )}
               />
                    </View>
                  </Modal>
                </View>
                )
            }
            if (service === 3){
              return (
                <View >
                    <Modal isVisible={isModalVisible}>
                      <View>
                      <View>
                      <Iconicons name={"close"} size={50} color={"red"}
                        onPress={toggleModal}
                        style={{marginLeft: "85%", marginTop: "-55%"}}
                        />
                      </View>
   
                      <Text style={{fontSize:30, fontWeight: "bold", alignSelf:"center", color: "white"}}>Vehicle Pachage</Text>
                    <FlatList
                    //style={{width: "99%"}}
                    showsVerticalScrollIndicator={false}
                   data={Motorcycle}
                   keyExtractor={item=>item.id}
                   renderItem={({item}) => (
                     <TouchableOpacity onPress={onSelect}>
                       <View style={styles.userInfo}>
                       <View style={styles.UserImgWrapper}>
                           <Image style={styles.UserImg} source={item.userImg} />
                       </View>
                       <View style={styles.TextSection}>
                           <View style={styles.UserInfoText}>
                               <Text style={styles.UserName}>{item.package}</Text>
                            </View>
                         
                            <View style={{flex: 1, width: "60%"}}>
                             <Text style={{fontWeight: 'bold', fontSize: 12, color: "grey"}}>{item.Description}</Text>
                             <Text style={styles.MessageText}>{item.tmstimated}</Text>
                         </View>
                       </View>
                       </View>
                    </TouchableOpacity>
                   )}
                 />
                      </View>
                    </Modal>
                  </View>
              )
          }
          if (service === 4){
            return (
              <View >
                    <Modal isVisible={isModalVisible}>
                      <View>
                      <View>
                      <Iconicons name={"close"} size={50} color={"red"}
                        onPress={toggleModal}
                        style={{marginLeft: "85%", marginTop: "-55%"}}
                        />
                      </View>
   
                      <Text style={{fontSize:30, fontWeight: "bold", alignSelf:"center", color: "white"}}>Vehicle Pachage</Text>
                    <FlatList
                    //style={{width: "99%"}}
                    showsVerticalScrollIndicator={false}
                   data={truck}
                   keyExtractor={item=>item.id}
                   renderItem={({item}) => (
                     <TouchableOpacity onPress={onSelect}>
                       <View style={styles.userInfo}>
                       <View style={styles.UserImgWrapper}>
                           <Image style={styles.UserImg} source={item.userImg} />
                       </View>
                       <View style={styles.TextSection}>
                           <View style={styles.UserInfoText}>
                               <Text style={styles.UserName}>{item.package}</Text>
                            </View>
                            <View style={{flex: 1, width: "60%"}}>
                             <Text style={{fontWeight: 'bold', fontSize: 12, color: "grey"}}>{item.Description}</Text>
                             <Text style={styles.MessageText}>{item.tmstimated}</Text>
                         </View>
                       </View>
                       </View>
                    </TouchableOpacity>
                   )}
                 />
                      </View>
                    </Modal>
                  </View>
            )
        }
        if (service === 5){
          return (
            <View >
                    <Modal isVisible={isModalVisible}>
                      <View>
                      <View>
                      <Iconicons name={"close"} size={50} color={"red"}
                        onPress={toggleModal}
                        style={{marginLeft: "85%", marginTop: "-55%"}}
                        />
                      </View>
   
                      <Text style={{fontSize:30, fontWeight: "bold", alignSelf:"center", color: "white"}}>Vehicle Pachage</Text>
                    <FlatList
                    //style={{width: "99%"}}
                    showsVerticalScrollIndicator={false}
                   data={taxi}
                   keyExtractor={item=>item.id}
                   renderItem={({item}) => (
                     <TouchableOpacity onPress={onSelect}>
                       <View style={styles.userInfo}>
                       <View style={styles.UserImgWrapper}>
                           <Image style={styles.UserImg} source={item.userImg} />
                       </View>
                       <View style={styles.TextSection}>
                           <View style={styles.UserInfoText}>
                               <Text style={styles.UserName}>{item.package}</Text>
                            </View>
                         
                            <View style={{flex: 1, width: "60%"}}>
                             <Text style={{fontWeight: 'bold', fontSize: 12, color: "grey"}}>{item.Description}</Text>
                             <Text style={styles.MessageText}>{item.tmstimated}</Text>
                         </View>
                       </View>
                       </View>
                    </TouchableOpacity>
                   )}
                 />
                      </View>
                    </Modal>
                  </View>
          )
      }
      if (service === 6){
        return (
          <View >
          <Modal isVisible={isModalVisible}>
            <View>
            <View>
            <Iconicons name={"close"} size={50} color={"red"}
              onPress={toggleModal}
              style={{marginLeft: "85%", marginTop: "-55%"}}
              />
            </View>

            <Text style={{fontSize:30, fontWeight: "bold", alignSelf:"center", color: "white"}}>Vehicle Pachage</Text>
          <FlatList
          //style={{width: "99%"}}
          showsVerticalScrollIndicator={false}
         data={Abnormal}
         keyExtractor={item=>item.id}
         renderItem={({item}) => (
           <TouchableOpacity onPress={onSelect}>
             <View style={styles.userInfo}>
             <View style={styles.UserImgWrapper}>
                 <Image style={styles.UserImg} source={item.userImg} />
             </View>
             <View style={styles.TextSection}>
                 <View style={styles.UserInfoText}>
                     <Text style={styles.UserName}>{item.package}</Text>
                  </View>
               
                  <View style={{flex: 1, width: "60%"}}>
                             <Text style={{fontWeight: 'bold', fontSize: 12, color: "grey"}}>{item.Description}</Text>
                             <Text style={styles.MessageText}>{item.tmstimated}</Text>
                         </View>
             </View>
             </View>
          </TouchableOpacity>
         )}
       />
            </View>
          </Modal>
        </View>
        )
    }
              return (
                null
              );
            })()}
    <View>
      </View>
  </View>
    );
}
const styles = StyleSheet.create({
  container:{
      width:'100%',
      //height:'85%',
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'center',
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 20,
},
actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
container: {
    backgroundColor: COLORS.gray,
    flex: 1,
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
    //marginRight: -85,
    marginTop: -23,
    fontWeight: 'bold',
    marginRight: "50%"
  },
  userInfo: {
    width: width/1.122,
    height: 130,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    //justifyContent: "space-between",
    //marginHorizontal: 2,
    //marginBottom: 0,
    marginTop: 3,
    borderRadius: 5,
    borderColor: "green",
    borderWidth: 2,
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#064451",
  },
  MessageText:{
    fontWeight: 'bold',
    fontSize: 14, 
    color: COLORS.lightGray
  },

  UserImgWrapper: {
    paddingTop: 12,
    paddingBottom: 2,
    paddingLeft: 2,
  },
  inner:{
    backgroundColor:'#ffffff',
    alignItems:'center',
    height:"35%",
    width: "45%",
    borderRadius:10,
    margin:4,
    marginTop: "3%"
    //padding:5,
      
  },
  inner2:{
    //backgroundColor:'#064451',
//alignItems:'center',
   height:60,
    //borderRadius:10,
    margin:4,
    marginTop: 20,
    //padding:5,
    width: 340,
},
inner3:{
 // backgroundColor:'lightgrey',
 //alignItems:'center',
 height:200,
 width: 340,
  //borderRadius:10,
  margin:4,
  marginTop: 20,
  //padding:5,
  //borderLeftColor: "#064451",
  //borderLeftWidth: 15,
  //backgroundColor: "#064451"
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