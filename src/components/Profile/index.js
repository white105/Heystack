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
  profileContainer: {
    width: 500,
    height: 250,
    backgroundColor: "red",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default function Profile({ navigation }) {
  return (
    <View style={styles.profileContainer}>
      <Text>Profile</Text>
    </View>
  );
}
