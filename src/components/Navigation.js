import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Elements } from 'react-native-elements';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation';

import Home from './Home';
import Qbank from './Qbank';
import Test from './Test';
import Videos from './Videos';

export class Navigation extends React.Component {
  constructor(props){
    super(props)
  }
 
  static navigationOption = {
    title: 'Home',
             };

  render() {
    return (
             
 <View style={styles.container}>
           <View style={[styles.boxContainer,styles.boldContent]}>
           <Text> hello there </Text>
          </View>
          <View style={[styles.boxContainer,styles.contentdiv]}>
          <Text> hello again </Text>
        </View>
        <View style={[styles.boxContainer,styles.textContent]}>
        <Text> and here you are </Text>
        </View>
        </View>
  

          );
             }
            }




const styles=StyleSheet.create({
    container: {
    flex: 1,
   // justifyContent: 'center', 
    //alignItems: 'center',
    //backgroundColor: '#F5FCFF',
   
  },
  boxContainer:{
    flex:1,
    alignContent:'center',
    justifyContent:'center',
  },
  contentdiv:{
   
    backgroundColor:'#FFEEE4',
  },
  textContent:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
  },
})