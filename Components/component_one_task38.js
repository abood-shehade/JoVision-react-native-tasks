import React, { Component } from 'react';
import { Text } from 'react-native';
import { SharedContext } from './shared_content_task38';

class ComponentOne extends Component {
  static contextType = SharedContext;

  render() {
    const { text } = this.context;
    return <Text>{text}</Text>;
  }
}

export default ComponentOne;