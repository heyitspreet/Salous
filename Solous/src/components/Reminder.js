import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
//<Reminder title='He' time='10:00' day='[sat, sun, mon]'/>
export default function Reminder(props) {
  const {title, time, days} = props;

  return (
    <View style={styles.container}>
        <Text style={styles.contHeading}>{title}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.contHeading}>{time}</Text>
      <Text style={styles.contHeading}>{days}</Text>
      </View>
        <Button color="black" title="Delete" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  contHeading: {
    color: 'black',
    fontSize: 20,
  },
});
