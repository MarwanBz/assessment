import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Onboarding } from "@/components/Onboarding";

const imagePath = require("@/assets/images/background.png");

export default function OnboardingScreen() {
  return (
    <View style={styles.image}>
      <ImageBackground
        style={styles.image}
        source={imagePath}
        resizeMode="cover"
      >
        <Onboarding />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
