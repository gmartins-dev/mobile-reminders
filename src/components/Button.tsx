import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

interface ButtonProps {
  variant: "primary" | "danger";
  text: string;
  onPress: () => void;
  style?: object;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  text,
  onPress,
  style,
  disabled = false,
}) => {
  const backgroundColor = disabled
    ? Colors.greyButtonBackground
    : variant === "primary"
    ? Colors.blue
    : variant === "danger"
    ? Colors.red
    : Colors.blue;

  const textColor = disabled ? Colors.greyButtonText : "#FFFFFF";

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 19,
  },
});

export default Button;
