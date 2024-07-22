import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} 
        style={styles.video}
        poster="https://assets.dryicons.com/uploads/icon/svg/6598/99fb44c0-d63b-4e47-af7c-2ef3a5805211.svg"
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
