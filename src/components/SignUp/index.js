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
  login: {
    textAlign: "center",
    color: "#1E6738",
    paddingTop: 10,
  },
  signUpScreenButton: {
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
  signUpText: {
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
});

export default function SignUp({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordVerify, setPasswordVerify] = React.useState("");

  const sendSignUpInfo = () => {
    console.log("email", email);
    console.log("username", username);
    console.log("password", password);
    console.log("passwordVerify", passwordVerify);

    axios({
      method: "post",
      url: "http://localhost:3000/signup",
      data: {
        email: email,
        username: username,
        password: password,
        passwordVerify: passwordVerify,
      },
    });

    navigation.navigate("Home");
  };

  return (
    <View>
      <SafeAreaView>
        <Text style={styles.titleText}>
          {"\n"}
          {"\n"}
          {"Sign Up"}
          {"\n"}
          {"\n"}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(username) => setUsername(username)}
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Verify Password"
          onChangeText={(passwordVerify) => setPasswordVerify(passwordVerify)}
        />
      </SafeAreaView>
      <TouchableOpacity
        style={styles.signUpScreenButton}
        onPress={sendSignUpInfo}
        underlayColor="#fff"
      >
        <Text style={styles.signUpText}>Enter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.login}>Already have an account? Login here!</Text>
      </TouchableOpacity>
    </View>
  );
}
