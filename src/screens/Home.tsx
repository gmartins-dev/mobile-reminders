import Button from "@/components/Button";
import NoRemindersCard from "@/components/NoRemindersCard";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "App";
import React from "react";
import { StyleSheet, View } from "react-native";

type HomeScreenNavigationProp = StackNavigationProp<
  StackNavigatorParams,
  "Home"
>;

type NavigationProps = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<NavigationProps> = ({ navigation }) => {
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
});

export default Home;
