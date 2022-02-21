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
import Iconicons from "react-native-vector-icons/Ionicons"
import { LinearGradient } from 'expo-linear-gradient';
import mapImage from "../assets/pictures/map.jpg"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import COLORS from '../consts/colors';

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