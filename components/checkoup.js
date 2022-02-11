import * as React from 'react';
import { Text, View } from 'react-native';

export default function CheckoutScreen({ navigation }) {
  return (
    <View>
       <Text onPress={() =>  navigation.push("PaymentScreen")}>This is checkout screen</Text>
    </View>
  );
}