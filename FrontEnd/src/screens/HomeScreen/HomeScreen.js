import {
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import img_icon from "../../assets/CBT.png";
import img_icon_1 from "../../assets/UTME.png";
import img_icon_2 from "../../assets/leaderboard.png";
import img_icon_3 from "../../assets/CARRER.png";

const items = [
  { id: 1, icon: img_icon, title: "CBT Pratices" },
  { id: 2, icon: img_icon_1, title: "UTME Challenge" },
  { id: 3, icon: img_icon_2, title: "Leaderboard" },
  { id: 4, icon: img_icon_3, title: "Career / Institution" },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const _carousel = useRef();
  const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of the current index

  const handleBot = () => {
    navigation.navigate("ChatBot");
  };

  useEffect(() => {
    if (data.length === 0) {
      // If data is empty, do not attempt to scroll
      return;
    }
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      setCurrentIndex(nextIndex); // Update the current index
      _carousel.current.scrollToIndex({ index: nextIndex, animated: true });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

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
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#7197AB",
          width: 417,
          height: 270,
        }}
        className="flex-row justify-between items-start rounded-xl mx-4 mb-0 mt-9"
      >
        <View className="mt-12 ml-7">
          <Text className="mb-6 text-xl w-[150] font-bold">
            Fugiat laboris consequat ullamco quis
          </Text>
          <TouchableOpacity className="flex-row">
            <Text className="bg-white text-center justify-items-center mt-12 rounded-2xl h-10 w-[100]">
              premium
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image className="w-60 h-60 " source={item.image} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#EBEBEB" }}>
      <View className="items-center flex-row gap-5 mx-0.5 mt-5">
        <Image
          style={{ backgroundColor: "#7197AB" }}
          className="w-10 h-10 rounded-full p-2 bg-slate-400"
          source={require("../../assets/user.png")}
        />
        <Text className="text-2xl font-bold">Hello, Daniella</Text>
      </View>
      <View style={{ height: 360 }}>
        <FlatList
          ref={_carousel}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View className="flex-1 justify-">
        <FlatList
          data={items}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          className="mx-4"
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity className="flex-1 justify-between bg-white p-12 m-2 items-center rounded-2xl shadow-2xl ">
                <Image className="w-16 h-16 mb-2" source={item.icon} />
                <Text className="mt-1 mb-0 font-semibold">{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <TouchableOpacity
        style={{ backgroundColor: "#1D3D78", position: "absolute", right: 26 }}
        className="items-center justify-center rounded-2xl p-8 w-10 h-10 bottom-1"
        onPress={handleBot}
      >
        <Image
          className="w-10 h-10 "
          source={require("../../assets/chatbot.png")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
