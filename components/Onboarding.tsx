import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";

import { OnboardingItem } from "./OnboardingItem";
import { Pagination } from "./Pagination";
import React from "react";
// import { Cards,type data }  from "@/data/cards";
import { data } from "@/data/cards";

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

export const Onboarding = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <OnboardingItem card={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
      />
      <Pagination  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
  }
})