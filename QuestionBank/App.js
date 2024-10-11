import { useEffect, useState } from "react";
import StackNavigation from "./src/navigations/StackNavigation";
import SplashScreen from "./src/screens/SplashScreen/Splash";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [isSplashScreen, setSplashScreen] = useState(true);

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        setSplashScreen(false);
      }, 3000);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <>{isSplashScreen ? <SplashScreen /> : <StackNavigation />}</>;
}
