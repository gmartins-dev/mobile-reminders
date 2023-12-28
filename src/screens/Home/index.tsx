import { Button } from "@/components/Button";
import { NoRemindersCard } from "@/components/NoRemindersCard";
import { ReminderCard } from "@/components/ReminderCard";
import { remindersAtom } from "@/utils/store";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "App";
import { useAtom } from "jotai";
import React from "react";
import { View, ViewStyle } from "react-native";
import { styles } from "./styles";

type HomeScreenNavigationProp = StackNavigationProp<
  StackNavigatorParams,
  "Reminders"
>;

type NavigationProps = {
  navigation: HomeScreenNavigationProp;
};

export function Home({ navigation }: NavigationProps) {
  const [reminders] = useAtom(remindersAtom);

  const conditionalButtonPosition: ViewStyle = {
    ...styles.container,
    justifyContent: reminders.length > 0 ? "space-between" : "flex-start",
  };

  return (
    <View style={conditionalButtonPosition}>
      <View>
        {reminders.length > 0 ? (
          reminders.map((reminder) => (
            <ReminderCard key={reminder.id} reminder={reminder} />
          ))
        ) : (
          <NoRemindersCard />
        )}
      </View>
      <Button
        variant="primary"
        text="Add Reminder"
        onPress={() => {
          navigation.navigate("Add Reminder", { mode: "Add Reminder" });
        }}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}
