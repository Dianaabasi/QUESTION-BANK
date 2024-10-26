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
import { Checkbox } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { utmeSubjects } from "../../data/subject"; // Add this lin

const UTMESubject = () => {
  const { colors } = useTheme();
  const nav = useNavigation();
  const [selectedSubjects, setSelectedSubjects] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSubjectsArray, setSelectedSubjectsArray] = useState([]);

  const handleSubjectSelect = (subjectId) => {
    setSelectedSubjects((prev) => ({
      ...prev,
      [subjectId]: !prev[subjectId],
    }));
    // Update selectedSubjectsArray
    const newSelectedSubjectsArray = Object.values(selectedSubjects).reduce(
      (acc, isSelected, index) => {
        acc.push({ id: index, name: utmeSubjects[index]?.name || "" });
        return acc;
      },
      []
    );

    console.log("Updated selectedSubjects:", selectedSubjects);
    console.log("Updated selectedSubjectsArray:", newSelectedSubjectsArray);
    setSelectedSubjectsArray(newSelectedSubjectsArray);
  };
  console.log(selectedSubjects);
  console.log(selectedSubjectsArray);
  const getNumberOfSelectedSubjects =
    Object.values(selectedSubjects).filter(Boolean).length;
  console.log(getNumberOfSelectedSubjects);

  const renderCheckbox = ({ item, index }) => {
    const isSelected = selectedSubjects[item.id];
    return (
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
            name={isSelected ? "checkbox-marked" : "checkbox-blank-outline"}
            color={isSelected ? "orange" : "black"}
            size={25}
          />
          <Text style={{ color: colors.text }} className="font-[Medium]">
            {item.name}
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    );
  };

  const handleConfirmSelection = () => {
    if (getNumberOfSelectedSubjects !== 4) {
      setModalVisible(true);
    } else {
      nav.navigate("CBT");
    }
  };
  const hideModal = () => {
    setModalVisible(false);
  };
  return (
    <View className="flex-1">
      <FlatList
        //contentContainerStyle={{ paddingTop: 40 }}
        data={utmeSubjects}
        renderItem={renderCheckbox}
        keyExtractor={(item) => item.id}
      />
      <View className="mx-9 my-4">
        <TouchableOpacity
          onPress={handleConfirmSelection}
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
              You selected {getNumberOfSelectedSubjects} subjects, please Select
              exactly 4 subjects
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
