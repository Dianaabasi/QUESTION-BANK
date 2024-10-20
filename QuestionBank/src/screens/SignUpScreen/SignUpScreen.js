import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SignUpScreen = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const navigation = useNavigation();
  const { colors } = useTheme();

  const goHome = () => {
    navigation.navigate("Tab");
  };
  const PasswordSecure = () => {
    setOpen(!open);
  };
  const checkbox = () => {
    setCheck(!check);
  };
  const forgetPassword = () => {
    navigation.navigate("ForgetPassword");
  };
  return (
    <View className="flex-1">
      <View
        style={{ backgroundColor: colors.box }}
        className=" mx-16 rounded-2xl flex-row p-1 px-3 mt-20 justify-between items-center shadow-2xl"
      >
        <TouchableOpacity
          onPress={() => setShowLoginForm(true)}
          style={{
            backgroundColor: showLoginForm ? "#1D3D78" : colors.background,
          }}
          className="p-3 px-8 rounded-xl shadow-2xl"
        >
          <Text
            style={{
              color: !showLoginForm ? "#1D3D78" : "#FFFFFD",
            }}
            className="text-base text-center font-[SemiBold]"
          >
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowLoginForm(false)}
          style={{
            backgroundColor: showLoginForm ? colors.background : "#1D3D78",
          }}
          className="p-3 px-8 rounded-2xl shadow-2xl"
        >
          <Text
            className={`${
              showLoginForm ? "text-[#1D3D78]" : "text-white"
            } text-base text-center font-[SemiBold]`}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      {!showLoginForm ? (
        //signup from
        <>
          <View className=" mt-10 mx-8">
            <View className="mb-2">
              <Text
                style={{ color: colors.text }}
                className="text-3xl font-[Bold]"
              >
                Hello there,
              </Text>
              <Text
                style={{ color: colors.text }}
                className="font-[Medium] text-base"
              >
                Good to have you here
              </Text>
            </View>

            <View className="flex-row border-b-2 py-2 my-7 border-gray-500">
              <MaterialCommunityIcons
                name="account-outline"
                color={colors.text}
                size={25}
              />
              <TextInput
                style={{ color: colors.text }}
                placeholderTextColor={colors.text}
                className="ml-2 text-lg flex-1 font-[SemiBold]"
                placeholder="Student Name"
              />
            </View>
            <View className="flex-row border-b-2 py-2 my-7 border-gray-500">
              <MaterialCommunityIcons
                name="email-outline"
                color={colors.text}
                size={25}
              />
              <TextInput
                style={{ color: colors.text }}
                placeholderTextColor={colors.text}
                className="ml-2 text-lg flex-1 font-[SemiBold]"
                placeholder="Email"
              />
            </View>
            <View className="flex-row border-b-2 py-2 my-7 border-gray-500">
              <MaterialCommunityIcons
                name="lock-outline"
                color={colors.text}
                size={25}
              />
              <TextInput
                style={{ color: colors.text }}
                className="ml-2 text-lg flex-1 font-[SemiBold]"
                placeholder="Password"
                placeholderTextColor={colors.text}
                secureTextEntry={!open}
              />
              <TouchableOpacity onPress={() => PasswordSecure()}>
                <MaterialCommunityIcons
                  name={!open ? "eye-off" : "eye-outline"}
                  color={colors.text}
                  size={25}
                />
              </TouchableOpacity>
            </View>
            <View className="flex-row border-b-2 py-2 my-6 border-gray-500">
              <MaterialCommunityIcons
                name="lock-outline"
                color={colors.text}
                size={25}
              />
              <TextInput
                style={{ color: colors.text }}
                placeholderTextColor={colors.text}
                className="ml-2 text-lg flex-1 font-[SemiBold]"
                placeholder="Comfrim Password"
                secureTextEntry={!open}
              />
              <TouchableOpacity onPress={() => PasswordSecure()}>
                <MaterialCommunityIcons
                  name={!open ? "eye-off" : "eye-outline"}
                  color={colors.text}
                  size={25}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={goHome}
              className="bg-[#1D3D78] mt-16 rounded-3xl py-3 items-center"
            >
              <Text className="text-white text-lg font-[SemiBold]">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        //login from
        <>
          <View className=" mt-10 mx-8">
            <View className="p mb-2">
              <Text
                style={{ color: colors.text }}
                className="text-3xl font-[Bold]"
              >
                Welcome Back,
              </Text>
              <Text
                style={{ color: colors.text }}
                className="font-[Medium] text-base"
              >
                Good to see again
              </Text>
            </View>
            <View className="flex-row border-b-2 py-2 my-5 border-gray-500">
              <MaterialCommunityIcons
                name="email-outline"
                color={colors.text}
                size={25}
              />
              <TextInput
                style={{ color: colors.text }}
                placeholderTextColor={colors.text}
                className="ml-2 text-lg flex-1 font-[SemiBold] "
                placeholder="Email"
              />
            </View>
            <View className="flex-row border-b-2 py-2 my-5 border-gray-500">
              <MaterialCommunityIcons
                name="lock-outline"
                color={colors.text}
                size={25}
              />
              <TextInput
                style={{ color: colors.text }}
                placeholderTextColor={colors.text}
                className="ml-2 text-lg flex-1 font-[SemiBold]"
                placeholder="Password"
                secureTextEntry={!open}
              />
              <TouchableOpacity onPress={() => PasswordSecure()}>
                <MaterialCommunityIcons
                  name={!open ? "eye-off" : "eye-outline"}
                  color={colors.text}
                  size={25}
                />
              </TouchableOpacity>
            </View>
            <View className="flex-row mt-8 justify-between">
              <TouchableOpacity
                onPress={() => checkbox()}
                className="flex-row items-center gap-0.5"
              >
                <MaterialCommunityIcons
                  name={check ? "checkbox-marked" : "checkbox-blank-outline"}
                  color={colors.text}
                  size={20}
                />
                <Text style={{ color: colors.text }} className="font-[Medium]">
                  Remember me
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => forgetPassword()}
                className="text-sm text-[#1D3D78] hover:text-[#F2F2F2]"
              >
                <Text style={{ color: colors.text }} className="font-[Medium]">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={goHome}
              className="bg-[#1D3D78] my-14 rounded-3xl py-3 items-center"
            >
              <Text className="text-lg text-white font-[Medium]">Sign in</Text>
            </TouchableOpacity>

            <View className="flex-row items-center justify-center gap-2">
              <View className=" w-8 bg-gray-500 h-0.5" />
              <Text
                style={{ color: colors.text }}
                className="text-center text-base font-[Medium]"
              >
                Or continue with
              </Text>
              <View className="w-8 bg-gray-500 h-0.5" />
            </View>

            <View className="flex-row items-center justify-center mt-14 gap-x-10">
              <TouchableOpacity className="flex-row items-center gap-2 justify-center h-12">
                <Image
                  className="w-5 h-5 object-cover"
                  source={require("../../assets/google.jpeg")}
                />
                <Text
                  style={{ color: colors.text }}
                  className="text-xl font-[Medium]"
                >
                  Google
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-center h-12">
                <MaterialCommunityIcons name="apple" color="black" size={25} />
                <Text
                  style={{ color: colors.text }}
                  className="text-xl font-[Medium]"
                >
                  Apple
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
      <Image
        className="w-[160%] h-96 bottom-0 top-[780px] left-[-240] absolute object-cover"
        source={require("../../assets/curve.png")}
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
