import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function UpcomingPeriods() {
  const [days, setDays] = useState([]);
  const periodDate = new Date(2023, 8, 26);

  const calculateDays = () => {
    const today = new Date();
    const nextFiveDays = [];
    for (let i = 0; i < 5; i++) {
      const day = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      nextFiveDays.push(day);
    }

    setDays(nextFiveDays);
  };

  function isPeriodOrOvulationDate(currentDate, periodDate) {
    // Calculate the number of days between the current date and the period date.
    const startDateObj = new Date(currentDate);
    const endDateObj = new Date(periodDate);

    // Subtract the earlier date from the later date.
    const differenceInMilliseconds = endDateObj - startDateObj;

    // Divide the difference in milliseconds by the number of milliseconds in a day.
    let daysBetween = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    //round to nearest whole number
    daysBetween = Math.abs(daysBetween);
    daysBetween = Math.floor(daysBetween);
    console.log('daysBetween', daysBetween);
    console.log(startDateObj, endDateObj);
    // If the number of days between is a multiple of 28, then the current date is a period date.
    if (daysBetween % 28 === 0) {
      return 'period';
    }

    if (daysBetween % 28 === 14) {
      return 'ovulation';
    }

    return 'neither';
  }

  useEffect(() => {
    calculateDays();
  }, []);

  const renderBubble = day => {
    const isPeriodDay = isPeriodOrOvulationDate(day, periodDate) === 'period';
    const isOvulationDay =
      isPeriodOrOvulationDate(day, periodDate) === 'ovulation';
    const color = isPeriodDay
      ? '#d77471'
      : isOvulationDay
      ? '#74899d'
      : 'white';

    return (
      <Text style={[styles.bubble, {backgroundColor: color}]}>
        {day.getDate()}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 20}}>Upcoming Periods:</Text>
      <View style={styles.bubbleCont}>
        {days.map(day => renderBubble(day))}
        <View style={styles.lengend}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#d77471',
                width: 15,
                height: 15,
                borderRadius: 5,
                marginHorizontal: 5,
              }}></View>
            <Text style={{color: 'black', fontSize: 15}}>Period</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#74899d',
                width: 15,
                height: 15,
                borderRadius: 5,
                marginHorizontal: 5,
              }}></View>
            <Text style={{color: 'black', fontSize: 15}}>Ovulation</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    marginTop: 20,
  },
  bubbleCont: {
    marginTop: 10,
    padding: 0,
    flexDirection: 'row',
  },
  bubble: {
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 5,
    marginBottom: 10,
    width: 40,
    height: 40,
    borderRadius: 5,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
