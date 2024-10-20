import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

const Success = () => {
  const navigation = useNavigation();

  const goSignIn = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="py-8 items-center">
        <LottieView
          autoPlay
          //ref={animation}
          style={{
            width: "80%",
            height: "50%",
            alignItems: "center",
          }}
          source={require("../../constant/Animation1.json")}
        />
        <View className="mx-8 items-center mt-14">
          <Text className="text-3xl mb-2 text-[#1D3D78] font-[Bold]">
            Password Reset
          </Text>
          <Text className="text-[#1D3D78] text-base font-[Medium]">
            You have a new password now kindly sign in
          </Text>
        </View>
        <TouchableOpacity
          onPress={goSignIn}
          className="bg-[#1D3D78] mt-14 mx-5 w-[85%] rounded-3xl py-3 items-center"
        >
          <Text className="text-white text-lg font-[Medium]">Sign In</Text>
        </TouchableOpacity>
      </View>
      <Image
        className="w-[160%] h-96 bottom-0 top-[780px] left-[-240] absolute object-cover"
        source={require("../../assets/curve.png")}
      />
    </SafeAreaView>
  );
};

export default Success;
