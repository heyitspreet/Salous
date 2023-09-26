import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PeriodCountdown = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const calculateTimeLeft = () => {
    const now = new Date();
    const periodStart = new Date(2023, 9, 24); // This is the date of the next period
    const totalSecondsLeft = (periodStart - now) / 1000;
    const daysLeft = Math.floor(totalSecondsLeft / (24 * 60 * 60));
    const hoursLeft = Math.floor(
      (totalSecondsLeft % (24 * 60 * 60)) / (60 * 60),
    );
    const minutesLeft = Math.floor((totalSecondsLeft % (60 * 60)) / 60);
    const secondsLeft = Math.floor(totalSecondsLeft % 60);

    setDaysLeft(daysLeft);
    setHoursLeft(hoursLeft);
    setMinutesLeft(minutesLeft);
    setSecondsLeft(secondsLeft);
  };

  useEffect(() => {
    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming:</Text>
      <View style={styles.Time}>
        <View style={styles.countdown}>
          <Text style={styles.number}>{daysLeft}</Text>
          <Text style={styles.text}>Days</Text>
        </View>
        <View style={styles.countdown}>
          <Text style={styles.number}>{hoursLeft}</Text>
          <Text style={styles.text}>Hours</Text>
        </View>
        <View style={styles.countdown}>
          <Text style={styles.number}>{minutesLeft}</Text>
          <Text style={styles.text}>Minutes</Text>
        </View>
        <View style={styles.countdown}>
          <Text style={styles.number}>{secondsLeft}</Text>
          <Text style={styles.text}>Seconds</Text>
        </View>
      </View>
      <Text style={styles.text}>Until your next period</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
  },
  button: {
    color: 'black',
    fontSize: 20,
    borderRadius: 50,
  },
  Time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PeriodCountdown;
