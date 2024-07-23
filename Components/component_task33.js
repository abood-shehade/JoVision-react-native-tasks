import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = ({ videoUri, posterUri }) => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  const handleVideoPress = () => {
    setIsPaused(!isPaused);
  };

  return (
    <TouchableWithoutFeedback onPress={handleVideoPress}>
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={{ uri: videoUri }}
          style={styles.video}
          poster={posterUri}
          posterResizeMode="cover"
          resizeMode="contain"
          paused={isPaused}
          controls={false} 
        />
        <View style={styles.overlay}>
          <Text style={styles.controlText}>
            {isPaused ? 'Tap to Play' : 'Tap to Pause'}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    position: 'relative',
    width: 300,
    height: 200,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlText: {
    color: '#FFF',
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
});

export default VideoPlayer;
