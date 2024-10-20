import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const AddPayment = () => {
  const nav = useNavigation();
  const { colors } = useTheme();

  const handleNewCard = () => {
    nav.navigate("PaymentCard");
  };
  const handlePaypal = () => {};

  const accountItems = [
    {
      icon: "card-outline",
      text: "Add New Card",
      action: handleNewCard,
      type: "link",
    },
    {
      image: require("../../assets/paypal.png"),
      action: handlePaypal,
      type: "link",
    },
  ];
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.background }}
    >
      {accountItems.map((item, index) => (
        <Animatable.View
          key={index}
          animation="fadeInUp"
          duration={1000}
          delay={index * 80}
          style={[styles.card, { backgroundColor: colors.background }]}
          className="h-16 px-4 mx-4"
        >
          <TouchableOpacity
            onPress={item.action}
            className="flex-1 items-center justify-between flex-row"
          >
            <View className="flex-row items-center gap-x-2">
              {item.image && (
                <Image
                  source={item.image}
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                  }}
                />
              )}
              <Ionicons
                name={item.icon}
                size={24}
                color={item.iconColor || colors.text}
              />

              <Text
                className={`font-[SemiBold] text-base ${
                  item.textColor ? "text-red-500" : ""
                }`}
                style={{ color: item.textColor || colors.text }}
              >
                {item.text}
              </Text>
            </View>
            <View className="items-center justify-center">
              {item.type === "link" && (
                <MaterialIcons
                  name="chevron-right"
                  size={24}
                  color={colors.text}
                />
              )}
            </View>
          </TouchableOpacity>
        </Animatable.View>
      ))}
    </SafeAreaView>
  );
};

export default AddPayment;

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    // borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

//  <SafeAreaView
//       className="flex-1"
//       style={{ backgroundColor: colors.background }}
//     >
//       <TouchableOpacity
//         onPress={handleCard}
//         style={[styles.card, { backgroundColor: colors.background }]}
//         className="h-16 px-4 mx-4 items-center justify-between flex-row"
//       >
//         <View className="flex-row items-center gap-x-2">
//           <Ionicons
//             name={item.icon}
//             size={24}
//             color={item.iconColor || colors.text}
//           />
//           <Text
//             className={`font-[SemiBold] text-base ${
//               item.textColor ? "text-red-500" : ""
//             }`}
//             style={{ color: item.textColor || colors.text }}
//           >
//             {item.text}
//           </Text>
//         </View>
//         <MaterialIcons name="chevron-right" size={24} color={colors.text} />
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={handleCard}
//         style={[styles.card, { backgroundColor: colors.background }]}
//         className="h-16 px-4 mx-4 items-center justify-between flex-row"
//       >
//         <View className="flex-row items-center gap-x-2">
//           <Ionicons
//             name={item.icon}
//             size={24}
//             color={item.iconColor || colors.text}
//           />
//           <Text
//             className={`font-[SemiBold] text-base ${
//               item.textColor ? "text-red-500" : ""
//             }`}
//             style={{ color: item.textColor || colors.text }}
//           >
//             {item.text}
//           </Text>
//         </View>
//         <View className="items-center justify-center">
//           {item.type === "link" && (
//             <MaterialIcons name="chevron-right" size={24} color={colors.text} />
//           )}
//         </View>
//       </TouchableOpacity>
//     </SafeAreaView>
