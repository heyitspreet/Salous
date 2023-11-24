import {StyleSheet, Text, View, ScrollView} from 'react-native';
import DailyJournal from './components/DailyJournalHome';
import UpcomingPeriods from './components/UpcomingPeriods';
import Water from './components/Water';

import React from 'react';

export default function App() {
  const Name = 'PREET';

  //functions that returns daily period affirmation
  const getAffirmation = () => {
    //make bunch of them and select random based on the day
    let Affirmation = [
      'You are strong',
      'You are beautiful',
      'You are amazing',
      'You are a queen',
      'You are a goddess',
      'You are a badass',
      'You are a warrior',
      'You are a fighter',
      'You are a survivor',
      'You are a champion',
      'You are a winner',
      'You are a star',
      'You are a diamond',
      'You are a queen',
      'You are a goddess',
      'You are a badass',
      'You are a warrior',
      'You are a fighter',
      'You are a survivor',
      'You are a champion',
      'You are a winner',
      'You are a star',
      'You are a diamond',
    ];
    return Affirmation[Math.floor(Math.random() * Affirmation.length)];
  };

  return (
    <View style={styles.base}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.heading}>HEY {Name}</Text>
          {/* add a symbol for hamburger menu
          <Text style={{color: 'black', fontSize: 30, margin: 15}}>|||</Text> */}
        </View>

        <DailyJournal />
        <UpcomingPeriods />

        <View style={styles.header}>
          <Text style={styles.heading2}>Fitness Data</Text>
          {/* add a symbol for hamburger menu */}
          <Text style={{color: 'black', fontSize: 30, margin: 10}}>⚙</Text>
        </View>

        <Water />

        <View style={styles.header}>
          <Text style={styles.heading2}>Daily Affirmation</Text>
          {/* add a symbol for hamburger menu */}
          <Text
            style={{color: '#333333', fontSize: 20, margin: 10, marginTop: 20}}>
            view
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.heading3}>{getAffirmation()}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  base: {
    flex: 1,
    backgroundColor: '#ffffff',
    //backgroundImage: 'linear-gradient(to bottom, #000000, #ffffff)',
  },
});
