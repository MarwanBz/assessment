import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Controller, useForm } from "react-hook-form";

import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { ContinueWith } from "@/components/ContinueWith";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RememberMe } from "@/components/RememberMe";
import TextInput from "@/components/TextInput";
import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  phone: z.string().regex(phoneRegex,"Please enter a valid phone number"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});const imagePath = require("@/assets/images/bg2.png");

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true);
  
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      phone: "",
    },
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data: any) => {
    Alert.alert("Successful", JSON.stringify(data));
  };
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

          <ThemedText
            lightColor={Colors.light.gray}
            type="subtitle"
            style={styles.subtitle}
          >
            Hey, Enter your details to get log in to your account
          </ThemedText>
          <TextInput
            control={control}
            name={"email"}
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
            control={control}
            name={"phone"}
            placeholder="Phone Number"
            icon={<Feather name="phone" size={24} color={Colors.light.gray} />}
          />
          <TextInput
            control={control}
            name="password"
            icon={
              <Ionicons
                name="key-outline"
                size={24}
                color={Colors.light.gray}
              />
            }
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
            <RememberMe title="Remember me" />
          </View>
          <View style={styles.loginButton}>
            <Button
              title="Create An Account"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
          <ContinueWith
            title={"OR CONTINUE WITH"}
            subTitle="Already Have An Account"
            signOrLog={"Sign In"}
            link={"/login"}
          />
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
    paddingBottom: 20,
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