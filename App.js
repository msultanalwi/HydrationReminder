import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TimeInterval from './src/components/TimeInterval/TimeInterval';
import TotalDrinkWater from './src/components/TotalDrinkWater/TotalDrinkWater';

const App = () => {
  return (
    <View style={styles.container} backgroundColor="aqua">
      <Text style={styles.title}>Drink Reminder</Text>
      <TimeInterval />
      <TotalDrinkWater />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;
