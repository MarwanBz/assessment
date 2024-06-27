import { Alert, ImageBackground, View } from "react-native";

import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { ContinueWith } from "@/components/ContinueWith";
import { ForgetPassword } from "@/components/ForgetPassword";
import { Ionicons } from "@expo/vector-icons";
import { RememberMe } from "@/components/RememberMe";
import TextInput from "@/components/TextInput";
import { ThemedText } from "@/components/ThemedText";
import sharedStyles from "../style/sharedStyles";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email or phone number"),
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

  const onSubmit = (data: any) => {
    Alert.alert("Successful", JSON.stringify(data));
  };

  const handelForgetPasswordPress = () => {
    Alert.alert("Feature coming soon...");
  };

  const handelRememberMePress = () => {
    Alert.alert("Feature coming soon...");
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
            Login
          </ThemedText>

          <ThemedText
            lightColor={Colors.light.gray}
            type="subtitle"
            style={sharedStyles.subtitle}
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

          <View style={sharedStyles.fields}>
            <RememberMe title="Remember Me" onPress={handelRememberMePress} />
            <ForgetPassword
              onPress={handelForgetPasswordPress}
              title={"Forgot Password?"}
            />
          </View>
          <View style={sharedStyles.loginButton}>
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

export default Login;