import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function DailyJournal() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 20}}>Daily Journal:</Text>
      {/* button to add '+' */}
      <Text style={styles.button}>+</Text>
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
