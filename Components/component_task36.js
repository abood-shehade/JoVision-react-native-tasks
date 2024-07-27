import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextComponent = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    margin: 10,
  },
});

export default TextComponent;