import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import useCurrentTime from '../Components/component_task34';

const Task34 = () => {
  const currentTime = useCurrentTime();
  const format_time = (date) => {
    return date.toLocaleTimeString();
  };
  const format_date = (date) => {
    return date.toLocaleDateString();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{format_time(currentTime)}</Text>
        <Text style={styles.dateText}>{format_date(currentTime)}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  timeContainer: {
    alignItems: 'center',
  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 24,
    marginTop: 10,
  },
});

export default Task34;