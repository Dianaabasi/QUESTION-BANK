import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const ResetPassword = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate("StartTrial");
  };
  const goSuccess = () => {
    navigation.navigate("StartTrial");
  };
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="py-8">
        <TouchableOpacity onPress={goBack} className="px-6">
          <MaterialCommunityIcons name="chevron-left" color="#000" size={35} />
        </TouchableOpacity>
        <View className="mx-8 mt-24">
          <Text className="text-3xl mb-2 font-[Bold]">Reset Password</Text>
          <Text className="font-[Medium]">
            Please enter the Verfrication code sent to
            <Text className="font-[SemiBold]">debbiesakani@gmail.com</Text>
          </Text>
          <View className="flex-row border-b-2 py-2 mt-20 border-gray-500">
            <MaterialCommunityIcons
              name="email-outline"
              color="black"
              size={25}
            />
            <TextInput
              className="ml-2 text-lg flex-1 font-[SemiBold] "
              placeholder="Email"
            />
          </View>
          <View className="flex-row border-b-2 py-2 mt-10 border-gray-500">
            <MaterialCommunityIcons
              name="email-outline"
              color="black"
              size={25}
            />
            <TextInput
              className="ml-2 text-lg flex-1 font-[SemiBold] "
              placeholder="Email"
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={goSuccess}
          className="bg-[#1D3D78] mt-14 mx-5 rounded-3xl py-3 items-center"
        >
          <Text className="text-white text-lg font-[Medium]">Reset</Text>
        </TouchableOpacity>
      </View>
      <Image
        className="w-[160%] h-96 bottom-0 top-[770px] left-[-240] absolute object-cover"
        source={require("../../assets/curve.png")}
      />
    </SafeAreaView>
  );
};

export default ResetPassword;
