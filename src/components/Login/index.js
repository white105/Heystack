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
import axios from "axios";

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
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  forgot: {
    textAlign: "right",
    color: "black",
    paddingRight: 10,
  },
});

export default function Login({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const sendLoginInfo = () => {
    console.log("username", username);
    console.log("password", password);

    axios({
      method: "post",
      url: "http://localhost:3000/login",
      data: {
        username: username,
        password: password,
      },
    });

    navigation.navigate("Main");
  };

  return (
    <View>
      <SafeAreaView>
        <Text style={styles.titleText}>
          {"\n"}
          {"\n"}
          {"Login"}
          {"\n"}
          {"\n"}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(username) => setUsername(username)}
        />
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
        />
      </SafeAreaView>
      <TouchableOpacity
        style={styles.loginScreenButton}
        onPress={sendLoginInfo}
        underlayColor="#fff"
      >
        <Text style={styles.loginText}>Enter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.signup}>Not a member? Sign up here today!</Text>
      </TouchableOpacity>
    </View>
  );
}
