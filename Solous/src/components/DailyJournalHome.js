import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import DailyJournal from '../DailyJournal';

function GoToJournal() {
  const navigation = useNavigation();

  return (
    <Text style={styles.button} onPress={() => navigation.navigate('Journal')}>
      +{' '}
    </Text>
  );
}

export default function DailyJournalHome() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 20}}>Daily Journal:</Text>
      {/* button to add '+' */}
      <GoToJournal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
  },
  button: {
    color: 'black',
    fontSize: 20,
    borderRadius: 50,
  },
});
