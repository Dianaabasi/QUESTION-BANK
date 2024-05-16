import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const PaymentCard = () => {
   const navigation = useNavigation();
   const goBack = () => {
     navigation.navigate("Payment");
   };
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={goBack} className="my-10">
        <MaterialCommunityIcons name="chevron-left" color="#000" size={35} />
      </TouchableOpacity>
        <View className="mt-8 ml-9">
          <Text className="text-3xl font-bold">Debit/Credit</Text>
          <Text className="text-3xl font-bold">Card</Text>
        </View>
      <View className="mt-20 mx-12">
        <Text className="text-sm">Card Number</Text>
        <TextInput value='5553-XXXX-3567-XXXX-288' className="w-70 ml h-9 border rounded-xl" keyboardType='number-pad' />
      </View>
    </SafeAreaView>
  );
}

export default PaymentCard