import React from 'react';
import { StyleSheet, View } from 'react-native';
import VideoPlayer from '../Components/component_task33';

const Task33 = () => {
  return (
    <View style={styles.container}>
      <VideoPlayer 
        videoUri="https://www.w3schools.com/html/mov_bbb.mp4" 
        posterUri="https://www.w3schools.com/html/pic_trulli.jpg" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

export default Task33;
