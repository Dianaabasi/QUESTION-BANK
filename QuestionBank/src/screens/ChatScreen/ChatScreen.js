import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";

const ChatScreen = () => {
  const navigation = useNavigation();
  const handleStartBtn = () => {
    navigation.navigate("Chats");
  };
  return (
    <SafeAreaView className="items-center">
      <Image
        className="w-full mt-48  h-80"
        source={require("../../assets/ChatBot.png")}
      />
      <Text className="text-3xl font-[Bold] mt-20 text-[#1D3D78]">
        Hi, i'm Javis
        <Animatable.Text animation="shake" duration={1000}>
          👋
        </Animatable.Text>
      </Text>
      <Text className="text-3xl mt-1 font-[Bold] text-[#1D3D78]">
        How can i help you?
      </Text>
      <TouchableOpacity
        onPress={handleStartBtn}
        className="mt-10 px-40 py-4 rounded-full  bg-[#1D3D78]"
      >
        <Text className="text-white font-[Medium] text-xl">Start here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
