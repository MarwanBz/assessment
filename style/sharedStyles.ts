import { StyleSheet } from "react-native";
const sharedStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  spaceAround: {
    justifyContent: "space-around",
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  alignSelfStart: {
    alignSelf: "flex-start",
  },
  alignSelfEnd: {
    alignSelf: "flex-end",
  },
  alignCenter: {
    alignItems: "center",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexShrink: {
    flexShrink: 1,
  },
  noFlex: {
    flex: 0,
  },
  wrap: {
    flexWrap: "wrap",
  },
  noWrap: {
    flexWrap: "nowrap",
  },
});
export default sharedStyles;
