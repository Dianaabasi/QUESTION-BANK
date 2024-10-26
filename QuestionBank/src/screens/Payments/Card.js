import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import * as Animatable from "react-native-animatable";

const Card = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const tpublicKey = "pk_test_5c09eeaebfd1ad052f9f510ef61f3d12de3f7a30";
  const rpublicKey = "pk_live_93f376041125a45e638e99c310c8b13345503945";
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);

  const handlePaymentCard = () => {
    paystackWebViewRef.current.startTransaction();
  };

  return (
    <Animatable.View
      animation="fadeInUp"
      duration={1000}
      //delay={index * 80}
      style={[styles.card, { backgroundColor: colors.background }]}
      className="mb-2 p-6 rounded-xl"
    >
      <TouchableOpacity
        onPress={handlePaymentCard}
        className="flex-row justify-between"
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
      <Paystack
        paystackKey={tpublicKey}
        amount={"1000.00"}
        billingEmail="ukeme2388@gmail.com"
        activityIndicatorColor="#1D3D78"
        billingMobile="09110307749"
        billingName="Uksman Etuk"
        channels={["card"]}
        onSuccess={(tranRef) => {
          console.log(tranRef);
        }}
        onCancel={() => {
          console.log("something went wrong");
        }}
        ref={paystackWebViewRef}
      />
    </Animatable.View>
  );
};

export default Card;
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
