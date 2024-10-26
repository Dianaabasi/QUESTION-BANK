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
      <View className="flex-row mt-20 gap-x-1 items-center justify-center">
        <Text className="text-3xl font-[Bold] text-[#1D3D78]">
          Hi, i'm Javis
        </Text>
        <Animatable.Text
          animation="tada"
          iterationCount={"infinite"}
          duration={2500}
          className="text-3xl font-[Bold] text-[#1D3D78]"
        >
          👋
        </Animatable.Text>
      </View>

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
