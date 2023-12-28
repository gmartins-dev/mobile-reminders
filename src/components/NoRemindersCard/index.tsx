import NoRemindersIcon from "@/assets/icons/noRemindersIcon.png";
import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function NoRemindersCard() {
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
}
