import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";
import { BASE_URL } from "../config";

const RegistrationScreen = ({ navigation }) => {
  const [fdata, setFdata] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [errormsg, setErrormsg] = useState(null);
  const register = async () => {
    if (fdata.name == "" || fdata.email == "" || fdata.password == "") {
      setErrormsg("Kindly Fill All The Fields");
      return;
    } else {
      if (fdata.password != fdata.cpassword) {
        setErrormsg("Password and Confirm Password Should Be Same");
        return;
      } else {
        // alert(fdata.name);
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fdata),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((e) => console.log(e));
      }
    }
  };
  return (
    <View style={aicaas.container}>
      <View style={aicaas.warpper}>
        {errormsg ? (
          <Text style={{ color: "red", padding: 10 }}> {errormsg}</Text>
        ) : null}
        <TextInput
          style={aicaas.input}
          placeholder="Enter Name"
          onPressIn={() => setErrormsg(null)}
          onChangeText={(text) => setFdata({ ...fdata, name: text })}
        />
        <TextInput
          style={aicaas.input}
          placeholder="Enter Email"
          onPressIn={() => setErrormsg(null)}
          onChangeText={(text) => setFdata({ ...fdata, email: text })}
        />
        <TextInput
          style={aicaas.input}
          placeholder="Enter Password"
          secureTextEntry={true}
          onPressIn={() => setErrormsg(null)}
          onChangeText={(text) => setFdata({ ...fdata, password: text })}
        />
        <TextInput
          style={aicaas.input}
          placeholder="Re-Enter Password"
          secureTextEntry={true}
          onPressIn={() => setErrormsg(null)}
          onChangeText={(text) => setFdata({ ...fdata, cpassword: text })}
        />
        <TouchableOpacity>
          <Button title="Register" onPress={register} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("CardDisplay")}>
          <Text> Already an Account </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={aicaas.link}> Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistrationScreen;

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
    borderRadius: 5,
    paddingLeft: 10,
    height: 50,
    fontSize: 18,
  },
  link: {
    color: "blue",
  },
});
