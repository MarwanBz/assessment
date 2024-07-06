import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Controller, useForm } from "react-hook-form";

import Button from "@/components/ui/Button/Button";
import { Colors } from "@/constants/Colors";
import { ContinueWith } from "@/components/ui/ContinueWith/ContinueWith";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RememberMe } from "@/components/ui/RememberMe/RememberMe";
import TextInput from "@/components/ui/TextInput/TextInput";
import { ThemedText } from "@/components/ui/ThemedText/ThemedText";
import sharedStyles from "../../style/sharedStyles";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  phone: z.string().regex(phoneRegex, "Please enter a valid phone number"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
const imagePath = require("@/assets/images/bg2.png");

export default function Signup () {
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
    <View style={sharedStyles.pageBackgroundImage}>
      <ImageBackground
        style={sharedStyles.pageBackgroundImage}
        source={imagePath}
        resizeMode="cover"
      >
        <View style={sharedStyles.pageContainer}>
          <ThemedText type="title" style={sharedStyles.title}>
            Sign Up
          </ThemedText>

          <ThemedText
            lightColor={Colors.light.gray}
            type="subtitle"
            style={sharedStyles.subtitle}
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
          <View style={sharedStyles.fields}>
            <RememberMe title="Remember me" />
          </View>
          <View style={sharedStyles.loginButton}>
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
};


