import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import VideoPlayer from '../Components/component_task32';

const Task32 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VideoPlayer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Task32;
