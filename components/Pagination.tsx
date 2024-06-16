import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { StyleSheet, View } from "react-native";

import React from "react";
import { data, type Cards } from "@/data/cards";

type PaginationCampProps = {
  index: number;
  x: SharedValue<number>;
  screenWidth: number;
}

const PaginationComp = () => {
  return <View style={styles.dots}></View>;
};

type PaginationProps = {
  data: Cards[];
  x: SharedValue<number>;
  screenWidth: number;
}

export function Pagination() {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <PaginationComp key={item.id} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#000",
    marginHorizontal: 4,
  },
});
