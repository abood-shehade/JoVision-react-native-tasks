import React from 'react';
import { Text, View } from 'react-native';

const Screen3 = () => (
  <View style={styles.center}>
    <Text>Screen 3</Text>
  </View>
);

const styles = {
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Screen3;
