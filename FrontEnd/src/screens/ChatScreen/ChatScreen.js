import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatScreen = () => {
  return (
    <SafeAreaView className="items-center">
      <Image
        className="w-full mt-28  h-80"
        source={require("../../assets/ChatBot.png")}
      />
      <Text className="text-2xl font-bold mt-14 text-[#1D3D78]">
        Hi, i'm Javis 👋
      </Text>
      <Text className="text-2xl font-bold text-[#1D3D78]">
        How can i help you
      </Text>
      <TouchableOpacity className="mt-10 px-40 py-4 rounded-full  bg-[#1D3D78]">
        <Text className="text-white text-xl">Start here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
