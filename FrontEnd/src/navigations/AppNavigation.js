import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "../screens/OnboardingScreen/OnboardingScreen";
import SignUp from "../screens/SignUpScreen/SignUpScreen";
import TabNavigation from "./TabNavigation";
import ChatScreen from "../screens/ChatScreen/ChatScreen";
import StartTrail from "../screens/OnboardingScreen/StartTrial";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Onboarding"
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="StartTrial" component={StartTrail} />
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen
          options={{ headerShown: true }}
          name="ChatBot"
          component={ChatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
