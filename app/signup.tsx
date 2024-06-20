import { ImageBackground, StyleSheet, Text, View } from "react-native";

import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { ContinueWith } from "@/components/ContinueWith";
import { Feather } from "@expo/vector-icons";
import { ForgetPassword } from "@/components/ForgetPassword";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RememberMe } from "@/components/RememberMe";
import TextInput from "@/components/TextInput";
import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";

const imagePath = require("@/assets/images/bg2.png");

const Signup = () => {
    const [hidePassword, setHidePassword] = useState(true);
  return (
    <View style={styles.image}>
      <ImageBackground
        style={styles.image}
        source={imagePath}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <ThemedText type="title" style={styles.title}>
            Sign Up
          </ThemedText>

          <ThemedText type="subtitle" style={styles.subtitle}>
            Hey, Enter your details to get log in to your account
          </ThemedText>
          <TextInput
            style={styles.inputContainer}
            placeholder="Enter Email"
            icon={
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color={Colors.light.gray}
              />
            }
          />
          <TextInput
            style={styles.inputContainer}
            placeholder="Phone Number"
            icon={<Feather name="phone" size={24} color={Colors.light.gray} />}
          />
          <TextInput
            icon={
              <Ionicons
                name="key-outline"
                size={24}
                color={Colors.light.gray}
              />
            }
            style={styles.outerContainer}
            placeholder="Password"
            secureTextEntry={!hidePassword}
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
            rightIcon={
              <Ionicons
                name={hidePassword ? "eye-outline" : "eye-off-outline"}
                size={24}
                color={Colors.light.gray}
              />
            }
          />
          <View style={styles.fields}>
            <RememberMe />
          </View>
          <View style={styles.loginButton}>
            <Button title="Create An Account" onPress="" />
          </View>
          <ContinueWith subtitle={"Aleady Have An Account"} signup={"Sign In"} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 90,
  },
  title: { textAlign: "center" },
  subtitle: {
    textAlign: "center",
    paddingVertical: 20,
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  loginButton: {
    marginVertical: 20,
  },
  fields: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default Signup;