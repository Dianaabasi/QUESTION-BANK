import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { FloatingLabelInput } from "react-native-floating-label-input";

const ResetPassword = () => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const [cont, setCont] = useState("");
  const [show, setShow] = useState(false);

  const Show = () => setShow(!show);

  const goBack = () => {
    //navigation.navigate("SignUp");
    navigation.goBack();
  };
  const goSuccess = () => {
    navigation.navigate("Success");
  };
  const PasswordSecure = () => {
    setOpen(!open);
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="py-8">
        <TouchableOpacity onPress={goBack} className="px-6">
          <MaterialCommunityIcons name="chevron-left" color="#000" size={35} />
        </TouchableOpacity>
        <View className="mx-8 mt-24">
          <Text className="text-3xl mb-2 font-[Bold]">Reset Password</Text>
          <Text className="font-[Medium] mb-5">
            Please enter the Verfrication code sent to
            <Text className="font-[SemiBold]">debbiesakani@gmail.com</Text>
          </Text>
          <View className="flex-row border-b-2 py-2 mt-20 border-gray-500">
            <MaterialCommunityIcons
              name="lock-outline"
              color="black"
              size={25}
            />
            <TextInput
              className="ml-2 text-lg flex-1 font-[SemiBold]"
              placeholder="Password"
              secureTextEntry={!open}
            />
            <TouchableOpacity onPress={() => PasswordSecure()}>
              <MaterialCommunityIcons
                name={!open ? "eye-off" : "eye-outline"}
                color="black"
                size={25}
              />
            </TouchableOpacity>
          </View>
          <View className="flex-row border-b-2 py-2 mt-10 border-gray-500">
            <MaterialCommunityIcons
              name="lock-outline"
              color="black"
              size={25}
            />
            <TextInput
              className="ml-2 text-lg flex-1 font-[SemiBold]"
              placeholder="Comfrim Password"
              secureTextEntry={!open}
            />
            <TouchableOpacity onPress={() => PasswordSecure()}>
              <MaterialCommunityIcons
                name={!open ? "eye-off" : "eye-outline"}
                color="black"
                size={25}
              />
            </TouchableOpacity>
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
        className="w-[160%] h-96 bottom-0 top-[780px] left-[-240] absolute object-cover"
        source={require("../../assets/curve.png")}
      />
    </SafeAreaView>
  );
};

export default ResetPassword;
