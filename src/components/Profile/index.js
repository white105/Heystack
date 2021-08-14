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
import axios from "axios";
import Carousel from "react-native-snap-carousel";

const styles = StyleSheet.create({
  profileContainer: {
    alignSelf: "stretch",
    height: 250,
    borderRadius: 5,
    display: "flex",
    flexDirection: "column-reverse",
  },

  profileName: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Helvetica",
    textAlign: "center",
    margin: 5,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default function Profile({ navigation }) {
  const [name, setName] = useState("alyssa");

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.profileName}>{name}</Text>
    </View>
  );
}
