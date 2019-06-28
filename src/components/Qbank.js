import  React, {Component}  from 'react';
import {View,StyleSheet,Text,Button,ScrollView,Row,Image} from 'react-native';
import { directive } from '@babel/types';
import { Directions } from 'react-native-gesture-handler';
import AIIMS from './AIIMS';



export default class Qbank extends React.Component {
         
  state={isdisplayed:false}
  render() {
    return (
          
      <View style={styles.container}>
            <View>      
                        <View style={{height:80,backgroundColor:'#6A1B9A',alignContent:'center',alignItems:'center'}}>
                                          <Text style={{fontSize:35     ,color:'white',fontWeight:'bold',marginTop:20}}>
                                                QBank 
                                          </Text>

                        </View>

                        <View style={{alignContent:"center",alignItems:'center',}}>
                              <View style={{flexDirection:'row',marginLeft:10,marginRight:10,marginTop:30,padding:40,height:70,width:370,backgroundColor:'#FF3D00',alignContent:"center",alignItems:'center',justifyContent:'center'}}>
                                          <View style={{flex:2}}>
                                          <Text style={{color:'white',fontSize:18}}>
                                          (Topic wise collection of Qbank+ test series)
                                          </Text>
                                          </View>
                                           <View style={{flex:1,backgroundColor:'white',borderRadius:80}}>     
                                          <Text style={{color:'black',fontSize:20}}>
                                          26500+
                                          </Text>
                                          </View>
                              </View>
                              <View style={{height:120,flexDirection:'row-reverse',alignContent:'space-around'}}>
                                          <View style={{flexDirection:'column'}}>
                                                      <Text style={{fontSize:30,color:'black'}}>
                                                            0/786 
                                                      </Text>
                                                      <Text style={{fontSize:18,color:'#757575'}} >
                                                            Chapters Completed 
                                                      </Text>
                                          </View>
                                          <View style={{flexDirection:'column'}}>
                                                <Text style={{fontSize:60,color:'white'}}>
                                                      |
                                                </Text>
                                           </View>
                                          <View style={{flexDirection:'column'}}>
                                                <Text style={{fontSize:30,color:'black'}}>
                                                      0
                                                </Text>
                                                <Text style={{fontSize:18,color:'#757575'}}>
                                                      Bookmarked MCQ
                                                </Text>

                                          </View>
                                        
                              </View>
                              
                        </View>
                        
            </View>
           
      <ScrollView>     
          <View style={[styles.boxContainer]}>
              
            <View style={{height:70,width:426,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./test.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center',}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text> 
                                            <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center'}}>
                            0/70 Chapters completed 
                      </Text>


                  </View>
            </View>

            <View style={{height:70,width:300,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./test.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center'}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text>
                      <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center'}}>
                            0/70 Chapters completed 
                      </Text>


                  </View>
            </View>
            <View style={{height:70,width:300,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./test.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center'}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text>
                      <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center'}}>
                            0/70 Chapters completed 
                      </Text>


                  </View>
            </View>
            <View style={{height:70,width:300,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./test.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center'}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text>
                      <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center',}}>
                            0/70 Chapters completed 
                      </Text>


                  </View>
            </View>
            <View style={{height:70,width:300,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./test.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center'}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text>
                      <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center'}}>
                            0/70 Chapters completed 
                      </Text>


                  </View>
            </View>
            <View style={{height:70,width:300,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./test.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center'}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text>
                      <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center'}}>
                            0/70 Chapters completed 
                      </Text>


                  </View>
            </View>
            <View style={{height:70,width:300,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./test.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center'}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text>
                      <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center'}}>
                            0/70 Chapters completed 
                      </Text>


                  </View>
            </View>
            <View style={{height:70,width:300,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./test.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center'}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text>
                      <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center'}}>
                            0/70 Chapters completed 
                      </Text>


                  </View>
            </View>
            <View style={{height:70,width:300,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./test.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center'}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text>
                      <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center'}}>
                            0/70 Chapters completed 
                      </Text>


                  </View>
            </View>
           
            
            
              
          </View>
            </ScrollView>
  
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