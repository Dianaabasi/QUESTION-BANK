import { useState } from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [showLoginForm, setShowLoginForm] = useState(false)

  const navigation = useNavigation();
  const gohome = () => {
    navigation.navigate("Tab");
  };

  return (
    <View className="flex-1">
      <View className=" mx-20 bg-slate-100 rounded-2xl flex-row p-1 mt-20 justify-around items-center shadow-2xl">
        <TouchableOpacity
          onPress={() => setShowLoginForm(true)}
          className="bg-white p-3 px-6 rounded-xl shadow-2xl shadow-black"
        >
          <Text className="text-[#1D3D78] text-base text-center">Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowLoginForm(false)}
          className="bg-[#1D3D78] p-3 px-6 rounded-2xl shadow-2xl shadow-black"
        >
          <Text className="text-white text-base">Sign Up</Text>
        </TouchableOpacity>
      </View>
      {!showLoginForm ? (
        //signup from
        <>
          <View className=" mt-10 mx-8">
            <View className="p mb-2">
              <Text className="text-2xl font-bold">Hello there,</Text>
              <Text>Good to have you here</Text>
            </View>

            <TextInput
              className="border-b-2 font-bold text-lg p-2 mt-7  border-gray-500"
              placeholder="Student Name"
            />
            <TextInput
              className="border-b-2 font-bold text-lg p-3 mt-7 border-gray-500"
              placeholder="Email"
            />
            <TextInput
              className="border-b-2 font-bold text-lg p-3 mt-7 border-gray-500"
              placeholder="Password"
            />
            <TextInput
              className="border-b-2 font-bold text-lg p-3 mt-7 border-gray-500"
              placeholder="Confirm Password"
            />
            <TouchableOpacity
              onPress={gohome}
              className="bg-[#1D3D78] mt-16 rounded-3xl py-3 items-center"
            >
              <Text className="text-white text-lg">Sign Up</Text>
            </TouchableOpacity>
          </View>
          <Image
            className="w-[160%] h-96 top-32 left-[-240]  object-cover"
            source={require("../../assets/curve.png")}
          />
        </>
      ) : (
        //login from
        <>
          <View className=" mt-10 mx-8">
            <View className="p mb-2">
              <Text className="text-2xl font-bold">Welcome Back,</Text>
              <Text>Good to see again</Text>
            </View>

            <TextInput
              className="border-b-2 font-bold text-lg p-2 mt-7  border-gray-500"
              placeholder="Email"
            />
            <TextInput
              className="border-b-2 font-bold text-lg p-3 mt-7 border-gray-500"
              placeholder="Password"
            />

            <TouchableOpacity
              onPress={gohome}
              className="bg-[#1D3D78] mt-16 rounded-3xl py-3 items-center"
            >
              <Text className="text-white text-lg">Sign in</Text>
            </TouchableOpacity>
          </View>
          <Image
            className="w-[160%] h-96 top-72 left-[-240]  object-cover"
            source={require("../../assets/curve.png")}
          />
        </>
      )}
    </View>
  );
}

export default SignUpScreen

const styles = StyleSheet.create({})