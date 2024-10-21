import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";

const PaymentCard = () => {
  const navigation = useNavigation();
  const [check, setCheck] = useState(false);
  const [date, setDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const { colors } = useTheme();

  const goBack = () => {
    navigation.goBack();
  };
  const checkbox = () => {
    setCheck(!check);
  };

  const handleDateChange = (event, selecteDate) => {
    if (event.type === "set") {
      const currentDate = selecteDate || date;
      setDate(currentDate);
    }
    setShowPicker(false);
  };

  const formatDate = (date) => {
    if (!date) return "";

    // Get the month as a number (1-12)
    const monthNumber = date.getMonth() + 1;

    // Format the month as MM
    const monthFormatted = monthNumber.toString().padStart(2, "0");

    // Get the year as a two-digit number
    const year = date.getFullYear() % 100; // This gives us the last two digits of the year

    // Return the formatted date string
    return `${monthFormatted}/${year}`;
  };

  console.log(formatDate(date));
  return (
    <SafeAreaView className="flex-1">
      <TouchableOpacity onPress={goBack} className=" mx-7 my-8">
        <MaterialCommunityIcons name="chevron-left" color="#000" size={35} />
      </TouchableOpacity>

      <View className="mx-12 mt-2">
        <View className="mb-20">
          <Text className="text-3xl font-[Bold]">Debit/Credit</Text>
          <Text className="text-3xl font-[Bold]">Card</Text>
        </View>
        <Text className="text-base mb-1 font-[Medium]">Card Number</Text>

        <View className="w-70 flex-row items-center px-5 h-14 justify-between border rounded-lg border-gray-400">
          <TextInput
            value=""
            className="flex-1 text-xl"
            placeholder="5553-XXXX-3567-XXXX-288"
            keyboardType="number-pad"
          />
          <Image
            className="w-7 h-7"
            resizeMode="contain"
            source={require("../../assets/mastercard-symbols.png")}
          />
        </View>
        <View className="flex-row justify-between mt-6">
          <View className="">
            <Text className="text-base mb-1 font-[Medium]">Expiring Date</Text>

            <View className="w-32 h-10 px-3 flex-row justify-between items-center border rounded-lg border-gray-400">
              <TextInput
                placeholder="05 / 24"
                className="text-base flex-1 font-[Medium]"
                keyboardType="numeric"
                value={formatDate(date)}
              />
              <TouchableOpacity onPress={() => setShowPicker(true)}>
                <MaterialCommunityIcons
                  name="calendar"
                  color={colors.text}
                  size={17}
                />
              </TouchableOpacity>
              {showPicker && (
                <DateTimePicker
                  value={date || new Date()}
                  mode={"date"}
                  display={"spinner"}
                  onChange={handleDateChange}
                />
              )}
            </View>
          </View>
          <View className="">
            <Text className="text-base mb-1 font-[Medium]">CVV</Text>
            <TextInput
              value="123"
              className="w-24 px-3 font-[Medium] text-base h-10 border rounded-lg border-gray-400"
              secureTextEntry={true}
            />
          </View>
        </View>

        <View className="my-4">
          <Text className="text-base mb-1 font-[Medium]">Name</Text>
          <TextInput
            className="w-70 h-14 px-4 border border-gray-400  font-[Medium] rounded-lg"
            placeholder="Daniella Anderson"
          />
        </View>

        <TouchableOpacity
          onPress={() => checkbox()}
          className="flex-row items-center gap-0.5"
        >
          <MaterialCommunityIcons
            name={check ? "checkbox-marked" : "checkbox-blank-outline"}
            color={colors.text}
            size={20}
          />
          <Text style={{ color: colors.text }} className="font-[Medium]">
            Remember this card
          </Text>
        </TouchableOpacity>

        <View className="flex-row items-center justify-between mt-14">
          <TouchableOpacity className="flex-row items-center w-32 justify-center h-11">
            <Text
              //style={{ color: colors.text }}
              className="text-base  text-slate-500 font-[Medium]"
            >
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row bg-[#1D3D78] items-center justify-center w-32 rounded-3xl h-11">
            <Text
              //style={{ color: colors.text }}
              className="text-base text-white font-[Medium]"
            >
              Pay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentCard;
