import React, { useRef, useState } from 'react';
import { View, FlatList, Image, StyleSheet, Pressable, TextInput, Button, Alert } from 'react-native';

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

const Task29 = () => {
  const flatlist = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const handleScroll = () => {
    const idx = parseInt(inputValue);
    if (!isNaN(idx) && idx >= 1 && idx < images.length +1) {
      flatlist.current.scrollToIndex({ animated: true, index: idx -1 });
      setInputValue('');
    } else {
      Alert.alert('Invalid Index', 'Please enter a valid index!!');
    }
  };

  const showItem = ({ item }) => (
    <Pressable>
      <Image source={item} style={styles.image} />
    </Pressable>
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
  image: {
    width: 100,
    height: 100,
    margin: 5,
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

export default Task29;
