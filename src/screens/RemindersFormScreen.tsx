import RemindersForm from "@/components/RemindersForm";
import { RouteProp } from "@react-navigation/native";
import { StackNavigatorParams } from "App";
import { View } from "react-native";

type RemindersFormScreenProps = {
  route: RouteProp<StackNavigatorParams, "Add Reminder" | "Edit Reminder">;
};

const RemindersFormScreen: React.FC<RemindersFormScreenProps> = ({ route }) => {
  const { mode } = route.params;

  return (
    <View>
      <RemindersForm mode={mode} />
    </View>
  );
};

export default RemindersFormScreen;
