import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

class MyClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
  }

  componentDidMount() {
    console.log('MyFunctionPage loaded');
  }

  componentWillUnmount() {
    console.log('MyFunctionPage unloaded');
  }

  handlechange = (text) => {
    this.setState({ inputText: text });
    this.props.onChangeText(text); 
  };

  render() {
    return (
      <View>
        <Text>Hello JoVision</Text>
        <TextInput
          style={{ height: 40, borderColor: 'black', borderWidth: 1, marginTop: 10, paddingHorizontal: 10 }}
          placeholder="Type something..."
          onChangeText={this.handlechange}
          value={this.state.inputText}
        />
      </View>
    );
  }
}

export default MyClassPage;
