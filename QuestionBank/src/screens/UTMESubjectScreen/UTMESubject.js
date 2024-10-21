import { useNavigation, useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const utmeSubjects = [
  { id: 1, name: "Arts" },
  { id: 2, name: "Commerce" },
  { id: 3, name: "Education" },
  { id: 4, name: "Engineering" },
  { id: 5, name: "Law" },
  { id: 6, name: "Agriculture" },
  { id: 7, name: "Biology" },
  { id: 8, name: "Chemistry" },
  { id: 9, name: "Computer Science" },
  { id: 10, name: "Criminology" },
  { id: 11, name: "Economics" },
  { id: 12, name: "Accounting" },
  { id: 13, name: "English literature" },
  { id: 14, name: "Civi Education" },
  { id: 15, name: "Mathematics" },
  { id: 16, name: "English language" },
];

const UTMESubject = () => {
  const { colors } = useTheme();
  const nav = useNavigation();
  const [selectedSubjects, setSelectedSubjects] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [check, setCheck] = useState(false);

  const handleSubjectSelect = (subjectId) => {
    console.log("Selected", subjectId);
  };
  const checkbox = () => {
    setCheck(!check);
  };
  const hideModal = () => {
    setModalVisible(false);
  };
  return (
    <View className="flex-1">
      <FlatList
        //contentContainerStyle={{ paddingTop: 40 }}
        data={utmeSubjects}
        renderItem={({ item, index }) => (
          <Animatable.View
            animation="fadeInUp"
            duration={1000}
            delay={index * 80}
            style={[styles.card, { backgroundColor: colors.background }]}
            className="mx-5 p-5 my-2 flex-row"
          >
            <TouchableOpacity
              className="items-center justify-center gap-2 flex-row"
              onPress={() => handleSubjectSelect(item.id)}
            >
              <MaterialCommunityIcons
                name={check ? "checkbox-marked" : "checkbox-blank-outline"}
                color={colors.text}
                size={25}
              />
              <Text style={{ color: colors.text }} className="font-[Medium]">
                {item.name}
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        )}
        keyExtractor={(item) => item.id}
      />
      <View className="mx-9 my-4">
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="bg-[#1D3D78] p-3 items-center justify-center rounded-3xl"
        >
          <Text className="font-[SemiBold] uppercase text-base text-white">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        statusBarTranslucent
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={hideModal}
      >
        <View
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          className="flex-1 justify-center items-center"
        >
          <View
            style={{ backgroundColor: colors.background }}
            className="w-[70%] rounded-2xl p-5"
          >
            <View className="items-center justify-center my-5">
              <Image
                style={{
                  width: 200,
                  height: 200,
                  resizeMode: "contain",
                }}
                source={require("../../assets/alert.png")}
              />
            </View>
            <Text
              className="font-[Medium] text-base text-center"
              style={{ color: colors.text }}
            >
              Select not more that than 4 subject.
            </Text>
            <TouchableOpacity
              onPress={hideModal}
              className="bg-[#1D3D78] my-4 p-3 mx-3 rounded-3xl"
            >
              <Text className="text-white font-[Medium] text-center">
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UTMESubject;

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
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
