import React from 'react';
import { View, ScrollView } from 'react-native';
import { SharedProvider } from '../Components/shared_content_task38';
import ComponentTwo from '../Components/component_two_task38';

const Task38 = () => {
  return (
    <SharedProvider>
      <ScrollView>
        <View>
          <ComponentTwo />
          <ComponentTwo />
          <ComponentTwo />
          <ComponentTwo />
        </View>
      </ScrollView>
    </SharedProvider>
  );
};

export default Task38;
