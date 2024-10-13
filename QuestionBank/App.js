import { useEffect, useState } from "react";
import StackNavigation from "./src/navigations/StackNavigation";
import SplashScreen from "./src/screens/SplashScreen/Splash";
import {
  useFonts,
  Poppins_500Medium as Medium,
  Poppins_700Bold as Bold,
  Poppins_400Regular as Regular,
  Poppins_600SemiBold as SemiBold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [isSplashScreen, setSplashScreen] = useState(true);

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
    return null;
  }

  return <>{isSplashScreen ? <SplashScreen /> : <StackNavigation />}</>;
}
