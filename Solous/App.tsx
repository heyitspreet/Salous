import {StyleSheet, Text, SafeAreaView, View, ScrollView} from 'react-native';
import DailyJournal from './components/DailyJournal';
import UpcomingPeriods from './components/UpcomingPeriods';
import React from 'react';

export default function App() {
  const Name = 'PREET';
  return (
    <SafeAreaView style={styles.base}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.heading}>HEY {Name}</Text>
          {/* add a symbol for hamburger menu */}
          <Text style={{color: 'black', fontSize: 30, margin: 15}}>|||</Text>
        </View>

        <DailyJournal />
        <UpcomingPeriods />

        <View style={styles.header}>
          <Text style={styles.heading2}>Fitness Data</Text>
          {/* add a symbol for hamburger menu */}
          <Text style={{color: 'black', fontSize: 30, margin: 10}}>⚙</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#000000',
    marginTop: 10,
    marginLeft: 20,
  },
  heading2: {
    fontSize: 30,
    fontFamily: 'Roboto',
    color: '#000000',
    marginTop: 10,
    marginLeft: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  base: {
    flex: 1,
    backgroundImage: 'linear-gradient(to bottom, #000000, #ffffff)',
  },
});
