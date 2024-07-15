import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MyClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedText: '',
    };
  }

  componentDidMount() {
    console.log('MyFunctionPage loaded');
  }

  componentWillUnmount() {
    console.log('MyFunctionPage unloaded');
  }

  updateText = (text) => {
    this.setState({ displayedText: text });
  };

  render() {
    return (
      <View>
        <Text>Hello JoVision</Text>
        <Text style={{ marginTop: 10 }}>{this.state.displayedText}</Text>
      </View>
    );
  }
}

export default MyClassPage;
