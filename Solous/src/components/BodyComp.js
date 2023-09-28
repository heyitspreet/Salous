import {StyleSheet, Text, View, Modal, TextInput} from 'react-native';
import React, {useState} from 'react';

export default function BodyComp() {
  const [weight, setWeight] = useState(75);
  const [height, setHeight] = useState(180);
  const [bmi, setBmi] = useState(0);
  const [calories, setCalories] = useState(0);
  const [age, setAge] = useState(18);
  const [activity, setActivity] = useState(1.2);

  const [modalWeightVisible, setModalWeightVisible] = useState(false);
  const [modalHeightVisible, setModalHeightVisible] = useState(false);

  const calculateBMI = () => {
    const bmi = (weight * 10000) / (height * height);
    setBmi(bmi);
  };

  const calculateCalories = () => {
    const calories = 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
    setCalories(calories);
  };

  function getButtonStyle(n) {
    if (activity === n) {
      return styles.button2Pre;
    } else {
      return styles.button2;
    }
  }

  function getBMIStyle() {
    if (bmi < 18.5) {
      return {color: '#d77471'};
    } else if (bmi < 25) {
      return {color: '#99c87a'};
    } else if (bmi < 30) {
      return {color: '#d7a971'};
    } else {
      return {color: '#d77171'};
    }
  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalWeightVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalWeightVisible(!modalWeightVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <View style={styles.container}>
            <Text style={styles.contHeading}> Weight </Text>
            <TextInput
              style={styles.inputField}
              onChangeText={setWeight}
              value={weight}
              placeholder="Enter Weight"
            />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text
                style={styles.button}
                onPress={() => {
                  setModalWeightVisible(!modalWeightVisible);
                }}>
                Done
              </Text>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalHeightVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalHeightVisible(!modalHeightVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <View style={styles.container}>
            <Text style={styles.contHeading}>Height</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={setHeight}
              value={height}
              placeholder="Enter Height"
            />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text
                style={styles.button}
                onPress={() => {
                  setModalHeightVisible(!modalHeightVisible);
                }}>
                Done
              </Text>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.container}>
        <View>
          <Text style={styles.contHeading}>Body Composition</Text>
        </View>
        <View style={styles.row}>
          <Text
            style={styles.Metric}
            onPress={() => {
              setModalWeightVisible(!modalWeightVisible);
            }}>
            {weight}
          </Text>
          <Text
            style={styles.Metric}
            onPress={() => {
              setModalHeightVisible(!modalHeightVisible);
            }}>
            {height}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.heading3}>Weight {'(KG)'}</Text>
          <Text style={styles.heading3}>Height {'(CM)'}</Text>
        </View>

        {/* Gender and Age input */}
        <View style={styles.row}>
          <View style={{justifyContent: 'center'}}>
            <TextInput
              style={styles.Metric2}
              onChangeText={setAge}
              value={age}
              placeholder="18"
            />
            <Text style={styles.heading3}> Age (years)</Text>
          </View>
          {/* Activity amount */}
          <View style={{justifyContent: 'center'}}>
            <View style={[styles.row, {marginTop: 27, marginBottom: 10}]}>
              <Text
                style={getButtonStyle(1.2)}
                onPress={() => setActivity(1.2)}>
                Low
              </Text>
              <Text
                style={getButtonStyle(1.3)}
                onPress={() => setActivity(1.3)}>
                Mid
              </Text>
              <Text
                style={getButtonStyle(1.4)}
                onPress={() => setActivity(1.4)}>
                High
              </Text>
            </View>
            <Text style={styles.heading3}>Activity Amount</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.contHeading}>Calculated Metrics</Text>
        </View>

        <View style={styles.row}>
          <Text style={[styles.Metric2, getBMIStyle()]}>{bmi.toFixed(1)}</Text>
          <Text style={[styles.Metric2, {color: '#ea335f'}]}>
            {(calories * activity).toFixed(1)}
          </Text>
        </View>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <Text style={styles.heading3}>BMI</Text>
          <Text style={styles.heading3}>Calories</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text
            style={styles.button}
            onPress={() => {
              calculateBMI();
              calculateCalories();
            }}>
            Calculate
          </Text>
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
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    fontSize: 15,
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
    backgroundColor: '#ffffff',
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
  Metric: {
    color: '#737373',
    fontWeight: '400',
    fontSize: 60,
    backgroundColor: '#ffffff',
  },
  inputField: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  Metric2: {
    fontWeight: '400',
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  button2: {
    textAlign: 'center',
    borderColor: 'black',
    color: 'black',
    borderWidth: 1,
    marginHorizontal: 2,
    borderRadius: 5,
    padding: 2,
    marginBottom: 10,
    fontSize: 15,
    width: 40,
  },
  button2Pre: {
    textAlign: 'center',
    borderColor: 'black',
    color: 'white',
    backgroundColor: 'black',
    borderWidth: 1,
    marginHorizontal: 2,
    borderRadius: 5,
    padding: 2,
    marginBottom: 10,
    fontSize: 15,
    width: 40,
  },
});
