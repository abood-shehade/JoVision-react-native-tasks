import React, { useState, useCallback } from 'react';
import { ScrollView, SafeAreaView, RefreshControl } from 'react-native';
import TextComponent from '../Components/component_task36';

const Task37 = () => {
  const generateRandomWord = (length) => {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };
  const [randomTexts, setRandomTexts] = useState(Array.from({ length: 100 }, () => generateRandomWord(8)));
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setRandomTexts(Array.from({ length: 100 }, () => generateRandomWord(8)));
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{ padding: 10 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {randomTexts.map((text, index) => (
          <TextComponent key={index} text={text} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Task37;