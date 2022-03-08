import "react-native-gesture-handler"
import React from 'react';
import { Text,
  View, 
  StyleSheet,
 Dimensions,
 ImageBackground,
 FlatList,
 TouchableOpacity,
Image } from 'react-native';
import mapImage from "../../assets/pictures/map.jpg"


import COLORS from '../constants/consts/colors';

const { width, height } = Dimensions.get("screen");

export default function MapScreen({ navigation }) {
  
  return (
    <ImageBackground source={mapImage} style={{height: height}}>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

container: {
    backgroundColor: COLORS.gray,
    flex: 1,
  },

})