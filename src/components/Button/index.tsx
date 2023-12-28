import { colors } from "@/theme/colors";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ReadonlyButtonProps = Readonly<{
  variant?: "primary" | "danger";
  text: string;
  onPress: () => void;
  style?: object;
  disabled?: boolean;
}>;

type BackgroundColors =
  | typeof colors.blue
  | typeof colors.red
  | typeof colors.greyButtonBackground;

type TextColors = typeof colors.white | typeof colors.greyButtonText;

export function Button({
  variant = "primary",
  text,
  onPress,
  style,
  disabled = false,
  ...rest
}: ReadonlyButtonProps) {
  let backgroundColor: BackgroundColors = colors.blue;
  let textColor: TextColors = colors.white;

  if (disabled) {
    backgroundColor = colors.greyButtonBackground;
    textColor = colors.greyButtonText;
  } else if (variant === "danger") {
    backgroundColor = colors.red;
  }

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      {...rest}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
}
