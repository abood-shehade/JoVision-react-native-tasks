// Screen1.js
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Camera, useCameraDevice, useCameraDevices } from 'react-native-vision-camera';
import { useIsFocused } from '@react-navigation/native';
import { PermissionsAndroid } from 'react-native';

const Screen1 = () => {
  const [photo, setPhoto] = useState(null);
  const camera = useRef(null);
  const isFocused = useIsFocused();
  const devices = useCameraDevices();
  const device = useCameraDevice('back');
  const [isCameraInitialized, setIsCameraInitialized] = useState(false);

  useEffect(() => {
    async function requestCameraPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Camera Permission",
            message: "This app needs access to your camera.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the camera");
        } else {
          console.log("Camera permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    }

    requestCameraPermission();
  }, []);

  const takePhoto = async () => {
    if (camera.current && device && isCameraInitialized) {
      const photo = await camera.current.takePhoto({
        qualityPrioritization: 'quality', // or 'speed'
      });
      setPhoto(photo);
    }
  };

  const savePhoto = () => {
    console.log('Photo saved:', photo?.path);
    setPhoto(null); // Return to camera
  };

  const discardPhoto = () => {
    console.log('Photo discarded:', photo?.path);
    setPhoto(null); // Return to camera
  };

  const onCameraInitialized = () => {
    setIsCameraInitialized(true);
  };

  if (photo) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: 'file://' + photo.path }} style={styles.preview} />
        <View style={styles.buttonContainer}>
          <Button title="Save Photo" onPress={savePhoto} />
          <Button title="Discard Photo" onPress={discardPhoto} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {device != null && isFocused ? (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isFocused}
          ref={camera}
          photo={true}
          onInitialized={onCameraInitialized}
        />
      ) : (
        <Text>Loading Camera...</Text>
      )}
      <Button title="Take Photo" onPress={takePhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  preview: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
});

export default Screen1;

