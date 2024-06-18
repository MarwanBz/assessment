import {
  TextInput as RNTextInput,
  StyleProp,
  StyleSheet,
  Text,
  TextInputProps,
  TextStyle,
  View
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

interface Props extends TextInputProps {
  value?: string;
  style?: StyleProp<TextStyle>;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  containerStyle?: Object;
  icon?: React.ReactNode;
}

const TextInput: React.FC<Props> = ({
  value,
  style,
  onChangeText,
  placeholder,
  containerStyle,
  icon,
  ...props
}) => {
  return (
    <View>
      <View style={styles.inputContainer}>
        {icon}
        <RNTextInput
          style={[styles.input, style]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          // placeholderTextColor={"red"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "white",
    padding: 15,
    flexDirection: "row",
    borderRadius: 36,
    alignItems: "center",
    gap: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "gray",
    borderWidth: 0,
    fontFamily: "semiBold",
  },
});

export default TextInput;