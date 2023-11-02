import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SleepMeter = ({hoursOfSleep}) => {
  const getWidth = hours => {
    if (isNaN(hours)) {
      hours = 0;
    }
    const maxWidth = 300; // Set your maximum width
    const maxSleepHours = 8; // Max sleep hours
    const sleepPercentage = (hours / maxSleepHours) * 100;
    const width = (maxWidth * sleepPercentage) / 100;
    return width;
  };

  const getColor = hours => {
    if (isNaN(hours)) {
      hours = 0;
    }
    const maxSleepHours = 8; // Max sleep hours
    const sleepPercentage = (hours / maxSleepHours) * 100;
    if (sleepPercentage < 50) {
      return '#ff0000';
    } else if (sleepPercentage < 75) {
      return '#ffff00';
    } else if (sleepPercentage > 101) {
      return '#ff0000';
    } else {
      return '#99c87a';
    }
  };

  const sleepPercentage = (hoursOfSleep / 8) * 100;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.meter,
          {
            width: getWidth(hoursOfSleep),
            backgroundColor: getColor(hoursOfSleep),
          },
        ]}
      />
      <Text>{sleepPercentage}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  meter: {
    height: 20,
    backgroundColor: '#99c87a', // Set the color of the sleep meter
    borderRadius: 10,
    marginBottom: 5,
  },
});

export default SleepMeter;
