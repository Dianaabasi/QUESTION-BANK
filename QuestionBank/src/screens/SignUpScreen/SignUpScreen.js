import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const SignUpScreen = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigation = useNavigation();
  const { colors } = useTheme();

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
      {!showLoginForm ? <SignUp /> : <SignIn />}
      <Image
        className="w-[160%] h-96 bottom-0 top-[780px] left-[-240] absolute object-cover"
        source={require("../../assets/curve.png")}
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
