import React from 'react';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {View,StyleSheet,Text,ScrollView,Image} from 'react-native';
import Booklist from './BookList';
import {Card} from 'react-native-elements';
export default class Home extends React.Component {
     constructor(props){
          super(props)
        }
       
  state={ isdisplayed:true}
  
  render() {

    return (  
  <ScrollView style={{flex:1}}>
  <View style={styles.container}>
           <View style={[styles.boxContainer,styles.bigheader]}>

                    <View style={{flex:1,flexDirection:'column'}}>
                            <View style={{flex:1,flexDirection:'column',backgroundColor:'#8E24AA'}}> 
                                             <View style={{backgroundColor:'#8E24AA'}}>
                                                  <Text>  </Text>

                                                  
                                                         <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold',color:'white'}}>
                                                                       DASHBOARD
                                                                  </Text>
                                                          
                                             </View>
                                              <View style={{backgroundColor:'white',alignItems:'center',resizeMode:'contain',borderRadius:20}}>
                                                           <View style={{flexDirection:'row-reverse',borderRadius:20}}>
                                                                  <View style={{flex:1,backgroundColor:'white',borderRadius:20}} >
                                                                      <Image style={{resizeMode:'center'}} source={require('./todo.jpeg')} />
                                                                 </View>
                                                        
                                                                  <View  style={{justifyContent:'space-between',backgroundColor:'white',flex:1,flexDirection:'row',borderRadius:20}}>
                                                                     <View style={{flexDirection:'column'}}> 
                                                                          <View style={{alignItems:'center',backgroundColor:'white',flex:1,flexDirection:'column',borderRadius:20}}>
                                                                           <Text style={{fontSize:25,color:'#81C784',fontWeight:'bold'}}>Chapters </Text>
                                                                           <Text style={{fontSize:25,color:'#81C784'}}> </Text>
                                                                     
                                                                           <Text style={{fontSize:85,color:'#81C784'}}>02 </Text>
                                                                     
                                                                            </View>

                                                                       </View>   
                                                                           <View style={{flexDirection:'column'}}>
                                                                            <View style={{alignSelf:'center',alignContent:'space-around',backgroundColor:'white',flex:1}}>
                                                                                <Text style={{fontSize:25}}>Books </Text>
                                                                            </View>
                                                                            </View>
                                                                      <View style={{borderRadius:20}}>

                                                                      </View>
                                                                           
                                                                  </View>
                                                            </View>
                                                            <View style={{alignItems:'stretch',backgroundColor:'#81C784'}}>

                                                                           <Text style={{fontSize:25,fontWeight:'bold',color:'white',alignItems:'center',}}>
                                                                                Total Completed 
                                                                           </Text>
                                                            </View>
                                              </View>
                                             
                          
                           </View>
                          
                                                  <Text>  </Text><Text>   </Text>

                                                           
                                                           
                                                         
                              </View>
                     
          
      
            </View>
         
         
     <Booklist bookListName="Suggested Books" />  
     <Booklist bookListName="Recommended Books" />
     <Booklist bookListName="Recent Books" />
     <Booklist bookListName="Popular Books" />
     <Booklist bookListName="Nice Books" />

  </View>

     <Card><Text>Videos</Text></Card>
     <Card><Text>Updates</Text></Card>
</ScrollView>
    );
  }
}

const styles=StyleSheet.create({
    container: {
    flex: 1,
   
  },
  boxContainer:{
    flex:1,
   },
  bigheader:{
    flex:3,
    
    backgroundColor:'#6A1B9A',
    
  },
  image:{
    height:140,
    resizeMode:'contain',
    justifyContent:'space-between',
    },
    align:{
      flexDirection:'row',
      flexWrap:'wrap-reverse',
    
    },
    item:{
      height:150,
      backgroundColor:'#CCCCCC',
      padding:10,
        },
        gridContainer:{
          height:250,
          width:180,
          flex:1,
          flexDirection:'column',
          backgroundColor:'#CCCCCC',
          padding:10,
          margin:10,
          alignContent:"center",
          alignItems:'center'
        },
        imageStyle:{
             height:70,
             width:180,
             resizeMode:'contain',
          },
          text:{
    fontSize:18,
    
  }



});

