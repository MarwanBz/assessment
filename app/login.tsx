import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Controller, useForm } from "react-hook-form";

import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { ContinueWith } from "@/components/ContinueWith";
import { ForgetPassword } from "@/components/ForgetPassword";
import { Ionicons } from "@expo/vector-icons";
import { RememberMe } from "@/components/RememberMe";
import TextInput from "@/components/TextInput";
import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const imagePath = require("@/assets/images/bg2.png");

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data:any) => {
    Alert.alert("Successful", JSON.stringify(data));
  };
  const handelForgetPasswordPress = () => {
    Alert.alert("Feature coming soon...");
  };

  const handelRememberMePress = () => {
    Alert.alert("Feature coming soon...");
  }

  return (
    <View style={styles.image}>
      <ImageBackground
        style={styles.image}
        source={imagePath}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <ThemedText type="title" style={styles.title}>
            Login
          </ThemedText>

          <ThemedText
            lightColor={Colors.light.gray}
            type="subtitle"
            style={styles.subtitle}
          >
            Hey, Enter your details to get log in to your account
          </ThemedText>

          <TextInput
            name={"email"}
            placeholder="Enter Email or Phone Number"
            control={control}
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
            <RememberMe title="Remember Me" onPress={handelRememberMePress} />
            <ForgetPassword
              onPress={handelForgetPasswordPress}
              title={"Forgot Password?"}
            />
          </View>
          <View style={styles.loginButton}>
            <Button title="Log in" onPress={handleSubmit(onSubmit)} />
          </View>
          <ContinueWith
            title="OR CONTINUE WITH"
            subTitle="Don't Have An Account"
            signOrLog="Sign Up"
            link="/signup"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

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
    paddingTop: 80,
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
    flexDirection: 'row',
    justifyContent: "space-between"
  },
});

export default Login;