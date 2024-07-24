import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import User_inp from '../Components/component_task35';

const Task35 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const savedData = await AsyncStorage.getItem('userInfo');
        if (savedData) {
          const { name, age, country, timestamp } = JSON.parse(savedData);
          const now = new Date();
          const dataTimestamp = new Date(timestamp);
          const timeDiff = (now - dataTimestamp) / 1000; // time difference in seconds

          if (timeDiff < 60) {
            setName(name);
            setAge(age);
            setCountry(country);
          } else {
            // Clear old data if it's more than a minute old
            await AsyncStorage.removeItem('userInfo');
          }
        }
      } catch (e) {
        setError('Failed to load data');
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      const userInfo = {
        name,
        age,
        country,
        timestamp: new Date().toISOString(),
      };
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      setError(null);
    } catch (e) {
      setError('Failed to save data');
    }
  };

  return (
    <View style={styles.container}>
      <User_inp
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        country={country}
        setCountry={setCountry}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default Task35;