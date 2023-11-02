import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SleepInfo({hoursOfSleep}) {
  const getSleepInfo = hours => {
    if (hours < 0) {
      hours = 0;
    }
    if (hours == null) {
      hours = 0;
    }
    if (hours < 6) {
      return 'You need more sleep!';
    } else if (hours < 8) {
      return "You're getting enough sleep.";
    } else {
      return "You're getting more than enough sleep!";
    }
  };

  return (
    <View>
      <Text>SleepInfo</Text>
      <Text>{getSleepInfo(hoursOfSleep)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
