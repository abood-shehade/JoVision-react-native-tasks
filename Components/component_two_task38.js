import React, { useContext } from 'react';
import { TextInput, View } from 'react-native';
import { SharedContext } from './shared_content_task38';
import ComponentOne from './component_one_task38';

const ComponentTwo = () => {
  const { text, setText } = useContext(SharedContext);

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Type here"
      />
      <ComponentOne />
    </View>
  );
};

export default ComponentTwo;