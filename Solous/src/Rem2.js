import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const RemindersPage = () => {
  const [reminders, setReminders] = useState([]);

  const createReminder = (reminderText, recurrenceFrequency) => {
    const newReminder = {
      id: reminders.length + 1,
      text: reminderText,
      recurrenceFrequency,
      completed: false,
    };

    setReminders([...reminders, newReminder]);
  };

  const updateReminder = (reminder, newReminderText) => {
    const reminderIndex = reminders.findIndex(r => r.id === reminder.id);

    const updatedReminder = {
      ...reminder,
      text: newReminderText,
    };

    reminders[reminderIndex] = updatedReminder;

    setReminders(reminders);
  };

  const deleteReminder = reminder => {
    const reminderIndex = reminders.findIndex(r => r.id === reminder.id);

    reminders.splice(reminderIndex, 1);

    setReminders(reminders);
  };

  const renderReminder = reminder => {
    return (
      <View key={reminder.id}>
        <Text>{reminder.text}</Text>
        <Text>{reminder.recurrenceFrequency}</Text>
        <Button
          title="Edit"
          onPress={() => updateReminder(reminder, 'New reminder text')}
        />
        <Button title="Delete" onPress={() => deleteReminder(reminder)} />
      </View>
    );
  };

  return (
    <View>
      <Text>Reminders</Text>
      <TextInput
        placeholder="Enter a reminder"
        onChangeText={text => createReminder(text, 'Daily')}
      />
      <CalendarPicker
        onDateSelected={date => {
          // Create a new reminder with the selected date.
        }}
      />
      <FlatList data={reminders} renderItem={renderReminder} />
    </View>
  );
};

export default RemindersPage;
