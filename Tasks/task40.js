import React, { Component } from 'react';
import { View, Button } from 'react-native';
import ComponentOne_t40 from '../Components/component_one_task40';
import { Provider } from 'react-redux';
import store from '../Components/store_task39';

class Task40 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  toggleVisibility = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  };

  render() {
    return (
      <Provider store={store}>
        <View>
          {this.state.isVisible && <ComponentOne_t40 />}
          <Button title="Toggle Component One" onPress={this.toggleVisibility} />
        </View>
      </Provider>
    );
  }
}

export default Task40;
