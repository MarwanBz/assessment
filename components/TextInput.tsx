import {
  Pressable,
  TextInput as RNTextInput,
  StyleProp,
  StyleSheet,
  Text,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

interface Props extends TextInputProps {
  value?: string;
  style?: StyleProp<TextStyle>;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  onPress?: () => void;
  containerStyle?: Object;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  secureTextEntry?: boolean;
}

const TextInput: React.FC<Props> = ({
  value,
  style,
  onChangeText,
  placeholder,
  containerStyle,
  icon,
  rightIcon,
  secureTextEntry,
  onPress,
  ...props
}) => {
  return (
    <View style={[styles.outerContainer, style]}>
      <View style={styles.inputContainer}>
        {icon}
        <RNTextInput
          style={[styles.input, style]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
        <TouchableOpacity onPress={onPress}>{rightIcon}</TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    paddingTop: 20,
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 12,
    paddingHorizontal:25 ,
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