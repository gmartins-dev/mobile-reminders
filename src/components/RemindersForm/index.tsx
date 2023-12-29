import { Button } from "@/components/Button";
import { colors } from "@/theme/colors";
import { remindersAtom } from "@/utils/store";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import React, { useState } from "react";
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { styles } from "./styles";

export type RemindersFormProps = Readonly<{
  mode: "Add Reminder" | "Edit Reminder";
}>;

export function RemindersForm({ mode }: RemindersFormProps) {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };
  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === "ios");
    setTime(currentTime);
  };
  const showTimepicker = () => {
    setShowTimePicker(true);
  };

  const [reminders, setReminders] = useAtom(remindersAtom);

  const navigation = useNavigation();

  //required fields
  const isFormValid = () => {
    return name !== "" && date !== null && time !== null;
  };

  const handleSaveReminder = () => {
    if (isFormValid()) {
      setReminders((oldReminders) => [
        ...oldReminders,
        { id: uuidv4(), name, notes, date, time },
      ]);
    }
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.formWrapper}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.textInput}
          placeholderTextColor={colors.textInputPlaceholder}
        />
        <TextInput
          placeholder="Notes"
          value={notes}
          onChangeText={setNotes}
          style={styles.textInput}
          placeholderTextColor={colors.textInputPlaceholder}
        />
        <TouchableOpacity style={styles.textInput} onPress={showDatepicker}>
          <Text>{date ? date.toLocaleDateString() : "Select a date"}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={onChangeDate}
          />
        )}
        <TouchableOpacity style={styles.textInput} onPress={showTimepicker}>
          <Text>
            {new Intl.DateTimeFormat("default", {
              hour: "numeric",
              minute: "numeric",
            }).format(time)}
          </Text>
        </TouchableOpacity>
        {showTimePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={time}
            mode={"time"}
            is24Hour={true}
            display="default"
            onChange={onChangeTime}
          />
        )}
      </View>
      <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <Button
          variant="primary"
          text="Add Reminder"
          disabled={!isFormValid()}
          onPress={handleSaveReminder}
          style={{ alignSelf: "center", marginBottom: 20 }}
        />
      </View>
    </>
  );
}
