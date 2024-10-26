import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, useTheme } from "@react-navigation/native";
import Card from "./Card";
import Bank from "./Bank";
import Opay from "./Opay";

const Payment = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView className="flex-1">
      <TouchableOpacity onPress={goBack} className="mx-5 my-10">
        <MaterialCommunityIcons name="chevron-left" color="#000" size={35} />
      </TouchableOpacity>
      <View className="mt-8 ml-9">
        <Text style={{ color: colors.text }} className="text-3xl font-bold">
          Choose a Payment
        </Text>
        <Text style={{ color: colors.text }} className="text-3xl font-bold">
          Method
        </Text>
      </View>

      {/* options */}
      <View className=" mt-20 mx-12">
        <Card />
        <Bank />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
