import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "../screen/HomeScreen";
import LoginScreen from "../screen/LoginScreen";
import RegistrationScreen from "../screen/RegistrationScreen";
import CardDisplay from "../screen/CardDisplay";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CardDisplay" component={CardDisplay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
