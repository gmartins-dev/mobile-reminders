import NoRemindersCard from "@/components/NoRemindersCard";
import React from "react";
import { StyleSheet, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <NoRemindersCard />
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
