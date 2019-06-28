import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import All from './All';
import Completed from './Completed.js';
import Paused from './Paused.js';

class Screen1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> "All" component here </Text>
      </View>
    );
  }
}

class Screen2 extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Screen2 </Text>
      </View>
    );
  }
}

class Screen3 extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class Screen4 extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class Screen5 extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

const AppNavigator = createMaterialTopTabNavigator(
  {
  ALL: All,
  GRAND: Completed,
  LATEST: Paused,
  TEST: All,
  }

);

const AppIndex = createAppContainer(AppNavigator);

export default AppIndex;
