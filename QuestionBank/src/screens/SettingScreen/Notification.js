import React, { useContext, useState, useEffect } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useTheme } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from "react-native-animatable";

const SettingScreen = () => {
  const { colors } = useTheme();
  const nav = useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const notificationsValue = await AsyncStorage.getItem(
        "notificationsEnabled"
      );
      if (notificationsValue !== null) {
        setNotificationsEnabled(JSON.parse(notificationsValue));
      }
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

  const toggleNotifications = async () => {
    const newValue = !notificationsEnabled;
    setNotificationsEnabled(newValue);
    await saveSetting("notificationsEnabled", newValue);

    // Simulate notification service update
    console.log(`Notifications ${newValue ? "enabled" : "disabled"}`);
  };
  const notificationItems = [
    {
      icon: "notifications-outline",
      text: "Push Notification",
      action: toggleNotifications,
      type: "toggle",
    },
    {
      icon: "notifications-outline",
      text: "Email Notification",
      action: toggleNotifications,
      type: "toggle",
    },
    {
      icon: "document-text-outline",
      text: "Weekly Newsletter",
      action: toggleNotifications,
      type: "toggle",
    },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: colors.background }}>
      {notificationItems.map((item, index) => (
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
                  thumbColor={notificationsEnabled ? "#f4f3f4" : "#171717"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleNotifications}
                  value={notificationsEnabled}
                  accessibilityLabel="Toggle Notifications"
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
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
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
