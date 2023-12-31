import {StyleSheet, SafeAreaView} from 'react-native';
import Home from './src/home';
import Fit from './src/Fit';
import DailyJournal from './src/DailyJournal';
import Reminders from './src/Reminders';
import Rem2 from './src/Rem2';
import Sleep from './src/Sleep';
import ChatbotPage from './src/ChatBotPage';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import GetHelp from './src/GetHelp';
import React from 'react';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation={false}>
      {/* <Drawer.Screen name="Rem2" component={Rem2} /> */}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Journal" component={DailyJournal} />
      <Drawer.Screen name="Fitness" component={Fit} />
      {/* <Drawer.Screen name="Reminders" component={Reminders} /> */}
      <Drawer.Screen name="AI Help" component={GetHelp} />
      <Drawer.Screen name="Chatbot" component={ChatbotPage} />
      <Drawer.Screen name="Sleep" component={Sleep} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.base}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
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
    backgroundColor: '#ffffff',
    backgroundImage: 'linear-gradient(to bottom, #000000, #ffffff)',
  },
});
