import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Reminder from './components/Reminder';

export default function Reminders() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Text style={styles.heading}>Reminders</Text>
        <Text style={styles.clear}>Clear</Text>
      </View>

      <ScrollView>
        <Reminder title='He' time='10:00' days='sat sun mon'/>
      </ScrollView>
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
