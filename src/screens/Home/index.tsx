import { Button } from "@/components/Button";
import { NoRemindersCard } from "@/components/NoRemindersCard";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "App";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

type HomeScreenNavigationProp = StackNavigationProp<
  StackNavigatorParams,
  "Home"
>;

type NavigationProps = {
  navigation: HomeScreenNavigationProp;
};

export function Home({ navigation }: NavigationProps) {
  return (
    <View style={styles.container}>
      <NoRemindersCard />
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
