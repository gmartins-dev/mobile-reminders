import { colors } from "@/theme/colors";
import { Poppins } from "@/theme/fontFamily";
import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  cardWrapper: {
    width: screenWidth - 20,
    height: "auto",
    flexShrink: 0,
    borderRadius: 12,
    backgroundColor: "#FFF",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 26,
    padding: 10,
    marginTop: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 4,
    marginLeft: 4,
  },
  bellIcon: {
    width: 18,
    height: 18,
  },
  penIcon: {
    width: 14,
    height: 14,
  },
  cardTitle: {
    color: colors.bodyText,
    fontFamily: Poppins,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
  },
  cardDescription: {
    color: colors.bodyText,
    fontFamily: Poppins,
    textAlign: "left",
    fontSize: 11,
    fontWeight: "400",
    paddingTop: 2,
    marginLeft: 4,
  },
});
