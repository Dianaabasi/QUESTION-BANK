import React, { useState, useEffect } from "react";
import axios from "axios";
import { FlatList, Text, Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useTheme } from "@react-navigation/native";
import { utmeSubjects } from "../../data/subject"; // Add this lin

const CBT = () => {
  const { colors } = useTheme();
  const nav = useNavigation();
  const [cbtData, setCBTData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCBT();
  }, []);

  const fetchCBT = async () => {
    try {
      const response = await axios.get(
        "https://questions.aloc.com.ng/api/v2/q?subject=chemistry&year=2010&type=utme",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            AccessToken: "ALOC-befe5c1bab347b4b9ed0",
          },
        }
      );
      console.log(response);
      console.log("this is the data response", response.data.data);
      console.log("This the cbt", cbtData);
    } catch (err) {
      setError(err.message);
      console.log(err);
      console.log(err.message);
    }
  };

  const renderCBT = ({ item, index }) => (
    <View className="bg-slate-800 my-3 mx-3">
      <Text className="font-[SemiBold] text-2xl mt-5">Questio</Text>
      <Text className="font-[Medium] text-base my-8">
        {item?.question || "No question available"}
      </Text>
    </View>
  );

  return (
    <View className="flex-1">
      <View className="bg-[#1D3D78] pt-14 px-5">
        <View className="flex-row justify-between items-center">
          <Image
            className="w-8  h-5"
            style={{ resizeMode: "contain" }}
            source={require("../../assets/leftArrow.png")}
          />
          <View className="flex-row items-center gap-1">
            <Text className="font-[Medium] text-base text-white">
              Time Left:
            </Text>
            <Text className="font-[Medium] text-2xl text-white">02:17:39</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => nav.navigate("Calculator")}
          className="items-end my-5"
        >
          <Image
            className="w-8  h-8"
            style={{ resizeMode: "contain" }}
            source={require("../../assets/calculator.png")}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        //contentContainerStyle={{ paddingTop: 40 }}
        data={cbtData}
        renderItem={renderCBT}
        keyExtractor={(item) => item.id}
      />
      <Text>Hoskjcfj</Text>
    </View>
  );
};

export default CBT;
