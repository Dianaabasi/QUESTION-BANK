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
  return (
    <SafeAreaView className="bg-white flex-1">
      <TouchableOpacity onPress={goBack} className="my-10">
        <MaterialCommunityIcons name="chevron-left" color="#000" size={35} />
      </TouchableOpacity>
      <View>
        <Text style={{ fontFamily: "Poppins_700Bold" }}>Forgot Password</Text>
        <Text style={{ fontFamily: "Poppins_600SemiBold" }}>
          Fill in your email and we'll send a to reset your Password
        </Text>
      </View>
      <View className="flex-row border-b-2 py-2 my-7 border-gray-500">
        <MaterialCommunityIcons name="email-outline" color="black" size={25} />
        <TextInput
          style={{ fontFamily: "Poppins_600SemiBold" }}
          className="ml-2 text-lg flex-1 "
          placeholder="Email"
        />
      </View>
      <TouchableOpacity
        onPress={goHome}
        className="bg-[#1D3D78] mt-14 rounded-3xl py-3 items-center"
      >
        <Text
          style={{ fontFamily: "Poppins_500Medium" }}
          className="text-white text-lg"
        >
          Send Code
        </Text>
      </TouchableOpacity>
      <Image
        className="w-[160%] h-96 bottom-0 top-[790px] left-[-240] absolute object-cover"
        source={require("../../assets/curve.png")}
      />
    </SafeAreaView>
  );
};

export default ResetPassword;
