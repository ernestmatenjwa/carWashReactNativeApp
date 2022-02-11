import * as React from 'react';
import { Text, View } from 'react-native';

export default function PaymentScreen({ navigation }) {
  return (
    <View>
       <Text onPress={() =>  navigation.push("ConfirmScreen")}>This is Payment screen</Text>
    </View>
  );
}