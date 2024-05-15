import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

       


const Payment = () => {
  return (
    <SafeAreaView className="mt-10 bg-white flex-1">
      <View className="mb-10">
        <MaterialCommunityIcons name="chevron-left" color="#000" size={25} />
      </View>
      <View className="mt-8 ml-5">
        <Text className="text-2xl font-bold whitespace-nowrap">
          Choose Payment Method
        </Text>
      </View>
      <View className=" mt-24 mx-12">
        <TouchableOpacity className="mb-2 p-4 bg-[#F2F2F2] rounded-xl flex-row justify-between">
          <Text>Debit/Credit card</Text>
          <MaterialCommunityIcons
            name="credit-card-outline"
            color="#000"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity className="mb-2 p-4 bg-[#F2F2F2] rounded-xl flex-row justify-between">
          <Text>Internet Banking</Text>
          <MaterialCommunityIcons name="bank" color="#000" size={25} />
        </TouchableOpacity>
        <TouchableOpacity className="mb-2 p-4 bg-[#F2F2F2] rounded-xl flex-row justify-between">
          <Text>PayPAl</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mb-2 p-4 bg-[#F2F2F2] rounded-xl items-center">
          <Text className="text-center">+ Add another option</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Payment