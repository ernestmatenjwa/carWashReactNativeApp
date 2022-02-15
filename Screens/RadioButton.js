import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Image } from 'react-native';

export default function RadioButtons({ options, selectedOption, onSelect }) {

  return (
    <View>
      {options.map((item) => {
        return (
          <View key={item.key} style={styles.buttonContainer} >   
            <Image style={styles.UserImg} 
              source={item.imageURL}
            />
             <Text >{item.text}</Text>
              <TouchableOpacity
              style={styles.circle}
              onPress={() => {
                onSelect(item);
              }}>
              {selectedOption && selectedOption.key === item.key && (
                <View style={styles.checkedCircle} />
              )}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    marginLeft: 14,
    borderColor: '#064451',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedCircle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#064451',
  },
  UserImg:{
    width: 75,
    height: 75,
    borderRadius: 40,
    marginRight: 75,
  }
});
