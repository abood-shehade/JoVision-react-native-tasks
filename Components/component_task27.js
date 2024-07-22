import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const DisplayImg = ({ selectedImage }) => {
  return (
    <View style={styles.container}>
      <Image source={selectedImage} style={styles.image} />
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
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default DisplayImg;

