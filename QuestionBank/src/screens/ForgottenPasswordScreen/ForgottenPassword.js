import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, useTheme } from "@react-navigation/native";

const ForgottenPassword = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate("SignUp");
  };
  const goPasswordVer = () => {
    navigation.navigate("PasswordVer");
  };
  const { colors } = useTheme();
  return (
    <SafeAreaView className="flex-1">
      <View className="py-8">
        <TouchableOpacity onPress={goBack} className="px-6">
          <MaterialCommunityIcons name="chevron-left" color="#000" size={35} />
        </TouchableOpacity>
        <View className="mx-8 mt-24">
          <Text className="text-3xl mb-2 font-[Bold]">Forgot Password?</Text>
          <Text className="text-base font-[Medium]">
            Don't worry! It happens, please enter the email associated with your
            account and we'll send a code to reset your Password
          </Text>
          <View className="flex-row border-b-2 py-2 my-24 border-gray-500">
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
          onPress={goPasswordVer}
          className="bg-[#1D3D78] mt-14 mx-5 rounded-3xl py-3 items-center"
        >
          <Text className="text-white text-lg font-[Medium]">Send Code</Text>
        </TouchableOpacity>
      </View>
      <Image
        className="w-[160%] h-96 bottom-0 top-[780px] left-[-240] absolute object-cover"
        source={require("../../assets/curve.png")}
      />
    </SafeAreaView>
  );
};

export default ForgottenPassword;
