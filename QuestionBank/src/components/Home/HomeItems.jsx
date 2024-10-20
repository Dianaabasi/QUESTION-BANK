import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
} from "react-native";
import img_icon from "../../assets/CBT.png";
import img_icon_1 from "../../assets/UTME.png";
import img_icon_2 from "../../assets/leaderboard.png";
import img_icon_3 from "../../assets/CARRER.png";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const HomeItems = () => {
  const width = Dimensions.get("screen").width;
  const navigation = useNavigation();
  const { colors } = useTheme();

  const handleSubjects = () => {
    navigation.navigate("UTMESubject");
  };
  const handleChallenge = () => {
    //navigation.navigate("Subject");
  };
  const handleBoard = () => {
    // navigation.navigate("Subject");
  };
  const handleCareer = () => {
    //navigation.navigate("Subject");
  };
  const items = [
    { id: 1, icon: img_icon, title: "CBT Pratices", action: handleSubjects },
    {
      id: 2,
      icon: img_icon_1,
      title: "UTME Challenge",
      action: handleChallenge,
    },
    { id: 3, icon: img_icon_2, title: "Leaderboard", action: handleBoard },
    {
      id: 4,
      icon: img_icon_3,
      title: "Career / Institution",
      action: handleCareer,
    },
  ];
  const renderItem = ({ item, index }) => {
    return (
      <Animatable.View
        animation="fadeInUp"
        duration={1000}
        easing="ease"
        delay={index * 80}
        style={[styles.card, { backgroundColor: colors.background }]}
        className="flex-1 h-56 mx-3.5 my-4 rounded-2xl shadow-2xl"
      >
        <TouchableOpacity
          className="flex-1 items-center justify-evenly"
          onPress={item.action}
        >
          <Image className="w-16 h-16 mb-2" source={item.icon} />
          <Text
            style={{ color: colors.text }}
            className="font-[SemiBold] text-base"
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    );
  };

  return (
    <View className="mt-4">
      <FlatList
        data={items}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        className=""
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeItems;

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 10,
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
