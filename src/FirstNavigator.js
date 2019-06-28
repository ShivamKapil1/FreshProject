import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen';
import LogInScreen from './Screens/InitialScreens/LogInScreen';
import SignUpScreen from './Screens/InitialScreens/SignUpScreen';

const RootStack = createStackNavigator(
  {
    LogInScreen: LogInScreen,
    HomeScreen: HomeScreen,
    SignUpScreen: SignUpScreen,
  },
  {
    initialRouteName: 'LogInScreen',
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
