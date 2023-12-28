import { colors } from "@/theme/colors";
import { Poppins } from "@/theme/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardWrapper: {
    width: "100%",
    height: "auto",
    flexShrink: 0,
    borderRadius: 12,
    backgroundColor: "#FFF",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  cardImage: {
    width: 25,
    height: 25,
  },
  cardTitle: {
    color: colors.bodyText,
    fontFamily: Poppins,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 15,
    letterSpacing: 0.374,
    paddingTop: 10,
  },
  cardDescription: {
    color: colors.bodyText,
    fontFamily: Poppins,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 15,
    letterSpacing: 0.374,
    paddingVertical: 10,
  },
});
