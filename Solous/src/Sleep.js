import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import SleepMeter from './components/SleepMeter';
import SleepInfo from './components/SleepInfo';

export default function Sleep() {
  const [hoursOfSleep, setHoursOfSleep] = useState(0);
  //Data for last 5 days of sleep
  const [day1, setDay1] = useState(0);
  const [day2, setDay2] = useState(0);
  const [day3, setDay3] = useState(0);
  const [day4, setDay4] = useState(0);
  const [day5, setDay5] = useState(0);


  const setHours = () => {
    // Use parseInt to convert text to a number
    let text = parseInt(day1) + parseInt(day2) + parseInt(day3) + parseInt(day4) + parseInt(day5);
    text = text / 5;
    if (text < 0) {
      text = 0;
    }
    if (text == null) {
      text = 0;
    }
    setHoursOfSleep(parseInt(text, 10));
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {/* For last 5 Days */}
      <Text style={styles.heading}>Sleep</Text>
      {/* TextInput Enter sleep hours */}
      <Text style={styles.heading3}>Enter sleep hours</Text>
      <TextInput
        style={[styles.heading2, {textAlign: 'center'}]}
        placeholder="Yesterday"
        onChangeText={text => setDay1(text)} // Use onChangeText instead of onChange
        keyboardType="numeric" // Ensures only numeric input
      />
      <TextInput
        style={[styles.heading2, {textAlign: 'center'}]}
        placeholder="Day-Before"
        onChangeText={text => setDay2(text)} // Use onChangeText instead of onChange
        keyboardType="numeric" // Ensures only numeric input
      />
      <TextInput
        style={[styles.heading2, {textAlign: 'center'}]}
        placeholder="The Previous Day"
        onChangeText={text => setDay3(text)} // Use onChangeText instead of onChange
        keyboardType="numeric" // Ensures only numeric input
      />
      <TextInput
        style={[styles.heading2, {textAlign: 'center'}]}
        placeholder="The Previous Day"
        onChangeText={text => setDay4(text)} // Use onChangeText instead of onChange
        keyboardType="numeric" // Ensures only numeric input
      />
      <TextInput
        style={[styles.heading2, {textAlign: 'center'}]}
        placeholder="The Previous Day"
        onChangeText={text => setDay5(text)} // Use onChangeText instead of onChange
        keyboardType="numeric" // Ensures only numeric input
      />
      {/* Button to submit */}
      <Text style={styles.button2} onPress={()=>setHours()}>Check</Text>

      {/* Send average of the last 5 days */}
      <SleepMeter hoursOfSleep={hoursOfSleep} />
      <SleepInfo hoursOfSleep={hoursOfSleep} />
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
    textAlign: 'center',
    alignSelf: 'center',
    width: 100,
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
