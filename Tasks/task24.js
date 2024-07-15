import React, { useState, useRef } from 'react';
import { View, TextInput } from 'react-native';
import MyFunctionPage from '../Components/component_task24';

const Task24 = () => {
  const [inputText, setInputText] = useState('');
  const childRef = useRef(null);

  const handleChangeText = (text) => {
    setInputText(text);
    childRef.current && childRef.current.updateText(text);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, borderColor: 'black', borderWidth: 1, paddingHorizontal: 10 }}
        placeholder="Type something..."
        onChangeText={handleChangeText}
        value={inputText}
      />
      <MyFunctionPage ref={childRef} />
    </View>
  );
};

export default Task24;

