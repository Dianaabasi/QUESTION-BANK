import { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const navigation = useNavigation();
  const { colors } = useTheme();

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email address"
      )
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum"),
  });
  const signIn = () => {
    navigation.navigate("Tab");
    ToastAndroid.show("Login successful", ToastAndroid.SHORT);
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
    <View>
      <Formik
        validationSchema={SignInSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          navigation.navigate("Tab");
          ToastAndroid.show("Login successful", ToastAndroid.SHORT);
          console.log(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
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
                  name="email"
                  style={{ color: colors.text }}
                  placeholderTextColor={colors.text}
                  className="ml-2 text-lg flex-1 font-[SemiBold] "
                  placeholder="Email"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                {errors.email && touched.email && (
                  <Text className="text-red-500 font-[Medium]">
                    {errors.email}
                  </Text>
                )}
              </View>
              <View className="flex-row border-b-2 py-2 my-5 border-gray-500">
                <MaterialCommunityIcons
                  name="lock-outline"
                  color={colors.text}
                  size={25}
                />
                <TextInput
                  name="password"
                  style={{ color: colors.text }}
                  placeholderTextColor={colors.text}
                  className="ml-2 text-lg flex-1 font-[SemiBold]"
                  placeholder="Password"
                  secureTextEntry={!open}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <Text className="text-red-500 font-[Medium]">
                    {errors.password}
                  </Text>
                )}
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
                  <Text
                    style={{ color: colors.text }}
                    className="font-[Medium]"
                  >
                    Remember me
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => forgetPassword()}
                  className="text-sm text-[#1D3D78] hover:text-[#F2F2F2]"
                >
                  <Text
                    style={{ color: colors.text }}
                    className="font-[Medium]"
                  >
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                disabled={!isValid}
                onPress={handleSubmit}
                className={`bg-[#1D3D78] my-14 rounded-3xl py-3 items-center ${
                  !isValid ? "opacity-50" : ""
                }`}
              >
                <Text className="text-lg text-white font-[Medium]">
                  Sign in
                </Text>
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
                  <MaterialCommunityIcons
                    name="apple"
                    color="black"
                    size={25}
                  />
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
      </Formik>
    </View>
  );
};

export default SignIn;
