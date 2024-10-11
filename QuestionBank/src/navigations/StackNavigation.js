import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./BottomTabNavigation";
import {
  Onboarding,
  SignUp,
  ChatScreen,
  StartTrail,
  Payment,
  PaymentCard,
  Chats,
  ForgetPassword,
  PasswordVer,
  ResetPassword,
  Success,
  Subject,
  CBT,
  Calculator,
  LeaderBoard,
  UTMEChallenge,
} from "../components/Import";
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
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
        <Stack.Screen name="Tab" component={BottomTabNavigation} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ChatBot" component={ChatScreen} />
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="PasswordVer" component={PasswordVer} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Subject" component={Subject} />
        <Stack.Screen name="CBT" component={CBT} />
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
        <Stack.Screen name="UTMEChallenge" component={UTMEChallenge} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
