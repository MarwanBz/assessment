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
  pageBackgroundImage: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  pageContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 90,
  },
  title: { textAlign: "center" },
  subtitle: {
    textAlign: "center",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  fields: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginButton: {
    marginVertical: 20,
  },
});
export default sharedStyles;
