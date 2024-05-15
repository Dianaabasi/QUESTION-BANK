import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const SignUpScreen = () => {
  return (
    <View className="flex-1">
      <View className=" mx-6 rounded-md flex-row p-4 mt-20 justify-around border">
        <TouchableOpacity className="bg-[#1D3D78]">
          <Text className="text-white">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-white">SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUpScreen

const styles = StyleSheet.create({})