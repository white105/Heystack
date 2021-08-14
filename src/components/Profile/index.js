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
import CarouselImage from "./data/carousel"

const styles = StyleSheet.create({
  profileContainer: {
    alignSelf: "stretch",
    height: 250,
    borderRadius: 5,
    display: "flex",
    flexDirection: "column-reverse",
    backgroundColor: "grey",
    paddingTop: 10
    //Unsure what this will look like with the iOS layout and the notch, play around here to get an idea of what it would look like
  },
  profileIamgeContainer: {
    alignSelf: "center",
    justifyContent: 'center',
    height: 200,
    width: 200,
    borderRadius: 5,
    display: "flex",
    flexDirection: "column-reverse",
    backgroundColor: "grey",

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
  const [name, setName] = useState("alsyssa");

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.profileName}>{name}</Text>
      <View style={styles.profileIamgeContainer}>
        <CarouselImage/>
      </View>
    </View>
  );
}
