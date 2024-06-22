import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { Colors } from "@/constants/Colors";
import { Fontisto } from "@expo/vector-icons";
import { ThemedText } from "./ThemedText";

interface RememberMeProps {
  title: string;
  onPress?: () => void;
}

// TODO: Handel component states on the parent "lifting up states in react"
export const RememberMe: React.FC<RememberMeProps> = ({ title, onPress }) => {
  const [rememberMe, setRememberMe] = useState(true);
  const handelRememberMePress = () => {
    setRememberMe(!rememberMe)
  }
  return (
    <Pressable onPress={handelRememberMePress}>
      <View style={styles.container}>
        <Fontisto
          style={styles.checkbox}
          name={rememberMe ? "checkbox-passive" : "checkbox-active"}
          size={18}
          color={Colors.light.text}
        />
        <ThemedText lightColor={Colors.light.text}>{title}</ThemedText>
      </View>
    </Pressable>
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
    marginRight: 10,
  },
});
