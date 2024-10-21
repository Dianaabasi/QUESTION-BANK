import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigation, useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

const SettingScreen = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();
  const nav = useNavigation();

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const darkModeValue = await AsyncStorage.getItem("isDarkTheme");
      if (darkModeValue !== null) {
        setIsDarkTheme(JSON.parse(darkModeValue));
      }

      // const notificationsValue = await AsyncStorage.getItem(
      //   "notificationsEnabled"
      // );
      // if (notificationsValue !== null) {
      //   setNotificationsEnabled(JSON.parse(notificationsValue));
      // }
    } catch (error) {
      console.error("Error loading settings:", error);
    }
  };

  const saveSetting = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving ${key}:`, error);
    }
  };

  const toggleDarkMode = async () => {
    const newValue = !isDarkTheme;
    setIsDarkTheme(newValue);
    await saveSetting("isDarkTheme", newValue);
  };

  const goToAccount = () => {
    nav.navigate("AccountSetting");
  };
  const goToNotification = () => {
    nav.navigate("Notification");
  };
  const goTosignOut = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };
  const signOut = () => {
    nav.navigate("SignUp");
  };
  const goToManageAddress = () => {};
  const goToHelpCenter = () => {};

  const profileItems = [
    {
      icon: "person-outline",
      text: "Account",
      action: goToAccount,
      type: "link",
    },
    {
      icon: "notifications-outline",
      text: "Notification",
      action: goToNotification,
      type: "link",
    },
    {
      icon: "moon-outline",
      text: "Dark Mode",
      action: toggleDarkMode,
      type: "toggle",
    },
    {
      icon: "help-circle-outline",
      text: "Help & Support",
      action: goToHelpCenter,
    },
    {
      icon: "log-out-outline",
      text: "LogOut",
      action: goTosignOut,
      textColor: "red",
      iconColor: "red",
    },
  ];

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.background }}
    >
      {profileItems.map((item, index) => (
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
              {item.type === "toggle" && (
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={!isDarkTheme ? "#171717" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleDarkMode}
                  value={isDarkTheme}
                  accessibilityLabel="Toggle Dark Mode"
                />
              )}
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
              Are you sure you want to log out your account?
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
              onPress={signOut}
            >
              <Text className="text-white font-[Medium] text-center">
                Log Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default SettingScreen;

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
