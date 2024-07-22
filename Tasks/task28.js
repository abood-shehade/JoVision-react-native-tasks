import React from 'react';
import { View, FlatList, Image, Alert, StyleSheet, Pressable } from 'react-native';

const images = [
  require('../Resources/img1.png'),
  require('../Resources/img2.png'),
  require('../Resources/img3.png'),
  require('../Resources/img4.png'),
  require('../Resources/img5.png'),
  require('../Resources/img6.png'),
  require('../Resources/img7.png'),
  require('../Resources/img8.png'),
  require('../Resources/img9.png'),
  require('../Resources/img10.png')
];

const Task28 = () => {
  const handlepress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };
  const showitem = ({ item, index }) => (
    <Pressable onPress={() => handlepress(index)}>
      <Image source={item} style={styles.image} />
    </Pressable>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={showitem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default Task28;
