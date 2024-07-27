import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import TextComponent from '../Components/component_task36';


const Task36 = () => {
  const generateRandomWord = (length) => {
    let result = '';
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
    return result;
    };
  const randomTexts = Array.from({ length: 100 }, () => generateRandomWord(8));

  return (
    <SafeAreaView>
      <ScrollView>
        {randomTexts.map((text, index) => (
          <TextComponent key={index} text={text} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Task36;