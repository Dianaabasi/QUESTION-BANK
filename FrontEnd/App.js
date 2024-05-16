import { useEffect, useState } from "react";
import AppNavigation from "./src/navigations/AppNavigation";
import Splash from "./src/screens/SplashScreen/Splash";

export default function App() {
  const [isSplashScreen, setSplashScreen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
  })
  return (
    <>
      {isSplashScreen? <Splash/> : <AppNavigation/> }
    </>
  )
}