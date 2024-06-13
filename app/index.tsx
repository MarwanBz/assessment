// import * as ImageIcon from "@/assets/icons/BackGround";

import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

const imagePath = require("@/assets/images/background.png")

export default function Onboarding() {
  return (
    <View style={styles.image}>
      <ImageBackground
        style={styles.image}
        source={imagePath}
        resizeMode="cover"
      ></ImageBackground>
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
