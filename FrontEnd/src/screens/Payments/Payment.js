import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';


const Payment = () => {
 
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate("StartTrial")
  }
  const handlePaymentCard = () => {
    navigation.navigate("PaymentCard")
  }
  return (
    <SafeAreaView className="bg-white flex-1">
      <TouchableOpacity onPress={goBack} className="my-10">
        <MaterialCommunityIcons name="chevron-left" color="#000" size={35} />
      </TouchableOpacity>
      <View className="mt-8 ml-9">
        <Text className="text-3xl font-bold">Choose Payment</Text>
        <Text className="text-3xl font-bold">Method</Text>
      </View>
      <View className=" mt-20 mx-12">
        <TouchableOpacity
          onPress={handlePaymentCard}
          className="mb-2 p-6 bg-[#F2F2F2] rounded-xl flex-row justify-between"
        >
          <Text className="text-[#898989] text-lg">Debit/Credit card</Text>
          <MaterialCommunityIcons
            name="credit-card-outline"
            color="#1D3D78"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity className="mb-2 p-6 bg-[#F2F2F2] rounded-xl flex-row justify-between">
          <Text className="text-[#898989] text-lg">Internet Banking</Text>
          <MaterialCommunityIcons name="bank-outline" color="#1D3D78" size={29} />
        </TouchableOpacity>
        <TouchableOpacity className="mb-2 p-6 bg-[#F2F2F2] rounded-xl flex-row justify-between">
          <Image
            className="w-36  h-7"
            source={require("../../assets/paypal.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity className="mb-2 p-6 bg-[#F2F2F2] rounded-xl items-center">
          <Text className="text-center text-[#898989] text-lg">
            + Add another option
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Payment