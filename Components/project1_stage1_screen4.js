import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const Screen4 = () => {
  const [photos, setPhotos] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const flatListRef = useRef(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const storedPhotos = await AsyncStorage.getItem('photos');
        if (storedPhotos) {
          setPhotos(JSON.parse(storedPhotos));
        }
      } catch (error) {
        console.error('Failed to fetch photos:', error);
      }
    };
    fetchPhotos();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && photos.length > 0) {
        currentIndex.current = (currentIndex.current + 1) % photos.length;
        flatListRef.current.scrollToIndex({ index: currentIndex.current, animated: true });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, photos]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const getItemLayout = (data, index) => (
    { length: width, offset: width * index, index }
  );

  const onScrollToIndexFailed = (info) => {
    const wait = new Promise(resolve => setTimeout(resolve, 500));
    wait.then(() => {
      flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
    });
  };

  return (
    <View style={styles.container}>
      {photos.length > 0 ? (
        <FlatList
          data={photos}
          keyExtractor={(item) => item.path}
          renderItem={({ item }) => (
            <Image source={{ uri: 'file://' + item.path }} style={styles.image} />
          )}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          ref={flatListRef}
          initialNumToRender={1}
          getItemLayout={getItemLayout}
          onScrollToIndexFailed={onScrollToIndexFailed}
        />
      ) : (
        <Text style={styles.emptyText}>No photos found</Text>
      )}
      <Button title={isPaused ? "Resume Slideshow" : "Pause Slideshow"} onPress={togglePause} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width,
    height: '100%',
    resizeMode: 'cover',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
});

export default Screen4;