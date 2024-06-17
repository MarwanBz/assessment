import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { StyleSheet, View } from "react-native";

import React from "react";
import { type Cards } from "@/data/cards";
import { Colors } from "@/constants/Colors";

type PaginationDotsProps = {
  index: number;
  x: SharedValue<number>;
  screenWidth: number;
};

const PaginationDots = ({ index, x, screenWidth }: PaginationDotsProps) => {
  const animatedDotsStyle = useAnimatedStyle(() => {
    const widthAnimation = interpolate(
      x.value,
      [
        (index - 1) * screenWidth,
        index * screenWidth,
        (index + 1) * screenWidth,
      ],
      [10, 20, 10],
      Extrapolate.CLAMP
    );

    const opacityAnimation = interpolate(
      x.value,
      [
        (index - 1) * screenWidth,
        index * screenWidth,
        (index + 1) * screenWidth,
      ],
      [ 1,1 ],
      Extrapolate.CLAMP
    );
    return {
      width: widthAnimation,
      opacity: opacityAnimation,
    };
  });
  return <Animated.View style={[styles.dots, animatedDotsStyle]} />;
};

type PaginationProps = {
  data: Cards[];
  x: SharedValue<number>;
  screenWidth: number;
};

export function Pagination({ data, screenWidth, x }: PaginationProps) {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <PaginationDots
          key={item.id}
          index={index}
          x={x}
          screenWidth={screenWidth}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    // paddingHorizontal: 20,
    paddingTop: 0,
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: Colors.light.text,
    marginHorizontal: 4,
  },
});
