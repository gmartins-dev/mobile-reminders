import { RemindersForm } from "@/components/RemindersForm";
import { RouteProp } from "@react-navigation/native";
import { StackNavigatorParams } from "App";
import { View } from "react-native";
import { styles } from "./styles";

type RemindersFormScreenProps = {
  route: RouteProp<StackNavigatorParams, "Add Reminder" | "Edit Reminder"> & {
    params: {
      mode: "Add Reminder" | "Edit Reminder";
    };
  };
};

export function RemindersFormScreen({ route }: RemindersFormScreenProps) {
  const { mode } = route.params;

  return (
    <View style={styles.container}>
      <RemindersForm mode={mode} />
    </View>
  );
}
