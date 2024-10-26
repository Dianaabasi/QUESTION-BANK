import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SettingScreen, HomeScreen } from "../components/ScreenImport";
import { useTheme, useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image, Text, TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const { colors } = useTheme();
  const nav = useNavigation();
  const goBack = () => {
    nav.navigate("Tab");
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#01386e",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          padding: 8,
          height: 65,
          backgroundColor: colors.background,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <>
              <MaterialIcons name="home" size={30} color={color} />
              {focused && (
                <Text
                  className="font-[Medium]"
                  style={{
                    marginLeft: 5,
                    color: focused ? "#01386e" : "gray",
                  }}
                >
                  Home
                </Text>
              )}
            </>
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#1D3D78",
          },
          headerLeft: () => (
            <TouchableOpacity onPress={goBack} className="ml-2">
              <Image
                className="w-6 h-4"
                style={{ resizeMode: "contain" }}
                source={require("../assets/leftArrow.png")}
              />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            color: "white",
          },
          tabBarIcon: ({ focused, color, size }) => (
            <>
              <MaterialIcons name="settings" size={30} color={color} />
              {focused && (
                <Text
                  className="font-[Medium]"
                  style={{
                    marginLeft: 5,
                    color: focused ? "#01386e" : "gray",
                  }}
                >
                  Settings
                </Text>
              )}
            </>
          ),
        }}
        name="Setting"
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
