import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Display = ({ ip }) => {
  return (
    <Text style={styles.ipText}>
      {ip ? `Your IP: ${ip}` : 'Press a button to fetch your IP'}
    </Text>
  );
};

const styles = StyleSheet.create({
  ipText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Display;
