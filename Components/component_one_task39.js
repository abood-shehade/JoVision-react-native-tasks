import React, { useState, useEffect } from 'react';
import { TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const ComponentOne = () => {
  const dispatch = useDispatch();
  const reduxText = useSelector(state => state.text);
  const [text, setText] = useState(reduxText);

  useEffect(() => {
    setText(reduxText);
  }, [reduxText]);

  const handleChangeText = (value) => {
    setText(value);
    dispatch({ type: 'SET_TEXT', payload: value });
  };

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={handleChangeText}
        placeholder="Enter some text"
      />
    </View>
  );
};

export default ComponentOne;
