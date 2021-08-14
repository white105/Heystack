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
import Profile from "../Profile";

const styles = StyleSheet.create({
  chatContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flex: 1,
  },
  profile: {
    flex: 1,
  },
  chat: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    flex: 2,
  },
  messageInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
  },
  firstPersonMessage: {
    padding: 10,
    margin: 2,
    backgroundColor: "#0583f8",
    color: "white",
    fontFamily: "Helvetica",
    fontSize: 20,
    textAlign: "right",
    borderRadius: 20,
    overflow: "hidden",
  },
  secondPersonMessage: {
    padding: 5,
    margin: 2,
    backgroundColor: "blue",
    color: "white",
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
  const [messages, setMessages] = useState(["hello"]);
  const [messageText, onChangeMessageText] = React.useState(null);

  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  const sendMessage = () => {
    setMessages([...messages, messageText]);
    onChangeMessageText("");
  };

  return (
    <View style={styles.chatContainer}>
      <View style={styles.profile}>
        <Profile></Profile>
      </View>

      <View style={styles.chat}>
        <View style={styles.messageContainer}>
          {messages.map((message, idx) => {
            return (
              <Text style={styles.firstPersonMessage} key={idx}>
                {message}
              </Text>
            );
          })}
        </View>

        <TextInput
          style={styles.messageInput}
          placeholder="send a message.."
          onChangeText={onChangeMessageText}
          value={messageText}
          onSubmitEditing={sendMessage}
        ></TextInput>
      </View>
    </View>
  );
}
