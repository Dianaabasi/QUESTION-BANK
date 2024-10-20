import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { rMS, rS, rV } from "../../Responsive/responsive";
import { useNavigation, useTheme } from "@react-navigation/native";

const StartTrail = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const handleBtn = () => {
    navigation.navigate("SignUp");
  };

  const handleCard = () => {
    navigation.navigate("Payment");
  };

  return (
    <View className=" items-center flex-1 justify-center">
      <Image
        source={require("../../assets/logo_3.png")}
        style={[styles.logo, { width: rS(200), height: rV(100) }]}
      />
      <View style={styles.textContainer}>
        <Text
          className="font-[Bold] text-center text-[#1D3D78]"
          style={styles.title}
        >
          Try Premium free for
        </Text>
        <Text className="font-[Bold]" style={styles.daysText}>
          7 Days!
        </Text>
        <Text
          style={styles.description}
          className="text-center font-[Medium] text-[#1D3D78]"
        >
          Elevate your learning experience with our Premium package. You get all
          the tools necessary to excel in your academic pursuits.
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleCard}
        style={[styles.card, { backgroundColor: colors.background }]}
      >
        <View className="flex-row items-center">
          <MaterialCommunityIcons name="crown" color="#E36414" size={25} />
          <Text className="font-[Medium]" style={styles.cardText}>
            Premium
          </Text>
        </View>
        <Text style={styles.cardDescription} className="font-[Medium]">
          Unlock access to get unlimited experience Unlimited past question
          practice, CBT, Access to Leaderboard/challenges, bot and lots more!!!
        </Text>
        <Text className="font-[SemiBold]" style={styles.cardPrice}>
          ₦1000
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-[#1D3D78] items-center justify-center rounded-3xl"
        style={styles.button}
        onPress={handleBtn}
      >
        <Text className="font-[SemiBold] uppercase text-base text-white">
          Start Trial
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: rMS(20),
  },
  textContainer: {
    marginTop: rMS(20),
  },
  title: {
    fontSize: rMS(33),
  },
  daysText: {
    textAlign: "center",
    fontSize: rMS(33),
    color: "#1D3D78",
    marginBottom: rMS(30),
  },
  description: {
    fontSize: rMS(18),
    lineHeight: 28,
    marginHorizontal: rMS(14),
    marginBottom: rMS(30),
  },
  card: {
    borderRadius: 15,
    padding: rMS(24),
    flexDirection: "column",
    height: rV(170),
    gap: 10,
    marginTop: 30,
    marginHorizontal: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
  cardText: {
    fontSize: rMS(15),
    fontWeight: "470",
    color: "#01386F",
  },
  cardDescription: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: "470",
    color: "#1D3D78",
    marginRight: 18,
  },
  cardPrice: {
    fontSize: rMS(29),
    color: "#01386F",
  },
  button: {
    padding: rMS(13),
    marginTop: rMS(60),
    width: rS(330),
  },
});

export default StartTrail;
