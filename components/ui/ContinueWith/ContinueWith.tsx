import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import SocialMediaPlatform from "@/components/ui/SocialMediaPlatform/SocialMediaPlatform";
import { ThemedText } from "@/components/ui/ThemedText/ThemedText";
import { router } from "expo-router";

interface ContinueWithProps {
  title: string;
  subTitle: string;
  signOrLog: string;
  link: string;
}
export const ContinueWith: React.FC<ContinueWithProps> = ({
  title,
  subTitle,
  signOrLog,
  link,
}) => {
  const handelSocialMediaPress = () => {
    Alert.alert("This Feature is coming soon....");
  };
  return (
    <View style={styles.container}>
      <View style={styles.linesWithText}>
        <View style={styles.lineLeft} />
        <ThemedText lightColor={Colors.light.gray} style={styles.continueTitle}>
          {title}
        </ThemedText>
        <View style={styles.lineRight} />
      </View>
      <View style={styles.socialMedia}>
        <SocialMediaPlatform
          onPress={handelSocialMediaPress}
          icon={<AntDesign name="google" size={28} color="black" />}
        />
        <SocialMediaPlatform
          onPress={handelSocialMediaPress}
          icon={<AntDesign name="apple1" size={28} color="black" />}
        />
        <SocialMediaPlatform
          onPress={handelSocialMediaPress}
          icon={<Ionicons name="logo-facebook" size={28} color="black" />}
        />
      </View>
      <View style={styles.notHaveAccount}>
        <ThemedText lightColor={Colors.light.gray}>
          {subTitle + "? "}
        </ThemedText>
        <Pressable
          onPress={() => {
            router.push(link);
          }}
        >
          <ThemedText style={styles.signOrLog}>{signOrLog}</ThemedText>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  linesWithText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  lineLeft: {
    height: 2,
    width: 90,
    backgroundColor: Colors.light.lines,
  },
  continueTitle: {
    paddingHorizontal: 20,
  },
  lineRight: {
    height: 2,
    width: 90,
    backgroundColor: Colors.light.lines,
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
  signOrLog: {
    fontWeight: "bold",
  },
});
