import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./BottomTabNavigation";
import { useTheme, useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  Onboarding,
  SignUp,
  ChatScreen,
  StartTrail,
  AddPayment,
  Payment,
  PaymentCard,
  Chats,
  ForgetPassword,
  PasswordVer,
  ResetPassword,
  Success,
  UTMESubject,
  CBT,
  Calculator,
  LeaderBoard,
  UTMEChallenge,
  AccountSetting,
  PasswordChange,
  Notification,
} from "../components/ScreenImport";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const nav = useNavigation();
  const goBack = () => {
    nav.goBack();
  };
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "fade",
        gestureEnabled: true,
        gestureDirection: "horizontal",
        headerShown: false,
        animationEnabled: true,
        headerMode: "screen",
        headerTintColor: "white",
      }}
      initialRouteName=""
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="StartTrial" component={StartTrail} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="PaymentCard" component={PaymentCard} />
      <Stack.Screen name="Tab" component={BottomTabNavigation} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ChatBot" component={ChatScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#1D3D78",
          },
          headerLeft: () => (
            <View className="flex-row items-center">
              <TouchableOpacity onPress={goBack} className="mr-2">
                <MaterialIcons name="chevron-left" size={30} color="white" />
              </TouchableOpacity>
              <View className="mr-2 bg-slate-600 rounded-full p-2">
                <Image
                  source={require("../../assets/chatbot.png")}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                  }}
                />
              </View>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <MaterialIcons name="more-vert" size={30} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: "Jarvis",
        }}
        name="Chats"
        component={Chats}
      />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="PasswordVer" component={PasswordVer} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#1D3D78",
          },
          headerTitle: "Select Subject",
        }}
        name="UTMESubject"
        component={UTMESubject}
      />
      <Stack.Screen name="CBT" component={CBT} />
      <Stack.Screen name="Calculator" component={Calculator} />
      <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
      <Stack.Screen name="UTMEChallenge" component={UTMEChallenge} />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#1D3D78",
          },
          headerTitle: "Account Setting",
        }}
        name="AccountSetting"
        component={AccountSetting}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#1D3D78",
          },
          headerTitle: "Change Password",
        }}
        name="PasswordChange"
        component={PasswordChange}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#1D3D78",
          },
          headerTitle: "Payment",
        }}
        name="AddPayment"
        component={AddPayment}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#1D3D78",
          },
          headerTitle: "Notification",
        }}
        name="Notification"
        component={Notification}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
