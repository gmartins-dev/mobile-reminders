import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  formWrapper: {
    width: "100%",
    height: "auto",
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textInput: {
    width: "100%",
    height: 60,
    padding: 20,
    backgroundColor: colors.textInputBackground,
    color: colors.textInputColor,
    marginBottom: 10,
    borderRadius: 12,
  },
});
