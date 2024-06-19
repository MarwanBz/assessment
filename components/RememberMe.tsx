import { StyleSheet, Text, View } from "react-native";

import { Fontisto } from "@expo/vector-icons";
import React from "react";

export const RememberMe = () => {
  return (
    <View style={styles.container}>
      <Fontisto style={styles.checkbox} name="checkbox-passive" size={18} color="black" />
      <Text>Remember Me</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 160,
    flexDirection: "row",
    alignContent: "center",
  },
  checkbox: {
    marginRight: 10
  }
});
