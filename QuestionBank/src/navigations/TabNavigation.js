import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import SettingScreen from "../screens/SettingScreen/SettingScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#01386e"
      barStyle={{ backgroundColor: "transparent" }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-settings-outline"
              color={color}
              size={26}
            />
          ),
        }}
        name="Settings"
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
