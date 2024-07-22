import React, { useRef, useState } from 'react';
import { View, FlatList, Image, StyleSheet, Pressable, TextInput, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const imgs = [
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

const Task30 = () => {
  const flatlist = useRef(null);
  const [images, setImages] = useState(imgs);
  const [inputValue, setInputValue] = useState('');

  const handleScroll = () => {
    const idx = parseInt(inputValue);
    if (!isNaN(idx) && idx >= 1 && idx <= images.length) {
      flatlist.current.scrollToIndex({ animated: true, index: idx - 1 });
      setInputValue('');
    } else {
      Alert.alert('Invalid Index', 'Please enter a valid index!!');
    }
  };

  const remove_image = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const showItem = ({ item, index }) => (
    <View style={styles.imageContainer}>
      <Image source={item} style={styles.image} />
      <Pressable style={styles.icon} onPress={() => remove_image(index)}>
        <Icon name="close-circle-sharp" size={30} color="#4F8EF7" />
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatlist}
        data={images}
        renderItem={showItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="Enter index"
        />
        <Button title="Scroll" onPress={handleScroll} />
      </View>
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
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  icon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 100,
    marginRight: 10,
    textAlign: 'center',
  },
});

export default Task30;
