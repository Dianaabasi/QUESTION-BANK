import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Slider from "../../components/Home/Slider";
import HomeItems from "../../components/Home/HomeItems";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { ScrollView } from "react-native-virtualized-view";

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleBot = () => {
    navigation.navigate("ChatBot");
  };
  return (
    <ScrollView className="flex-1">
      <Slider />
      <HomeItems />
      <View className="h-10"></View>
      <View className="right-4 -bottom-0 absolute">
        <TouchableOpacity
          style={{ backgroundColor: "#1D3D78" }}
          className="items-center justify-center rounded-2xl p-8 w-10 h-10"
          onPress={handleBot}
        >
          <Animatable.Image
            animation="tada"
            iterationCount={"infinite"}
            duration={4000}
            className="w-10 h-10 "
            source={require("../../assets/chatbot.png")}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
