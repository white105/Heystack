import React from "react";
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


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  signup:{
    textAlign: "center",
    color: "#1E6738",
    paddingTop: 10
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
    height: 100
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 50
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});



export default function Chat ({ navigation }) {

    return (

      <View>
        <SafeAreaView>
          <Text style={styles.titleText}>
            {"\n"}
            {"\n"}
            {"Begin Chatting here"}
            {"\n"}
            {"\n"}
          </Text>
        </SafeAreaView>
        <TouchableOpacity
          style={styles.loginScreenButton}
          underlayColor="#fff" 
          onPress={() => navigation.navigate("ChatScreen")}
        >
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
  );
  
}