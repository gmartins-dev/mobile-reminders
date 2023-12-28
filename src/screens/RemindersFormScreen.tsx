import {RemindersForm} from "@/components/RemindersForm";
import { RouteProp } from "@react-navigation/native";
import { StackNavigatorParams } from "App";
import { StyleSheet, View } from "react-native";

type RemindersFormScreenProps = {
  route: RouteProp<StackNavigatorParams, "Add Reminder" | "Edit Reminder">;
};

const RemindersFormScreen: React.FC<RemindersFormScreenProps> = ({ route }) => {
  const { mode } = route.params;

  return (
    <View style={styles.container}>
      <RemindersForm mode={mode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default RemindersFormScreen;
