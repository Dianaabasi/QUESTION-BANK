import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { OtpInput } from "react-native-otp-entry";

const PasswordVer = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate("SignUp");
  };
  const goRestPassword = () => {
    navigation.navigate("ResetPassword");
  };
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(60); // 60 seconds countdown
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    let id = null;
    if (otpSent && countdown > 0) {
      id = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    }
    return () => clearInterval(id);
  }, [otpSent, countdown]);

  const handleResendOtp = () => {
    console.log("Sending new OTP...");
    setOtpSent(true);
    setCountdown(12); // Reset countdown
  };

  const CountdownTimer = ({ time }) => (
    <Text className="text-gray-500 font-[Medium]">Resend in 00:{time}</Text>
  );

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="py-8">
        <TouchableOpacity onPress={goBack} className="px-6">
          <MaterialCommunityIcons name="chevron-left" color="#000" size={35} />
        </TouchableOpacity>
        <View className="mx-8 mt-24">
          <Text className="text-3xl mb-2 font-[Bold]">Verfication</Text>
          <Text className="font-[Medium]">
            Please enter the Verfrication code sent to
            <Text className="font-[SemiBold]">debbiesakani@gmail.com</Text>
          </Text>
          <View className="py-2 my-24">
            <OtpInput
              numberOfDigits={4}
              focusColor="green"
              focusStickBlinkingDuration={500}
              //onTextChange={(text) => console.log(text)}
              onFilled={(text) => console.log(`OTP is ${text}`)}
              textInputProps={{
                accessibilityLabel: "One-Time Password",
              }}
              theme={{
                containerStyle: {
                  alignItems: "center",
                  paddingHorizontal: 10,
                },
                pinCodeContainerStyle: {
                  width: 80,
                },
              }}
              // theme={{
              //   pinCodeTextStyle: styles.pinCodeText,
              //   focusStickStyle: styles.focusStick,
              //   focusedPinCodeContainerStyle: styles.activePinCodeContainer,
              // }}
            />
            <TouchableOpacity
              onPress={handleResendOtp}
              className="py-8 items-center"
            >
              <CountdownTimer time={countdown} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={goRestPassword}
          className="bg-[#1D3D78] mt-10 mx-5 rounded-3xl py-3 items-center"
        >
          <Text className="text-white text-lg font-[Medium]">Verify</Text>
        </TouchableOpacity>
      </View>
      <Image
        className="w-[160%] h-96 bottom-0 top-[770px] left-[-240] absolute object-cover"
        source={require("../../assets/curve.png")}
      />
    </SafeAreaView>
  );
};

export default PasswordVer;
