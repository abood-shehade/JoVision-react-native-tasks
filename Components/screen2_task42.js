import React from 'react';
import { Text, View, Button } from 'react-native';

const Screen2 = ({ navigation }) => (
  <View style={styles.center}>
    <Text>Screen 2</Text>
    <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
    <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen3')} />
    <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen4')} />
  </View>
);

const styles = {
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Screen2;
