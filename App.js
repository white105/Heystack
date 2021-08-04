import React from "react";
import MainApp from "./src/Main";
import Login from "./src/components/Login";
import SignUp from "./src/components/SignUp";
import Main from "./src/Main";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {(props) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main">
          {(props) => <Main {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
