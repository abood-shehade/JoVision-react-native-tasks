import React, { useState } from 'react';
import { View, Button, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import Display from '../Components/component_task26';

const Task26 = () => {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);

  const fetch_non_block = () => {
    axios.get('https://api.ipify.org?format=json')
      .then(response => {
        setIp(response.data.ip);
      })
      .catch(error => {
        console.error('Error fetching IP:', error);
      });
  };

  const fetch_block = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      setIp(response.data.ip);
    } catch (error) {
      console.error('Error fetching IP:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Display ip={ip} />
      <View style={styles.buttonContainer}>
        <Button title="Fetch IP (Non-blocking)" onPress={fetch_non_block} />
        <Button title="Fetch IP (Blocking)" onPress={fetch_block} />
      </View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default Task26;
