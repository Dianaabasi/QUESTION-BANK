import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SignUpScreen = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const navigation = useNavigation();
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
      <View className=" mx-20 bg-slate-200 rounded-2xl flex-row p-1 mt-20 justify-around items-center shadow-2xl">
        <TouchableOpacity
          onPress={() => setShowLoginForm(true)}
          className={`${
            showLoginForm ? "bg-[#1D3D78]" : "bg-white"
          } p-3 px-8 rounded-xl shadow-2xl shadow-black`}
        >
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className={`${
              showLoginForm ? "text-white" : "text-[#1D3D78]"
            } text-base text-center`}
          >
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowLoginForm(false)}
          className={`${
            !showLoginForm ? "bg-[#1D3D78]" : "bg-white"
          }  p-3 px-8 rounded-2xl shadow-2xl shadow-black`}
        >
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className={`${
              showLoginForm ? "text-[#1D3D78]" : "text-white"
            } text-base text-center`}
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
                style={{ fontFamily: "Poppins_700Bold" }}
                className="text-2xl"
              >
                Hello there,
              </Text>
              <Text style={{ fontFamily: "Poppins_500Medium" }}>
                Good to have you here
              </Text>
            </View>

            <View className="flex-row border-b-2 py-2 my-7 border-gray-500">
              <MaterialCommunityIcons
                name="account-outline"
                color="black"
                size={25}
              />
              <TextInput
                style={{ fontFamily: "Poppins_600SemiBold" }}
                className="ml-2 text-lg flex-1 "
                placeholder="Student Name"
              />
            </View>
            <View className="flex-row border-b-2 py-2 my-7 border-gray-500">
              <MaterialCommunityIcons
                name="email-outline"
                color="black"
                size={25}
              />
              <TextInput
                style={{ fontFamily: "Poppins_600SemiBold" }}
                className="ml-2 text-lg flex-1 "
                placeholder="Email"
              />
            </View>
            <View className="flex-row border-b-2 py-2 my-7 border-gray-500">
              <MaterialCommunityIcons
                name="lock-outline"
                color="black"
                size={25}
              />
              <TextInput
                style={{ fontFamily: "Poppins_600SemiBold" }}
                className="ml-2 text-lg flex-1 "
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
            <View className="flex-row border-b-2 py-2 my-6 border-gray-500">
              <MaterialCommunityIcons
                name="lock-outline"
                color="black"
                size={25}
              />
              <TextInput
                style={{ fontFamily: "Poppins_600SemiBold" }}
                className="ml-2 text-lg flex-1 "
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

            <TouchableOpacity
              onPress={goHome}
              className="bg-[#1D3D78] mt-16 rounded-3xl py-3 items-center"
            >
              <Text
                style={{ fontFamily: "Poppins_600SemiBold" }}
                className="text-white text-lg"
              >
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
                style={{ fontFamily: "Poppins_700Bold" }}
                className="text-2xl"
              >
                Welcome Back,
              </Text>
              <Text style={{ fontFamily: "Poppins_500Medium" }}>
                Good to see again
              </Text>
            </View>
            <View className="flex-row border-b-2 py-2 my-5 border-gray-500">
              <MaterialCommunityIcons
                name="email-outline"
                color="black"
                size={25}
              />
              <TextInput
                style={{ fontFamily: "Poppins_600SemiBold" }}
                className="ml-2 text-lg flex-1 "
                placeholder="Email"
              />
            </View>
            <View className="flex-row border-b-2 py-2 my-5 border-gray-500">
              <MaterialCommunityIcons
                name="lock-outline"
                color="black"
                size={25}
              />
              <TextInput
                style={{ fontFamily: "Poppins_600SemiBold" }}
                className="ml-2 text-lg flex-1 "
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
            <View className="flex-row mt-8 justify-between">
              <TouchableOpacity
                onPress={() => checkbox()}
                className="text-sm flex-row items-center gap-1 text-[#1D3D78] hover:text-[#F2F2F2]"
              >
                <MaterialCommunityIcons
                  name={check ? "checkbox-marked" : "checkbox-blank-outline"}
                  color="black"
                  size={25}
                />
                <Text style={{ fontFamily: "Poppins_500Medium" }}>
                  Remember me
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => forgetPassword()}
                className="text-sm text-[#1D3D78] hover:text-[#F2F2F2]"
              >
                <Text style={{ fontFamily: "Poppins_500Medium" }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={goHome}
              className="bg-[#1D3D78] mt-14 rounded-3xl py-3 items-center"
            >
              <Text
                style={{ fontFamily: "Poppins_500Medium" }}
                className="text-white text-lg"
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      <Image
        className="w-[160%] h-96 bottom-0 top-[770px] left-[-240] absolute object-cover"
        source={require("../../assets/curve.png")}
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
