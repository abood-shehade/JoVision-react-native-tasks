import React, { useEffect, useState } from 'react';
import { Text, View, TextInput } from 'react-native';

const MyFunctionPage = (props) => {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    console.log('MyFunctionPage loaded');
    return () => {
      console.log('MyFunctionPage unloaded');
    };
  }, []);

  const handlechange = (text) => {
    setInputText(text);
    props.onChangeText(text); 
  };

  return (
    <View>
      <Text>Hello JoVision</Text>
      <TextInput
        style={{ height: 40, borderColor: 'black', borderWidth: 1, marginTop: 10, paddingHorizontal: 10 }}
        placeholder="Type something..."
        onChangeText={handlechange}
        value={inputText}
      />
    </View>
  );
};

export default MyFunctionPage;
