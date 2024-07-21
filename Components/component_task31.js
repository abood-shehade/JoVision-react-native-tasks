import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Duplicate_component = ({ onPress }) => {
  return (
    <Pressable style={styles.icon} onPress={onPress}>
      <Icon name="duplicate" size={30} color="#4F8EF7" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
});

export default Duplicate_component;