import { useEffect, useState, useMemo } from "react";
import StackNavigation from "./src/navigations/StackNavigation";
import SplashScreen from "./src/screens/SplashScreen/Splash";
import { ThemeContext } from "./src/context/ThemeContext";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Poppins_500Medium as Medium,
  Poppins_700Bold as Bold,
  Poppins_400Regular as Regular,
  Poppins_600SemiBold as SemiBold,
} from "@expo-google-fonts/poppins";
import DarkTheme from "./src/theme/DarkTheme";
import LightTheme from "./src/theme/LightTheme";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function App() {
  const [isSplashScreen, setSplashScreen] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const themeContext = useMemo(() => {
    return { isDarkTheme, setIsDarkTheme };
  });
  let [fontsLoaded] = useFonts({
    Medium,
    Bold,
    Regular,
    SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        setSplashScreen(false);
      }, 3000);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View className="bg-[#1D3D78] flex-1 justify-center items-center">
        <Text className="text-center">Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : LightTheme}>
      <ThemeContext.Provider value={themeContext}>
        <StatusBar style="auto" />
        {isSplashScreen ? <SplashScreen /> : <StackNavigation />}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
}
