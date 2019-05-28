/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Tabs from './app/router';

import { YellowBox } from 'react-native';
import _ from 'lodash';

// import { TabNavigator } from 'react-navigation';
// import HomeScreen from './app/components/HomeScreen';
// import ProfileScreen from './app/components/ProfileScreen';

// const Tabs = TabNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   Profile: {
//     screen: ProfileScreen,
//   }
// })

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};


class App extends Component {

  render() {
    return (
      <Tabs />
    )
  }
}

export default App;