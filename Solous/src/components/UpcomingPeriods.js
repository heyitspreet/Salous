import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function UpcomingPeriods() {
  const [days, setDays] = useState([]);
  //const periodDate = new Date(2023, 8, 30);
  const [periodDate, setPeriodDate] = useState(new Date(2023, 8, 30));
  const [modalVisible, setModalVisible] = useState(false);

  const calculateDays = () => {
    const today = new Date();
    const nextFiveDays = [];
    for (let i = 0; i < 5; i++) {
      const day = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      nextFiveDays.push(day);
    }

    setDays(nextFiveDays);
  };

  function MonthName(month) {
    switch (month) {
      case 0:
        return 'Jan';
      case 1:
        return 'Feb';
      case 2:
        return 'Mar';
      case 3:
        return 'Apr';
      case 4:
        return 'May';
      case 5:
        return 'Jun';
      case 6:
        return 'Jul';
      case 7:
        return 'Aug';
      case 8:
        return 'Sep';
      case 9:
        return 'Oct';
      case 10:
        return 'Nov';
      case 11:
        return 'Dec';
    }
  }

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
    if (daysBetween % 28 < 2) {
      return 'period';
    }

    if (daysBetween % 28 < 16 && daysBetween % 28 > 12) {
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
        {day.getDate()}{" "}
        {MonthName(day.getMonth())}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <View style={{backgroundColor: 'white', padding: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Set Period Date
            </Text>
            <Text style={{fontSize: 15, marginVertical: 10}}>
              Enter the date of your period
            </Text>
            <DatePicker date={periodDate} onDateChange={setPeriodDate} />
            <View
              style={{backgroundColor: 'black', padding: 15, borderRadius: 25,width:270, alignSelf:'center'}}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center'}}
                onPress={() => setModalVisible(false)}>
                Done
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: 'black', fontSize: 20}}>Upcoming Periods:</Text>
        <Text
          style={{color: 'black', fontSize: 15, marginVertical: 10}}
          onPress={() => setModalVisible(true)}>
          ⚙
        </Text>
      </View>
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
