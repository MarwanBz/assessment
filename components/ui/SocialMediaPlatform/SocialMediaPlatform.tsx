import { Alert, Pressable, StyleSheet, View } from "react-native";

import { Colors } from "@/constants/Colors";
import React from "react";

interface Props {
  onPress: () => void;
  color?: string;
  icon: React.ReactNode;
}

const SocialMediaPlatform: React.FC<Props> = ({ icon, color,onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.cycle}>{icon}</View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 40,
  },
  cycle: {
    marginHorizontal: 10,
    height: 60,
    width: 60,
    borderRadius: 70,
    backgroundColor: Colors.light.tint,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SocialMediaPlatform;
