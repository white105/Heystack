import React from "react";
import { View, SafeAreaView, StyleSheet, TextInput, Text } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default function Login() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
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
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </SafeAreaView>
    </View>
  );
}
