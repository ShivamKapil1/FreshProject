import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
//import HomeScreen from './HomeScreen';
import AppContainer from './FirstNavigator.js';

export default class First extends React.Component {
  render() {

    return( <AppContainer />);
  }
}
