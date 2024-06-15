import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import { Colors } from "@/constants/Colors";
import React from "react";

export const OnboardingItem = ({ card }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.card}>
        <Image
          source={card.image}
          style={[styles.image, { width, resizeMode: "contain" }]}
        />
        <View style={styles.cardText}>
          <Text style={styles.title}>{card.title}</Text>
          <Text style={styles.description}>{card.description}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  title: {
    color: Colors.light.text,
    paddingTop: 30,
    fontWeight: 'bold',
    fontSize: 50,
  },
  image: {
    justifyContent: "center",
  },
  card: {
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  description: {
    paddingVertical: 25,
    color: Colors.light.gray,
    maxWidth: 230,
  },
  cardText: {
    paddingTop: 90,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
