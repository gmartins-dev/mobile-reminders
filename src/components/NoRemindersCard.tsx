import NoRemindersIcon from "@/assets/icons/noRemindersIcon.png";
import Colors from "@/constants/Colors";
import { defaultFontFamily } from "@/constants/FontFamily";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const NoRemindersCard = () => {
  return (
    <View style={styles.cardWrapper}>
      <Image
        resizeMode="contain"
        source={NoRemindersIcon}
        style={styles.cardImage}
      />
      <View>
        <Text style={styles.cardTitle}>You currently have no reminders</Text>
      </View>
      <View>
        <Text style={styles.cardDescription}>
          Add a reminder by pressing the “Add Reminder button below
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: Colors.bodyText,
    fontFamily: defaultFontFamily,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 15,
    letterSpacing: 0.374,
    paddingTop: 10,
  },
  cardDescription: {
    color: Colors.bodyText,
    fontFamily: defaultFontFamily,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 15,
    letterSpacing: 0.374,
    paddingVertical: 10,
  },
});

export default NoRemindersCard;
