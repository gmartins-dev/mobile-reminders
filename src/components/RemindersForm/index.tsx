import { Button } from "@/components/Button";
import { colors } from "@/theme/colors";
import React, { useState } from "react";
import { Alert, TextInput, View } from "react-native";
import { styles } from "./styles";

export type RemindersFormProps = Readonly<{
  mode: "Add Reminder" | "Edit Reminder";
}>;

export function RemindersForm({ mode }: RemindersFormProps) {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [selectTime, setSelectTime] = useState("");

  //required fields
  const isFormValid = () => {
    return name !== "" && selectDate !== null && selectTime !== null;
  };
  const handleSaveReminder = () => {
    if (isFormValid()) {
      Alert.alert("Reminder added");
      //TODO reminder submission logic here
    }
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
        <TextInput
          placeholder="Select Date"
          value={selectDate}
          onChangeText={setSelectDate}
          style={styles.textInput}
          placeholderTextColor={colors.textInputPlaceholder}
        />
        <TextInput
          placeholder="Select Time"
          value={selectTime}
          onChangeText={setSelectTime}
          style={styles.textInput}
          placeholderTextColor={colors.textInputPlaceholder}
        />
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
