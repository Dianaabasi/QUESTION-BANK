import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { rMS, rS, rV } from "../../Responsive/responsive";
import { useNavigation, useTheme } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const data = [
  {
    id: 1,
    title: "Welcome to Question Bank",
    desc: "Access a vast library of study materials, including past questions, notes, and study guides. Test your knowledge with JAMB quizzes and track your progress.",
    img: require("../../assets/onboarding_1.png"),
  },
  {
    id: 2,
    title: "How We Help",
    desc: "Take JAMB quizzes to test your knowledge and track your progress. Compete with other students and improve your skills. Engage with our chatbot for immediate assistance, personalized study tips, and answers to your questions.",
    img: require("../../assets/onboarding_2.png"),
  },
];

const Slides = ({ item }) => {
  return (
    <View className="items-center" style={{ width, height }}>
      <Image
        source={item.img}
        resizeMode="contain"
        className="w-full mt-24 flex-[0.6]"
      />

      <View className="items-center text-center mb-48 flex-[0.4]">
        <Text className="text-3xl text-blue-950 mb-4 font-[SemiBold]">
          {item.title}
        </Text>
        <Text className="text-lg text-center text-blue-950 mx-8 font-[Medium]">
          {item.desc}
        </Text>
      </View>
    </View>
  );
};

const OnboardingScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [contentOffsetX, setContentOffsetX] = useState(0);
  const navigation = useNavigation();
  const { colors } = useTheme();
  const handleBtnSkip = () => {
    navigation.navigate("StartTrial");
  };
  const ref = useRef(null);

  const Pagination = () => {
    return (
      <View style={{ height: height * 0.25 }} className="py-2 justify-between">
        <View className="flex-row gap-x-1 justify-center mt-10">
          {data.map((_, index) => (
            <View
              style={[
                { backgroundColor: colors.dots },
                currentSlideIndex === index && {
                  backgroundColor: "#1D3D78",
                  width: 16,
                  height: 13,
                  borderRadius: 10,
                },
              ]}
              key={index}
              className="h-3 mr-0.5 rounded-full w-3"
            />
          ))}
          <View
            style={{ backgroundColor: colors.dots }}
            className="w-3 h-3 rounded-full"
          />
        </View>
        <View className="mb-8">
          <View className="flex-row">
            <TouchableOpacity
              onPress={handleBtnSkip}
              className=" flex-1 mx-2 mr-10 p-4 items-center"
            >
              <Text className="font-[SemiBold] text-[#A8A8A8]">Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={gotToNxtSlide}
              className="flex-1 items-center p-4 bg-[#1D3D78] rounded-3xl mx-8"
            >
              <Text className="font-[Medium] text-white">Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const updateCurrentSlideIndex = (e) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    setContentOffsetX(offsetX);
    setCurrentSlideIndex(Math.round(offsetX / width));
  };

  const gotToNxtSlide = () => {
    if (currentSlideIndex === 1) {
      navigation.navigate("StartTrial");
      return;
    } else {
      const nxtSlideindex = currentSlideIndex + 1;
      const offset = nxtSlideindex * width;
      ref.current.scrollToOffset({ offset, animated: true });
      setCurrentSlideIndex(nxtSlideindex);
    }
  };

  return (
    <View>
      <FlatList
        data={data}
        ref={ref}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        bounces={true}
        keyExtractor={(item) => item.id.toString()}
        snapToAlignment="center"
        renderItem={({ item }) => <Slides item={item} />}
        contentContainerStyle={{ height: height * 0.75 }}
      />
      <Pagination />
    </View>
  );
};

export default OnboardingScreen;
