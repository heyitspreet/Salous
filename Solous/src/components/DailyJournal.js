import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MMKV} from 'react-native-mmkv';
import {storage} from '../DailyJournal';

export default function DailyJournal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [todayEntry, setTodayEntry] = useState('');
  const [todayMood, setTodayMood] = useState('');
  const [todayDate, setTodayDate] = useState('');
  const [today, setToday] = useState('');
  const [dailyBlogs, setDailyBlogs] = useState([]);

  useEffect(() => {
    const getDailyBlogs = async () => {
      const dailyBlogs = await storage.getString('daily_blogs');
      if (dailyBlogs === null) {
        return [];
      } else {
        setDailyBlogs(JSON.parse(dailyBlogs));
        return JSON.parse(dailyBlogs);
      }
    };
    getDailyBlogs();
  }, []);

  const handleMoodChange = moodEmoji => {
    setTodayMood(moodEmoji);
  };

  const handleSubmit = async () => {
    // Get the current date.
    const date = new Date();
    const dateString = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;

    // Create a new daily blog object.
    const newDailyBlog = {
      date: dateString,
      mood: todayMood,
      entry: todayEntry,
    };

    // Add the new daily blog to the daily blogs array.
    const newDailyBlogs = [...dailyBlogs, newDailyBlog];

    // Write the new daily blogs array to the JSON file.
    storage.set('daily_blogs', JSON.stringify(newDailyBlogs));
    console.log(storage.getString('daily_blogs'));

    // Check if the dailyBlogs variable is not null or undefined.
    if (!dailyBlogs) {
      // Handle the error.
      return;
    }

    // Update the state variable.
    setDailyBlogs(newDailyBlogs);

    // Close the modal.
    setModalVisible(false);
  };

  const handleEntryChange = text => {
    setTodayEntry(text);
  };

  const handleDateChange = text => {
    setTodayDate(text);
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={{marginTop: 100}}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            How are you feeling today?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <Button
              color="#F9C22E"
              title="😄"
              onPress={() => handleMoodChange('😄')}
            />
            <Button
              color="#B6465F"
              title="😡"
              onPress={() => handleMoodChange('😡')}
            />
            <Button
              color="#7FB685"
              title="🤮"
              onPress={() => handleMoodChange('🤮')}
            />
            <Button
              color="#353A47"
              title="🥲"
              onPress={() => handleMoodChange('🥲')}
            />
            <Button
              color="#3B5249"
              title="🤕"
              onPress={() => handleMoodChange('🤕')}
            />
          </View>
          <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>
            What's on your mind?
          </Text>
          <TextInput
            style={{
              height: 200,
              borderColor: 'gray',
              borderWidth: 1,
              marginHorizontal: 20,
              marginTop: 20,
            }}
            onChangeText={text => handleEntryChange(text)}
            value={todayEntry}
            multiline={true}
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              padding: 10,
              marginHorizontal: 20,
              marginTop: 20,
            }}
            onPress={() => handleSubmit()}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Text style={{color: 'black', fontSize: 20}}>Daily Journal:</Text>
      {/* button to add '+' */}
      <Text style={styles.button} onPress={() => setModalVisible(true)}>
        +
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
  },
  button: {
    color: 'black',
    fontSize: 20,
    borderRadius: 50,
  },
});
