import React, { forwardRef, useEffect, useState, useImperativeHandle } from 'react';
import { Text, View } from 'react-native';

const MyFunctionPage = forwardRef((xx, ref) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    console.log('MyFunctionPage loaded');
    return () => {
      console.log('MyFunctionPage unloaded');
    };
  }, []);

  useImperativeHandle(ref, () => ({
    updateText(text) {
      setDisplayedText(text);
    }
  }));

  return (
    <View>
      <Text>Hello JoVision</Text>
      <Text style={{ marginTop: 10 }}>{displayedText}</Text>
    </View>
  );
});

export default MyFunctionPage;

