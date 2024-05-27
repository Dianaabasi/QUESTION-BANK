import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome";

const Chats = () => {
  const [input, setInput] = useState("");
    
  const [output, setOutput] = useState('JAVIS');


  const handleSendBtn = () => {
    console.log(input)

    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer sk-proj-REzlXQqpzsxIlfwxww3xT3BlbkFJG6dCD3dO02MX2lantgMn",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  const handleTextChange = (Text) => {
    // console.log(Text)
  }
  return (
    <View className="flex-1 items-center bg-white">
      <View className="flex-1 justify-center">
        <Text>This is {output} i can help you improve your exams sorces</Text>
      </View>

      {/* input section */}
      <View className="flex-row items-center">
        <View className="flex-1 ml-3 mb-5">
          <TextInput
            onChangeText={handleTextChange}
            className="rounded-3xl p-3 mr-1 bg-[#C7C4C4]"
            placeholder="message jarvis"
          />
        </View>
        <TouchableOpacity onPress={handleSendBtn}>
          <View className="bg-[#1D3D78] p-3 rounded-full items-center mr-3 mb-5">
            <Icon name="send-o" size={30} color="#ffff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Chats