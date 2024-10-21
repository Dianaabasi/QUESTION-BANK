import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const AccountSetting = () => {
  const nav = useNavigation();
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const goPasswordChange = () => {
    nav.navigate("PasswordChange");
  };
  const goPayment = () => {
    nav.navigate("AddPayment");
  };
  const handleDelete = () => {};
  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };
  const accountItems = [
    {
      icon: "lock-closed-outline",
      text: "Change Password",
      action: goPasswordChange,
      type: "link",
    },
    {
      icon: "card-outline",
      text: "Payment",
      action: goPayment,
      type: "link",
    },
    {
      icon: "log-out-outline",
      text: "Delete Account",
      action: showModal,
      textColor: "red",
      iconColor: "red",
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
                  width: 100,
                  height: 100,
                  resizeMode: "contain",
                }}
                source={require("../../assets/close.png")}
              />
            </View>
            <Text
              className="font-[Medium] text-base text-center"
              style={{ color: colors.text }}
            >
              Are you sure you want to Delete your account?
            </Text>
            <TouchableOpacity
              onPress={hideModal}
              className="bg-slate-400 my-4 p-3 mx-5 rounded-3xl"
            >
              <Text className="text-white font-[Medium] text-center">
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-red-500 mb-4 p-3 mx-5 rounded-3xl"
              onPress={handleDelete}
            >
              <Text className="text-white font-[Medium] text-center">
                Delete Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default AccountSetting;

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
