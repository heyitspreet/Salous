import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function Water() {
  const [Water, setWater] = useState(0);
  function addWater() {
    setWater(Water + 0.2);
  }
  function subWater() {
    setWater(Water - 0.2);
  }

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.contHeading}>Water</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.Water}> {Water.toFixed(1)}L </Text>
          <View>
            <Text style={[styles.button, styles.heading3]} onPress={addWater}>
              +
            </Text>
            <Text
              style={styles.heading3}
              onPress={() => {
                setWater(0);
              }}>
              CUPS
            </Text>
            <Text style={[styles.button, styles.heading3]} onPress={subWater}>
              -
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 20,
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
