import React, { useState } from 'react';
import { View, Button } from 'react-native';
import ComponentOne from '../Components/component_one_task39';
import { Provider } from 'react-redux';
import store from '../Components/store_task39';

const Task39 = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Provider store={store}>
      <View>
        {isVisible && <ComponentOne />}
        <Button title="Toggle Component One" onPress={toggleVisibility} />
      </View>
    </Provider>
  );
};

export default Task39;
