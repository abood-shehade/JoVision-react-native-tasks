import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, Image, StyleSheet, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Screen3 = () => {
  const [photos, setPhotos] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

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

  useEffect(() => {
    fetchPhotos();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchPhotos().then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.path}
        renderItem={({ item }) => (
          <Image source={{ uri: 'file://' + item.path }} style={styles.image} />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListEmptyComponent={<Text style={styles.emptyText}>No photos found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
});

export default Screen3;
