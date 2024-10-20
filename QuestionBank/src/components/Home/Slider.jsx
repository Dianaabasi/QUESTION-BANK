import {
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "@react-navigation/native";

const Slider = () => {
  const width = Dimensions.get("screen").width;
  const { colors } = useTheme();

  const data = [
    {
      id: 1,
      title: "Welcome to Question Bank!",
      txt: "",
      image: require("../../assets/home_img.png"),
    },
    {
      id: 2,
      title: "You are gonna get the best",
      image: require("../../assets/onboarding_1.png"),
    },
    {
      id: 3,
      title: "Yeah its time to get started",
      image: require("../../assets/onboarding_2.png"),
      special: true,
    },
    {
      id: 4,
      title: "Yeah its time to get started",
      image: require("../../assets/home_img.png"),
      special: true,
    },
    {
      id: 5,
      title: "Yeah its time to get started",
      image: require("../../assets/home_img.png"),
      special: true,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View className="flex-row items-center p-2 mx-4 rounded-3xl bg-[#7197AB]">
        <View className="justify-center p-4">
          <Text className="mb-6 text-xl w-[150] font-[SemiBold]">
            Fugiat laboris consequat ullamco quis
          </Text>
          <TouchableOpacity className="flex-row w-24 h-6 items-center justify-center bg-white rounded-md">
            <MaterialCommunityIcons name="crown" color="#E36414" size={15} />
            <Text className="font-[Medium]">Premium</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image className="w-52 h-52 object-contain" source={item.image} />
        </View>
      </View>
    );
  };
  return (
    <View className="my-5">
      <View className="items-center flex-row gap-5 mx-0.5 my-6">
        <Image
          style={{ backgroundColor: "#7197AB" }}
          className="w-10 h-10 rounded-full p-2 bg-slate-400"
          source={require("../../assets/user.png")}
        />
        <Text
          style={{ color: colors.text }}
          className="text-2xl font-[SemiBold]"
        >
          Hello, Daniella
        </Text>
      </View>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        pagingEnabled={true}
        scrollAnimationDuration={4000}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Slider;
