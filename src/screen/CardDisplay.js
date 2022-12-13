import { View, Text } from "react-native";
import React, { useEffect } from "react";

const CardDisplay = () => {
  const getuserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const mydata = await response.json();
      console.log(mydata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getuserData();
  }, []);

  return (
    <View>
      <Text>CardDisplay</Text>
    </View>
  );
};

export default CardDisplay;
