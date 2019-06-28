import React ,{Component} from 'react';
//iport  React, {Component}  from 'react';
import {View,StyleSheet,Text,ScrollView,Button,Image,FlatList} from 'react-native';


export default class completedModules extends React.Component {
    constructor(props){
        super(props)
      }
     
  state={ isdisplayed:true}

render(){
    return(

        <View style={StyleSheet.absoluteFill}>

                <Text style={{fontSize:30,fontWeight:'bold'}}>
                    0 modules completed 
                </Text>
        </View>
    );
}}