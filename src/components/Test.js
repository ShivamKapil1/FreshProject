import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
//import { createAppContainer } from 'react-navigation';


import AppIndex from './Router';

//import { navigation } from 'react-navigation'
//import TestNavigator from './appContainerForTest';

//import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';


export default class Test extends Component {

  render() {
  return (
      <View style={{ flex: 1 }} >
          < AppIndex />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    }
})

//export  default class Test extends React.Component{
//  constructor(props){
//    super(props)
//    this.showPag =this.showPage.bind(this);
//  }

//showPage(id){
//  this.props.navigation.navigate()
//  }

//  render(){
    //const  {navigation} =this.props.navigation;

//    return(
//      <View style={{flex:1,flexDirection:'column'}}>
//          <Text> Relevant Data </Text>
//      </View>
//    )
//

//   }
//};
