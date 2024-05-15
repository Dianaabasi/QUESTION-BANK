import { useFonts, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { rMS, rS, rV } from "../../Responsive/responsive";
import { useNavigation } from "@react-navigation/native";

const StartTrail = () => {
    const navigation = useNavigation();

   const handleBtn = () => {
     navigation.navigate("Tab");
   };
  
  const handleCard = () => {
    navigation.navigate("Payment");
  }
    let [fontsLoaded] = useFonts({
      Poppins_500Medium,
      Poppins_700Bold,
    });

    if (!fontsLoaded) {
      return null;
    }

  return (
    <View className=" items-center flex-1 justify-center bg-white">
      <Image
        source={require("../../assets/logo_3.png")}
        style={[styles.logo, { width: rS(200), height: rV(100) }]}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Try Premium free for</Text>
        <Text style={styles.daysText}>for 7 days</Text>
        <Text style={styles.description} className="text-center text-[#1D3D78]">
          Elevate your learning experience with our Premium package. Our
          platform is designed to cater to your every need, ensuring you have
          all the tools necessary to excel in your academic pursuits.
        </Text>
      </View>
      <TouchableOpacity  onPress={handleCard} style={styles.card} className="shadow-2xl">
        <View className="flex-row items-center">
          <MaterialCommunityIcons name="crown" color="#E36414" size={25} />
          <Text className="" style={styles.cardText}>Premium</Text>
        </View>
        <Text style={styles.cardDescription} className="">
          Unlock access to get unlimited experience Unlimited past question
          practice, CBT, Access to Leaderboard/challenges, bot and lots more!!!
        </Text>
        <Text style={styles.cardPrice}>₦1000</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-black"
        style={styles.button}
        onPress={handleBtn}
      >
        <Text style={styles.buttonText}>Start Trial</Text>
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
    fontFamily: "Poppins_700Bold",
    color: "#1D3D78",
    fontWeight: "bold",
    textAlign: "center",
  },
  daysText: {
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
    fontSize: rMS(33),
    color: "#1D3D78",
    marginBottom: rMS(30),
  },
  description: {
    fontSize: rMS(18),
    lineHeight: 28,
    fontFamily: "Poppins_500Medium",
    marginHorizontal: rMS(14),
    marginBottom: rMS(30),
  },
  card: {
    backgroundColor: "whitesmoke",
    borderRadius: 15,
    padding: rMS(24),
    flexDirection: "column",
    height: rV(170),
    gap: 10,
    marginTop: 30,
    marginHorizontal: 14,
  },
  cardText: {
    fontSize: rMS(15),
    fontFamily: "Poppins_500Medium",
    fontWeight: "470",
    color: "#01386F",
  },
  cardDescription: {
    fontSize: 18,
    fontFamily: "Poppins_500Medium",
    lineHeight: 27,
    fontWeight: "470",
    color: "#1D3D78",
    marginRight: 18,
  },
  cardPrice: {
    fontSize: rMS(29),
    fontFamily: "Poppins_700Bold",
    color: "#01386F",
  },
  button: {
    padding: rMS(13),
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
    marginTop: rMS(60),
    width: rS(330),
    backgroundColor: "#1D3D78",
  },
  buttonText: {
    fontSize: 19,
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
});

export default StartTrail;
