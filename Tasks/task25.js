import React, { useState, useRef } from 'react';
import { View, TextInput } from 'react-native';
import MyClassPage from '../Components/component_task25';

const Task25 = () => {
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
      <MyClassPage ref={childRef} />
    </View>
  );
};

export default Task25;
