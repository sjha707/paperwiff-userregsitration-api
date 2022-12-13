import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import { TextInput } from "react-native-gesture-handler";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const val = useContext(AuthContext);
  return (
    <View style={aicaas.container}>
      <View style={aicaas.warpper}>
        <Text> {val}</Text>
        <TextInput
          style={aicaas.input}
          placeholder="Enter Email"
          value={email}
          onChange={(email) => setEmail(email)}
        />
        <TextInput
          style={aicaas.input}
          placeholder="Enter Password"
          value={password}
          onChange={(password) => setPassword(password)}
          secureTextEntry
        />
        <Button title="Login" />
      </View>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text> Don't have An Account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <Text style={aicaas.link}> Registration </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const aicaas = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  warpper: {
    width: "80%",
  },
  input: {
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#bbb",
    borderRadius: 2,
    height: 50,
    paddingLeft: 10,
    fontSize: 18,
  },
  link: {
    color: "blue",
  },
});
export default LoginScreen;
