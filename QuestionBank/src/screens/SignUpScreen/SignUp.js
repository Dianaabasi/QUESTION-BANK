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
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const { colors } = useTheme();

  const signUp = () => {
    //console.log("Signing up with:", studentName, email, password);
    ToastAndroid.show("Registration successful", ToastAndroid.LONG);
    navigation.navigate("Tab");
  };
  const PasswordSecure = () => {
    setOpen(!open);
  };

  const SignUpSchema = Yup.object().shape({
    studentName: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .matches(/^[A-Za-z\s]+$/, "Only letters and spaces allowed")
      .required("Student name is required"),

    email: Yup.string()
      .email("Please enter a valid email address")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email address"
      )
      .required("Email is required"),

    password: Yup.string()
      .min(8, "Password is too short - should be at least 8 chars")
      .max(20, "Password is too long - max 20 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
      )
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords don't match")
      .required("Confirm password is required"),
  });

  return (
    <View>
      <Formik
        validationSchema={SignUpSchema}
        initialValues={{
          studentName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          ToastAndroid.show("Registration successful", ToastAndroid.LONG);
          navigation.navigate("Tab");
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
                name="studentName"
                style={{ color: colors.text }}
                placeholderTextColor={colors.text}
                className="ml-2 text-lg flex-1 font-[SemiBold]"
                placeholder="Student Name"
                value={values.studentName}
                onChangeText={handleChange("studentName")}
                onBlur={handleBlur("studentName")}
              />
              {errors.studentName && touched.studentName && (
                <Text className="text-red-500 font-[Medium]">
                  {errors.studentName}
                </Text>
              )}
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
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
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
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text className="text-red-500 font-[Medium]">
                  {errors.confirmPassword}
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

            <TouchableOpacity
              onPress={handleSubmit}
              className="bg-[#1D3D78] mt-16 rounded-3xl py-3 items-center"
            >
              <Text className="text-white text-lg font-[SemiBold]">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUp;
