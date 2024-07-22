import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MyClassPage from '../Components/component_task19';

const Task19 = () => {
  const [show_component, setshow_component] = useState(false);
  const toggle_hello = () => {
    setshow_component(!show_component); 
  };

  return (
    <View style={styles.container}>
      <Button title={show_component ? 'Hide' : 'Show'} onPress={toggle_hello} />
      {show_component && <MyClassPage /> }
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

export default Task19;