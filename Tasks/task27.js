import React, { useState } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import DisplayImg from '../Components/component_task27';

const Task27 = () => {
  const [selectedImage, setSelectedImage] = useState(require('../Resources/img1.png'));

  const images = [
    require('../Resources/img1.png'),
    require('../Resources/img2.png'),
    require('../Resources/img3.png')
  ];

  const showAlert = () => {
    Alert.alert(
      "Choose an image",
      "pick a number 1, 2 or 3 to select image",
      [
        { text: "1", onPress: () => setSelectedImage(images[0]) },
        { text: "2", onPress: () => setSelectedImage(images[1]) },
        { text: "3", onPress: () => setSelectedImage(images[2]) },
        { text: "Cancel", style: "cancel" }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <DisplayImg selectedImage={selectedImage} />
      <Button title="Select Image" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default Task27;