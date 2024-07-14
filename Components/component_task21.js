import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const MyFunctionPage = () => {
  useEffect(() => {
    console.log('MyClassPage loaded');

    return () => {
      console.log('MyClassPage unloaded');
    };
  }, []);

  return (
    <View>
      <Text>Hello JoVision</Text>
    </View>
  );
};

export default MyFunctionPage;
