import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MyClassPage from '../Components/component_task23';

const Task23 = () => {
  const [displayText, setDisplayText] = useState('');

  const handleChildTextChange = (text) => {
    setDisplayText(text);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Parent Component</Text>
      <Text>{displayText}</Text>
      <MyClassPage onChangeText={handleChildTextChange} />
    </View>
  );
};

export default Task23;
