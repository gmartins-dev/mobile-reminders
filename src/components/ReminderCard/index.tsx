import bellIcon from "@/assets/icons/bellIcon.png";
import penIcon from "@/assets/icons/penIcon.png";
import { Reminder } from "@/utils/store";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

type ReminderCardProps = {
  reminder: Reminder;
};

export function ReminderCard({ reminder }: ReminderCardProps) {
  if (!reminder) {
    return null;
  }

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardHeader}>
        <View style={styles.headerContainer}>
          <Image
            resizeMode="contain"
            source={bellIcon}
            style={styles.bellIcon}
          />
          <Text style={styles.cardTitle}>
            {reminder.name.charAt(0).toUpperCase() + reminder.name.slice(1)}
          </Text>
        </View>
        <Image resizeMode="contain" source={penIcon} style={styles.penIcon} />
      </View>
      <Text style={styles.cardDescription}>
        This reminder is set for {reminder.selectTime}
      </Text>
    </View>
  );
}
