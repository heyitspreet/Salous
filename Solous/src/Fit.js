import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Water from './components/Water';
import BodyComp from './components/BodyComp';

export default function Fit() {
  return (
    <View style={styles.base}>
      <View style={styles.header}>
        <Text style={styles.heading2}>Metrics</Text>
        {/* add a symbol for hamburger menu */}
        <Text style={{color: 'black', fontSize: 30, margin: 10}}>⚙</Text>
      </View>
      {/* Water */}
      <Water />
      <BodyComp />
    </View>
  );
}

const styles = StyleSheet.create({
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
  heading3: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: '#000000',
    textAlign: 'center',
  },
  button: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
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
  container: {
    padding: 5,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  contHeading: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Water: {
    color: '#6a899f',
    fontWeight: '400',
    fontSize: 70,
  },
});
