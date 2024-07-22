import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Task16 = () => {
  const [showName, setShowName] = useState(false);
  const toggleName = () => {
    setShowName(!showName); 
  };

  return (
    <View style={styles.container}>
      <Button title={showName ? 'Hide' : 'Show'} onPress={toggleName} />
      {showName && <Text style={styles.nameText}>Abdelrahman</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default Task16;
