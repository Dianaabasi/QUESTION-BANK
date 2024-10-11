import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatScreen = () => {

  const navigation = useNavigation()
  const handleStartBtn = () => {
    navigation.navigate("Chats");
  };
  return (
    <SafeAreaView className="items-center">
      <Image
        className="w-full mt-48  h-80"
        source={require("../../assets/ChatBot.png")}
      />
      <Text className="text-3xl font-bold mt-20 text-[#1D3D78]">
        Hi, i'm Javis 👋
      </Text>
      <Text className="text-3xl font-bold text-[#1D3D78]">
        How can i help you
      </Text>
      <TouchableOpacity onPress={handleStartBtn} className="mt-16 px-40 py-4 rounded-full  bg-[#1D3D78]">
        <Text className="text-white text-xl">Start here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
