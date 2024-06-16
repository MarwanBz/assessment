import { StyleSheet, View } from "react-native";

import React from "react";
import { data } from "@/data/cards";

const PaginationComp = () => {
  return (
    <View style={styles.dots}>
      
    </View>
  )
}

export function Pagination() {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <PaginationComp
          key={item.id}
        />
      ))}
    </View>
  )
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
    backgroundColor: '#000',
    marginHorizontal: 4,
  }
})