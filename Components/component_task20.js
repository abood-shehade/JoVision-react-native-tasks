import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MyClassPage extends Component {
    componentDidMount() {
        console.log('MyClassPage loaded');
      }
    
      componentWillUnmount() {
        console.log('MyClassPage unloaded');
      }
    
  render() {
    return (
      <View>
        <Text>Hello JoVision</Text>
      </View>
    );
  }
}

export default MyClassPage;
