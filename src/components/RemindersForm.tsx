import Button from "@/components/Button";
import Colors from "@/constants/Colors";
import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

export type RemindersFormProps = {
  mode: "Add Reminder" | "Edit Reminder";
};

const RemindersForm: React.FC<RemindersFormProps> = ({ mode }) => {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [selectTime, setSelectTime] = useState("");

  //required fields
  const isFormValid = () => {
    return name !== "" && selectDate !== null && selectTime !== null;
  };

  return (
    <>
      <View style={styles.formWrapper}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.textInput}
          placeholderTextColor={Colors.textInputPlaceholder}
        />
        <TextInput
          placeholder="Notes"
          value={notes}
          onChangeText={setNotes}
          style={styles.textInput}
          placeholderTextColor={Colors.textInputPlaceholder}
        />
        <TextInput
          placeholder="Select Date"
          value={selectDate}
          onChangeText={setSelectDate}
          style={styles.textInput}
          placeholderTextColor={Colors.textInputPlaceholder}
        />
        <TextInput
          placeholder="Select Time"
          value={selectTime}
          onChangeText={setSelectTime}
          style={styles.textInput}
          placeholderTextColor={Colors.textInputPlaceholder}
        />
      </View>
      <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <Button
          variant="primary"
          text="Add Reminder"
          disabled={!isFormValid()}
          onPress={() => {
            if (isFormValid()) {
              Alert.alert("Reminder added");
              // Add your reminder submission logic here
            }
          }}
          style={{ alignSelf: "center", marginBottom: 20 }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    width: "100%",
    height: "auto",
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textInput: {
    width: "100%",
    height: 60,
    padding: 20,
    backgroundColor: Colors.textInputBackground,
    color: Colors.textInputColor,
    marginBottom: 10,
    borderRadius: 12,
  },
});

export default RemindersForm;
