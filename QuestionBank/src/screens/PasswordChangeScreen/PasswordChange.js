import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const PasswordChange = () => {
  const [open, setOpen] = useState(false);

  const navigation = useNavigation();
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
        <View className="mx-8 mt-8">
          <View className="flex-row py-2 justify-between">
            <Text className="font-[SemiBold] text-lg">Current Password</Text>
            <TouchableOpacity onPress={() => PasswordSecure()}>
              <MaterialCommunityIcons
                name={!open ? "eye-off" : "eye-outline"}
                color="black"
                size={25}
              />
            </TouchableOpacity>
          </View>
          <View className="flex-row border-b-2 py-2 mt-10 border-gray-500">
            <TextInput
              className="text-lg flex-1 font-[SemiBold]"
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
          <View className="flex-row border-b-2 py-2 mt-14 border-gray-500">
            <TextInput
              className="text-lg flex-1 font-[SemiBold]"
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
          className="bg-[#1D3D78] mt-24 mx-5 rounded-3xl py-3 items-center"
        >
          <Text className="text-white text-lg font-[Medium]">Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PasswordChange;
