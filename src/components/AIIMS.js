import  React, {Component}  from 'react';
import {View,StyleSheet,Text,Button,ScrollView,Row,Image} from 'react-native';
import { directive } from '@babel/types';
import { Directions, TouchableOpacity } from 'react-native-gesture-handler';


export default class AIIMS extends React.Component {
      constructor(props){
            super(props)
          }
         
  state={isdisplayed:false}
  handlePress=(AIIMS)=>{
    <AIIMS/>
    return(
      
     this.render(props.AIIMS) 
    )
    
  };
  render() {
    return (
          
      <View style={styles.container}>
            <View style={{height:170,width:426,alignContent:"center",alignItems:'center'}}>
                    <View style={{marginLeft:10,marginRight:10,marginTop:10,padding:40,height:70,width:370,backgroundColor:'powderblue',alignContent:"center",alignItems:'center',justifyContent:'center'}}>
                              <Text>
                                Topic wise collection of question and test series.
                              </Text>
                              <Text style={{alignContent:'space-around'}}>
                                          26500+
                              </Text>

                    </View>
                      <View>
                      <Text style={{color:'black',fontSize:18,alignItems:'flex-start'}}> Chapters Completed  </Text>
                    <Text style={{color:'black',fontSize:30,alignItems:'flex-end',fontWeight:'bold'}}> 0/25  </Text>
           
                      </View>
                    
            </View>
      <ScrollView>     
          <View style={[styles.boxContainer]}>
              
            <View style={{height:70,width:426,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./biochemistry.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center',}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text> 
                      <TouchableOpacity 
                      
                      onPress={<AIIMS/>} >
                        <Text>
                          AIIMS Essence
                        </Text>
                      </TouchableOpacity>
                      <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center',alignItems:'flex-start'}}>
                            0/70 Chapters completed 
                      </Text>


                  </View>
            </View>

            <View style={{height:70,width:300,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./biochemistry.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center'}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text>
                      <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center',alignItems:'flex-start'}}>
                            0/70 Chapters completed 
                      </Text>


                  </View>
            </View>
            <View style={{height:70,width:300,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./biochemistry.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center'}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text>
                      <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center',alignItems:'flex-start'}}>
                            0/70 Chapters completed 
                      </Text>


                  </View>
            </View>
            <View style={{height:70,width:300,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./biochemistry.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center'}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text>
                      <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center',alignItems:'flex-start'}}>
                            0/70 Chapters completed 
                      </Text>


                  </View>
            </View>
            <View style={{height:70,width:300,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./biochemistry.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center'}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text>
                      <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center',alignItems:'flex-start'}}>
                            0/70 Chapters completed 
                      </Text>


                  </View>
            </View>
            <View style={{height:70,width:300,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./biochemistry.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center'}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text>
                      <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center',alignItems:'flex-start'}}>
                            0/70 Chapters completed 
                      </Text>


                  </View>
            </View>
            <View style={{height:70,width:300,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./biochemistry.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center'}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text>
                      <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center',alignItems:'flex-start'}}>
                            0/70 Chapters completed 
                      </Text>


                  </View>
            </View>
            <View style={{height:70,width:300,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./biochemistry.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center'}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text>
                      <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center',alignItems:'flex-start'}}>
                            0/70 Chapters completed 
                      </Text>


                  </View>
            </View>
            <View style={{height:70,width:300,flexDirection:'row'}}>
                  <View>
                  <Image style={{height:20,width:50,resizeMode:'contain',alignItems:'flex-end'}} source={require('./biochemistry.png')} />
                 
                  </View>
                  <View style={{alignContent:'stretch',alignItems:'center'}}>
                      <Text  style={{fontSize:18,fontWeight:'bold'}}>
                            AIIMS Essence(2016-2013)
                      </Text>
                      <Text  style={{fontSize:12,backfaceVisibility:'visible',alignItems:'center',alignItems:'flex-start'}}>
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
   // justifyContent: 'center', 
    //alignItems: 'center',
    //backgroundColor: '#F5FCFF',
   
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
   
/*  textContent:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
  },*/
  header:{
    backgroundColor:'white',
  }
})