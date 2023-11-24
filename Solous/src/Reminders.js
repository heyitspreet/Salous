import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  CheckBox,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Reminder from './components/Reminder';

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
// Reminder { title: string, time: string, days: string[], id: string }
export default function Reminders() {
  const [reminders, setReminders] = React.useState([]); // [Reminder
  const [title, setTitle] = React.useState('');
  const [time, setTime] = React.useState('');
  // const [days, setDays] = React.useState('');
  const [selectedDays, setSelectedDays] = React.useState([]);
  const createReminder = (title, time, days) => {
    setReminders(prevReminders => [
      ...prevReminders,
      {
        title,
        time,
        days: selectedDays.join(', '),
        id: `${title}-${time}-${days}-${Math.random()
          .toString(36)
          .substring(7)}`,
      },
    ]);
  };
  const clearReminders = () => {
    setReminders([]);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Text style={styles.heading}>Reminders</Text>
        <Button style={styles.clear} title="Clear" onPress={clearReminders} />
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text style={styles.heading2}>Create Reminder</Text>
        <View style={styles.container}>
          <Text style={styles.heading3}>Title</Text>
          <TextInput
            style={styles.heading4}
            placeholder="Enter Title"
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <Text style={styles.heading3}>Time</Text>
          <TextInput
            style={styles.heading4}
            placeholder="Enter Time"
            value={time}
            onChangeText={text => setTime(text)}
          />
          <Text style={styles.heading3}>Days</Text>
          {daysOfWeek.map(day => (
            <CheckBox
              key={day}
              title={day}
              checked={selectedDays.includes(day)}
              onPress={() => {
                if (selectedDays.includes(day)) {
                  setSelectedDays(
                    selectedDays.filter(selectedDay => selectedDay !== day),
                  );
                } else {
                  setSelectedDays([...selectedDays, day]);
                }
              }}
            />
          ))}
          {/* <TextInput
            style={styles.heading4}
            placeholder="Enter Days"
            value={days}
            onChangeText={text => setDays(text)}
          /> */}
          <Button
            color="black"
            title="Create"
            onPress={() => createReminder(title, time, days)}
          />
        </View>
      </View>
      <View>
        <Text style={styles.heading2}>Reminders</Text>
        {reminders.map(reminder => {
          console.log(reminder);
          return (
            <Reminder
              title={reminder.title}
              time={reminder.time}
              days={reminder.days}
              key={reminder.id}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#000000',
    marginLeft: 20,
  },
  heading2: {
    fontSize: 30,
    fontFamily: 'Roboto',
    color: '#000000',
    marginTop: 10,
    marginLeft: 20,
  },
  heading3: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: '#000000',
    textAlign: 'center',
  },
  heading4: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Roboto',
    color: '#000000',
  },
  button: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
  },
  button2: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    color: 'white',
    backgroundColor: '#6a899f',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  base: {
    flex: 1,
    backgroundColor: '#ffffff',
    //backgroundImage: 'linear-gradient(to bottom, #000000, #ffffff)',
  },
  container: {
    padding: 5,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    paddingBottom: 20,
    backgroundColor: '#ffffff',
  },
  contHeading: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Water: {
    color: '#6a899f',
    fontWeight: '400',
    fontSize: 70,
  },
  clear: {
    color: '#6a899f',
    fontWeight: '400',
    fontSize: 20,
    marginVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#6a899f',
    textAlign: 'center',
  },
});
