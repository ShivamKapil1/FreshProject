import  React, {Component}  from 'react';
import {View,StyleSheet,Text,Button,ScrollView,Row,Image} from 'react-native';
import { directive } from '@babel/types';
import { Directions } from 'react-native-gesture-handler';
import AIIMS from './AIIMS';



export default class Zoology extends React.Component {
  constructor(props){
    super(props)
  }
 
  state={isdisplayed:false}
    
  render() {
    return (
          
      <View style={styles.container}>
            <View style={{height:170,width:426,alignContent:"center",alignItems:'center'}}>
                    <View style={{marginLeft:10,marginRight:10,marginTop:10,padding:40,height:70,width:370,backgroundColor:'powderblue',alignContent:"center",alignItems:'center',justifyContent:'center'}}>
                              <Text>
                                Topic wise collection of test series.
                              </Text>
                              <Text style={{alignContent:'space-around'}}>
                                          26500+
                              </Text>

                    </View>
                      <View>
                      <Text style={{color:'black',fontSize:18,alignItems:'flex-start'}}> Test Completed  </Text>
                    <Text style={{color:'black',fontSize:30,alignItems:'flex-end',fontWeight:'bold'}}> 0/25  </Text>
           
                      </View>
                    
            </View>
     
     </View>
       
    );
  }
}




const styles=StyleSheet.create({
    container: {
    flex: 1,
  },
  boxContainer:{
    flex:1,
    alignContent:'center',

    justifyContent:'center',
  },
  content:{
    flex:1,
    justifyContent:'center',
    alignContent:'space-between',
  },
  header:{
    backgroundColor:'white',
  }
})