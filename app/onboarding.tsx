// import * as ImageIcon from "@/assets/icons/BackGround";

import {
  Image,
  ImageBackgroundComponent,
  Platform,
  StyleSheet,
  Text,
  View
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import Ionicons from "@expo/vector-icons/Ionicons";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Onboarding() {
  return <View style={styles.container}>
    <Text>Hello world </Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
