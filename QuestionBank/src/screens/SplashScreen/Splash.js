import { View, Text, Image } from "react-native";
import React from "react";

const Splash = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        className="w-full h-full object-cover"
        source={require("../../assets/QBank.jpeg")}
      />
    </View>
  );
};

export default Splash;
