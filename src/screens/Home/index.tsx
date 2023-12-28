import { Button } from "@/components/Button";
import { NoRemindersCard } from "@/components/NoRemindersCard";
import { remindersAtom } from "@/utils/store";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "App";
import { useAtom } from "jotai";
import React from "react";
import { Text, View, ViewStyle } from "react-native";
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

  const containerConditionalStyle: ViewStyle = {
    ...styles.container,
    justifyContent: reminders.length > 0 ? "space-between" : "flex-start",
  };

  return (
    <View style={containerConditionalStyle}>
      <View>
        {reminders.length > 0 ? (
          reminders.map((reminder) => (
            <Text key={reminder.id}>{reminder.name}</Text>
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
