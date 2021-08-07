import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { speechBubble } from "../../assets/speech-bubble.png";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const matches = [
  { id: 0, name: "Janice" },
  { id: 1, name: "Elizabeth" },
  { id: 2, name: "Tracey" },
  { id: 3, name: "Charli" },
  { id: 4, name: "Emma" },
  { id: 5, name: "Sophie" },
  { id: 6, name: "Chloe" },
  { id: 7, name: "Beth" },
  { id: 8, name: "Britney" },
  { id: 9, name: "Catherine" },
  { id: 10, name: "Janet" },
];
const ContentView = styled.View`
  height: 100;
  overflow: hidden;
  margin-left: 10px;
`;
const Separator = styled.View`
  height: 1;
  width: 100%;
  background-color: #ced0ce;
`;

const MatchFeed = (props) => {
  return (
    <View>
      <FlatList
        data={matches}
        keyExtractor={({ id }) => id.toString()}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <ContentView>
            <Text>{item.name}</Text>
          </ContentView>
        )}
      />
    </View>
  );
};

export default function Matches() {
  return (
    <View>
      <MatchFeed></MatchFeed>
    </View>
  );
}
