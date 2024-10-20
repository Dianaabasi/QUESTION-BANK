import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, useTheme } from "@react-navigation/native";

const Payment = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const goBack = () => {
    navigation.goBack();
  };
  const handlePaymentCard = () => {
    navigation.navigate("PaymentCard");
  };
  return (
    <SafeAreaView className="flex-1">
      <TouchableOpacity onPress={goBack} className="my-10">
        <MaterialCommunityIcons name="chevron-left" color="#000" size={35} />
      </TouchableOpacity>
      <View className="mt-8 ml-9">
        <Text style={{ color: colors.text }} className="text-3xl font-bold">
          Choose Payment
        </Text>
        <Text style={{ color: colors.text }} className="text-3xl font-bold">
          Method
        </Text>
      </View>
      <View className=" mt-20 mx-12">
        <TouchableOpacity
          onPress={handlePaymentCard}
          style={[styles.card, { backgroundColor: colors.background }]}
          className="mb-2 p-6 rounded-xl flex-row justify-between"
        >
          <Text style={{ color: colors.onText }} className="text-lg">
            Debit/Credit card
          </Text>
          <MaterialCommunityIcons
            name="credit-card-outline"
            color="#1D3D78"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: colors.background }]}
          className="mb-2 p-6 rounded-xl flex-row justify-between"
        >
          <Text style={{ color: colors.onText }} className="text-lg">
            Internet Banking
          </Text>
          <MaterialCommunityIcons
            name="bank-outline"
            color="#1D3D78"
            size={29}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: colors.background }]}
          className="mb-2 p-6 rounded-xl pl-1 flex-row justify-between"
        >
          <Image
            className="w-36  h-7"
            style={{ resizeMode: "contain" }}
            source={require("../../assets/paypal.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: colors.background }]}
          className="mb-2 p-6 rounded-xl items-center"
        >
          <Text
            style={{ color: colors.onText }}
            className="text-center text-lg"
          >
            + Add another option
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Payment;
const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
});
