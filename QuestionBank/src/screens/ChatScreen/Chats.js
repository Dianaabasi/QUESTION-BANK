import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Chats = () => {
  const [input, setInput] = useState("");
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadMessagesFromStorage();
  }, []);

  useEffect(() => {
    saveMessagesToStorage(messages);
  }, [messages]);

  const loadMessagesFromStorage = useCallback(async () => {
    try {
      const storedMessages = await AsyncStorage.getItem("chatHistory");
      if (storedMessages !== null) {
        setMessages(JSON.parse(storedMessages));
      } else {
        const systemMessage = {
          id: Date.now(),
          type: "assistant",
          content: "Hello! Daniella Anderson, I am Javis. How may I help you?",
          timestamp: new Date().toISOString(),
        };
        setMessages([systemMessage]);
      }
    } catch (error) {
      console.error("Error loading messages:", error);
      setError("Failed to load messages. Please try again later.");
    }
  }, []);

  const saveMessagesToStorage = useCallback(async (newMessages) => {
    try {
      await AsyncStorage.setItem("chatHistory", JSON.stringify(newMessages));
    } catch (error) {
      console.error("Error saving messages:", error);
      setError("Failed to save messages. Please try again later.");
    }
  }, []);

  const handleSendBtn = useCallback(async () => {
    if (input.trim() && !isLoading) {
      setIsLoading(true);
      const newMessage = {
        id: Date.now(),
        type: "user",
        content: input,
        timestamp: new Date().toISOString(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput("");

      try {
        const response = await fetch("https://chatgpt-api8.p.rapidapi.com/", {
          method: "POST",
          headers: {
            "x-rapidapi-key":
              "c7141792c7msh1a0f00e6406a7a1p1a254fjsn66bdaf5caa22",
            "x-rapidapi-host": "chatgpt-api8.p.rapidapi.com",
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            {
              content:
                "Hello! Daniella Anderson, I am Javis. How may I help you?",
              role: "system",
            },
            {
              content: input,
              role: "user",
            },
          ]),
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${await response.text()}`);
        }

        const data = await response.json();
        console.log(data);
        const newAssistantMessage = {
          id: Date.now(),
          type: "assistant",
          content: data.text,
          timestamp: new Date().toISOString(),
        };
        setMessages((prevMessages) => [...prevMessages, newAssistantMessage]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error sending message:", error);
        setIsLoading(false);
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  }, [input, isLoading]);

  const handleTextChange = useCallback((text) => {
    setInput(text);
  }, []);

  const renderItem = useCallback(({ item }) => {
    const formattedTimestamp = new Date(item.timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    if (item.type === "user") {
      return (
        <View className="items-end my-2">
          <View className="flex-row gap-1">
            <View className="bg-[#01386F] w-[70%] p-4 rounded-3xl">
              <Text className="font-[Medium] text-white">{item.content}</Text>
              <Text className="text-xs font-[Medium] text-right text-gray-400">
                {formattedTimestamp}
              </Text>
            </View>
            <View className="w-8 h-8 items-center justify-center bg-slate-600 rounded-full">
              <Icon name="user" size={24} color="#f9f9f9" />
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View className="my-2">
          <View className="flex-row gap-x-1">
            <View className="w-8 h-8 items-center justify-center bg-slate-600 rounded-full">
              <Image
                source={require("../../assets/chatbot.png")}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                }}
              />
            </View>
            {isLoading ? (
              <View className="bg-[#C7C4C4] w-[70%] p-4 rounded-3xl">
                <ActivityIndicator size="small" color="#000" />
              </View>
            ) : (
              <View className="bg-[#C7C4C4] w-[70%] p-4 rounded-3xl">
                <Text className=" font-[Medium]">{item.content}</Text>
                <Text className="text-xs font-[Medium] text-right text-gray-400">
                  {formattedTimestamp}
                </Text>
              </View>
            )}
          </View>
        </View>
      );
    }
  }, []);

  return (
    <View className="flex-1 p-2">
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View className="flex-row items-center gap-2 p-1">
        <TextInput
          multiline
          onChangeText={handleTextChange}
          value={input}
          className="rounded-3xl p-3 pl-5 text-base font-[Medium] flex-1 bg-[#C7C4C4]"
          placeholder="Message Jarvis"
        />
        <TouchableOpacity
          className="bg-[#01386F] p-3 rounded-full"
          onPress={handleSendBtn}
        >
          <Icon name="send-o" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      {error && <Text className="text-red-500 mt-2">{error}</Text>}
    </View>
  );
};

export default Chats;
