import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import SocialMediaPlatform from "./SocialMediaPlatform";
import { router } from "expo-router";

export const ContinueWith = () => {
  return (
    <View style={styles.container}>
      <View style={styles.linesWithText}>
        <View style={styles.lineLeft} />
        <Text style={styles.continueTitle}>OR CONTINUE WITH</Text>
        <View style={styles.lineRight} />
      </View>
      <View style={styles.socialMedia}>
        <SocialMediaPlatform
          onPress={() => {
            Alert.alert("This Feature is coming soon....");
          }}
          icon={<AntDesign name="google" size={28} color="black" />}
        />
        <SocialMediaPlatform
          icon={<AntDesign name="apple1" size={28} color="black" />}
        />
        <SocialMediaPlatform
          icon={<Ionicons name="logo-facebook" size={28} color="black" />}
        />
      </View>
      <View style={styles.notHaveAccount}>
        <Text style={styles.text}>Do't Have an account? </Text>
        <Pressable onPress={() => {
          router.push("/signup")
        }} >
          <Text style={styles.signin}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  linesWithText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  lineLeft: {
    height: 2,
    width: 90,
    backgroundColor: Colors.light.gray,
  },
  continueTitle: {
    paddingHorizontal: 20,
  },
  lineRight: {
    height: 2,
    width: 90,
    backgroundColor: Colors.light.gray,
  },
  socialMedia: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  notHaveAccount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: Colors.light.gray,
  },
  text: {
    color: Colors.light.gray,
  },
  signin: {
    fontWeight: 'bold'
  }
});
