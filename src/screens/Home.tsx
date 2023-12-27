import Button from "@/components/Button";
import NoRemindersCard from "@/components/NoRemindersCard";
import React from "react";
import { StyleSheet, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <NoRemindersCard />
      <Button
        variant="primary"
        text="Primary Button"
        onPress={() => {}}
        style={{ marginTop: 20 }}
      />
      <Button variant="danger" text="Danger Button" onPress={() => {}} />
      <Button variant="disabled" text="Disabled Button" onPress={() => {}} />
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
