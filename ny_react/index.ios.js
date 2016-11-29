import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import { CommonButton } from './custom-component';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

// Main Index
class RNApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <App value={0} onAddPressed={this._onAddPressed} />
      </Provider>
    )
  }

  _onAddPressed() {
    dispatch(addAction);
  }
}

// Counter Component
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0,
    }
  }
  render() {
    value = this.props.value;
    blockStyle = {
      backgroundColor: '#666',
      width: 100,
      height: 100,
      marginLeft: value,
      marginTop: value,
    };
    return (
      <View style={styles.container}>
        <View style={styles.row} >
          <CommonButton
            width={50}
            height={50}
            title={'+'}
            buttonPressed={this.addCount.bind(this)}
          />
          <CommonButton
            width={50}
            height={50}
            title={'-'}
            buttonPressed={this.minusCount.bind(this)}
          />
        </View>

        <View>
          <Text>total:{this.state.count}</Text>
        </View>

        <View style={styles.row}>
          <CommonButton
            width={100}
            height={50}
            title={'Redux +'}
            buttonPressed={this.addActionDispatch.bind(this)}
          />
          <CommonButton
            width={100}
            height={50}
            title={'Redux -'}
            buttonPressed={this.minusActionDispatch.bind(this)}
          />
        </View>

        <View style={blockStyle}>
        </View>
      </View>
    )
  }
  // Counter Add Method
  addCount() {
    this.setState({count: this.state.count + 1});
  }
  // Counter Minus Method
  minusCount() {
    this.setState({count: this.state.count - 1});
  }

  addActionDispatch() {
    this.props.dispatch(addAction);
  }

  minusActionDispatch() {
    this.props.dispatch({ type: '-' });
  }
}
Counter.propTypes = {
  value: React.PropTypes.number.isRequired,
  onAddPressed: React.PropTypes.func.isRequired,
};

// ---- Redux ----
// Action
const addAction = { type: '+' }

// Reducer
function counter(state = { count:0 }, action) {
  const count = state.count
  switch (action.type) {
    case '+':
      return { count: count + 1 };
    default:
      return {count: count - 1 };
  }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Connected Component
const App = connect(
  mapStateToProps
)(Counter)

// StyleSheet Variable
var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    height: 50,
  },
})

AppRegistry.registerComponent('RNApp', () => RNApp);
