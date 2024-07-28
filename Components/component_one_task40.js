import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { connect } from 'react-redux';

class ComponentOne_t40 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.reduxText
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reduxText !== this.props.reduxText) {
      this.setState({ text: this.props.reduxText });
    }
  }

  handleChangeText = (value) => {
    this.setState({ text: value });
    this.props.setText(value);
  };

  render() {
    return (
      <View>
        <TextInput
          value={this.state.text}
          onChangeText={this.handleChangeText}
          placeholder="Enter some text"
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  reduxText: state.text
});

const mapDispatchToProps = (dispatch) => ({
  setText: (text) => dispatch({ type: 'SET_TEXT', payload: text })
});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne_t40);
