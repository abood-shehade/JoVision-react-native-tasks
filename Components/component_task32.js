import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} 
        style={styles.video}
        poster="https://www.w3schools.com/html/pic_trulli.jpg"
        posterResizeMode="cover"
        controls={true}
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
  video: {
    width: '100%',
    height: 300,
  },
});

export default VideoPlayer;
