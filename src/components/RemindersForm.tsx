import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export type RemindersFormProps = {
  mode: "Add Reminder" | "Edit Reminder";
};

const RemindersForm: React.FC<RemindersFormProps> = ({ mode }) => {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const isFormValid = () => {
    return name !== "" && date !== null && time !== null;
  };

  return (
    <View>
      <Text>{mode}</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        required
      />
      <TextInput placeholder="Notes" value={notes} onChangeText={setNotes} />
      <DateTimePicker
        value={date}
        mode="date"
        display="default"
        onChange={(event, selectedDate) => setDate(selectedDate || date)}
      />
      <DateTimePicker
        value={time}
        mode="time"
        display="default"
        onChange={(event, selectedTime) => setTime(selectedTime || time)}
      />
      <Button title={mode} onPress={() => {}} disabled={!isFormValid()} />
    </View>
  );
};

export default RemindersForm;
