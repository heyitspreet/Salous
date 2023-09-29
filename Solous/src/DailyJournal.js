import React, {useState, useEffect} from 'react';
import {View, Text, Modal, Button, TextInput, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView} from 'react-native-gesture-handler';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

const DailyJournal = () => {
  const [entry, setEntry] = useState('');
  const [moodEmoji, setMoodEmoji] = useState('😄');
  const [modalVisible, setModalVisible] = useState(false);
  const [dailyBlogs, setDailyBlogs] = useState([]);

  // const storage = new MMKVLoader();

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
    setMoodEmoji(moodEmoji);
  };

  const setDailyBlogsAsync = async dailyBlogs => {
    // Check if the dailyBlogs variable is not null or undefined.
    if (!dailyBlogs) {
      // Handle the error.
      return;
    }

    // Try to call the JSON.stringify function.
    try {
      const dailyBlogsJson = JSON.stringify(dailyBlogs);
    } catch (error) {
      // Handle the error.
      return;
    }
  };

  const handleSubmit = async () => {
    // Get the current date.
    const date = new Date();
    const dateString = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;

    // Create a new daily blog object.
    const newDailyBlog = {
      date: dateString,
      mood: moodEmoji,
      entry: entry,
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

    //Try to call the setDailyBlogsAsync function.
    try {
      await setDailyBlogsAsync(newDailyBlogs);
    } catch (error) {
      // Handle the error.
      return;
    }

    // Update the state variable.
    setDailyBlogs(newDailyBlogs);

    // Reset the entry and mood emoji.
    setEntry('');
    setMoodEmoji('😄');

    // Close the modal.
    setModalVisible(false);
  };

  const getBlogColor = moodEmoji => {
    switch (moodEmoji) {
      case '😄':
        return '#F9C22E';
      case '😡':
        return '#B6465F';
      case '🤮':
        return '#7FB685';
      case '🥲':
        return '#353A47';
      case '🤕':
        return '#3B5249';
      default:
        return 'black';
    }
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.heading3}>Daily Journal</Text>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.button2} onPress={() => setModalVisible(true)}>
            How are u feeling today?
          </Text>
        </View>
        <Modal visible={modalVisible} transparent={true} animationType="slide">
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.container}>
              <TextInput
                multiline={true}
                placeholder="Write your daily entry here..."
                value={entry}
                onChangeText={setEntry}
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 10,
                  marginVertical: 10,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: '10',
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
              <Button color="black" title="Submit" onPress={handleSubmit} />
            </View>
          </View>
        </Modal>
        {/* Render the daily blogs as mini-blogs in text bubbles here */}
        <Text style={styles.heading4}>Your Daily Entries</Text>
        {dailyBlogs.map((dailyBlog, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: getBlogColor(dailyBlog.mood),
              }}>
              {dailyBlog.mood}
              {dailyBlog.entry}
            </Text>
            <View>
              <Text style={{fontSize: 10}}>{dailyBlog.date}</Text>
              <Text
                style={styles.clear}
                onPress={async () => {
                  const newDailyBlogs = dailyBlogs.filter(
                    (dailyBlog, i) => i !== index,
                  );
                  await AsyncStorage.setItem(
                    'daily_blogs.json',
                    JSON.stringify(newDailyBlogs),
                  );
                  setDailyBlogs(newDailyBlogs);
                }}>
                Clear
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default DailyJournal;

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
    fontSize: 10,
    textAlign: 'right',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#6a899f',
    textAlign: 'center',
  },
});
