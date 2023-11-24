import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SleepInfo({hoursOfSleep}) {
  const getSleepInfo = hours => {
    if (hours < 0) {
      hours = 0;
    }
    if (hours == null) {
      hours = 0;
    }
    if (hours < 6) {
      return (
        <Text style={styles.Text}>
          Getting less than 6 hours of sleep on a regular basis can have
          negative effects on your health and well-being: {'\n'}{'\n'}Fatigue - Lack
          of sleep makes you feel tired, sluggish, and unmotivated during the
          day. It reduces your cognitive performance and productivity. {'\n'}
          Weakened Immune System - Sleep deprivation compromises your immune
          system, making you more susceptible to infections and illnesses. Even
          a small loss of sleep can reduce the body's ability to fight off bugs.{' '}
          {'\n'}Weight Gain - Not getting enough sleep can disrupt hormones that
          regulate hunger and satiety. This causes increased appetite, sugar
          cravings, and higher risks of obesity over time. {'\n'}Heart Disease &
          Stroke - Chronic sleep loss is associated with higher blood pressure,
          cholesterol, and risk of cardiovascular disease over the long term.
          {'\n'}Diabetes - Studies show people getting less than 6 hours of
          sleep have a higher risk of developing diabetes compared to those
          getting 7-9 hours per night.{'\n'} Depressed Mood - Lack of sleep can
          exacerbate feelings of sadness, loneliness, anger, and generally
          create a negative outlook. It affects emotional regulation. {'\n'}
          Impaired Cognition - Sleep facilitates learning and memory encoding
          through neural recovery processes. Skimping on sleep degrades
          attention, working memory, decision making, and problem solving
          skills.
        </Text>
      );
    } else if (hours < 8) {
      return <Text style={styles.Text}>😆You're getting enough sleep.</Text>;
    } else {
      return (
        <Text style={styles.Text}>
          You're Sleeping Too much Here are some potential cons of oversleeping 🥲:
          {'\n'}{'\n'}
          Sluggishness - Oversleeping may make you feel groggy, sluggish, and
          tired rather than well-rested. It throws off your natural sleep-wake
          cycle.
          {'\n'}Mental Health Issues - Studies link oversleeping to an increased
          risk of depression and anxiety in some people. It can be a symptom of
          underlying mental health issues.
          {'\n'}Weight Gain - Getting excessive sleep is linked to changes in
          hormone levels including reduced leptin and elevated ghrelin, which
          can boost appetite and fat accumulation over time.
          {'\n'}Headaches - Sleeping too long and missing morning sunlight can
          trigger headaches or migraines in those prone to them. The lack of
          exposure to daylight signals the brain to constrict blood vessels.
          {'\n'}Heart Disease - Research indicates prolonged oversleeping is
          associated with a modest increase in risk of heart disease, stroke,
          diabetes and early death, especially in older adults.
          {'\n'}Poor Productivity - Oversleeping leads to late starts, rushed
          mornings and less time getting things done during the day. It reduces
          your personal and professional productivity levels.
          {'\n'}Weakened Immunity – Excessive time asleep may disrupt circadian
          rhythms and certain hormones, which can result in reduced immunity and
          frequent sickness.
        </Text>
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>{getSleepInfo(hoursOfSleep)}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1d1d1d',
  },
  Text: {
    fontSize: 20,
    margin: 10,
    color: 'white',
  },
});
