import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Bubble, GiftedChat } from "react-native-gifted-chat";

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  signup: {
    textAlign: "center",
    color: "#1E6738",
    paddingTop: 10,
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#1E6738",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    height: 100,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 50,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  giftedChat: {
    width: 100,
    height: 100,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "skyblue",
  },
});

export default function Chat({ navigation }) {
  const [messages, setMessages] = useState();

  function renderBubble(props) {
    return (
        <Bubble
            {...props}
            wrapperStyle={{
              left: {//Change the colour here to change the colour of the incoming message bubble
                backgroundColor: 'black',
              },
              right: {//Change the colour here to change the colour of the sender's message bubble
                backgroundColor: '#1E6738'
              }
            }}
        />
    );
  }

  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessage) => handleSend(newMessage)}
      renderBubble={renderBubble}
    />
  );
}
