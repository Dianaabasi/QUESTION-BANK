import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "../screens/OnboardingScreen/OnboardingScreen";
import SignUp from "../screens/SignUpScreen/SignUpScreen";
import TabNavigation from "./TabNavigation";
import ChatScreen from "../screens/ChatScreen/ChatScreen";
import StartTrail from "../screens/OnboardingScreen/StartTrial";
import Payment from "../screens/Payments/Payment";
import PaymentCard from "../screens/Payments/PaymentCard";
import Chats from "../screens/ChatScreen/Chats";

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
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="PaymentCard" component={PaymentCard} />
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ChatBot" component={ChatScreen} />
        <Stack.Screen name="Chats" component={Chats} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
