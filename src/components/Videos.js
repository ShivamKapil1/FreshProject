import React ,{Component} from 'react';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {View,StyleSheet,Text,ScrollView,Button,Image,FlatList} from 'react-native';
//import GridLayout from 'react-native-layout-grid';


export default class Videos extends  React.Component {
  constructor(props){
    super(props)
  }
 
  state={ isdisplayed:true}
  render() {
    return (  
  <ScrollView style={{flex:1,backgroundColor:'white'}}>
  <View style={styles.container}>
           <View style={[styles.boxContainer,styles.bigheader]}>

                    <View style={{flex:1,flexDirection:'column'}}>
                            
                     </View>
                     
          
      
            </View>
         
           <View style={{height:70,width:426,backgroundColor:'powderblue',alignContent:'center',alignItems:'center',padding:20}}>
                      <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>
                            Videos Classes
                      </Text>
                      </View>

              
         
            
     <Grid>
        <Col>
           <Row>
                <View style={{height:160,width:180,flex:1,flexDirection:'column', margin:10,alignContent:"center",alignItems:'center'}}>
                          <View style={{height:30,width:180,flex:1,backgroundColor:'powderblue'}}>
                             <Image style={{height:30,width:30,flex:1,resizeMode:'contain',alignSelf:'center'}} source={require('./tick.png')} />     
                           </View >
                          <View  style={{flex:1,height:30,width:180,backgroundColor:'#FAFAFA'}}>
                          <Text style={styles.text} >
                              Saved Videos
                            </Text>

                          </View>
                                                      <View>

                          </View>
                </View>
           </Row>

            <Row>
                <View style={{height:160,width:180,flex:1,flexDirection:'column', margin:10,alignContent:"center",alignItems:'center'}}>
                          <View style={{height:30,width:180,flex:1,backgroundColor:'#EEEEEE'}}>
                          <Image style={{height:50,width:50,flex:1,resizeMode:'contain',alignSelf:'center'}} source={require('./anatomy.jpeg')} />     
                           
                          </View >
                          <View   style={{flex:1,height:30,width:180,backgroundColor:'#FAFAFA'}}>
                          <Text style={styles.text}>
                              Anatomy 
                              
                            </Text>

                          </View>
                                                      <View>

                          </View>
                </View>
           </Row>
           <Row>
                <View style={{height:160,width:180,flex:1,flexDirection:'column', margin:10,alignContent:"center",alignItems:'center'}}>
                          <View style={{height:30,width:180,flex:1,backgroundColor:'#EEEEEE'}}>
                          <Image style={{height:40,width:40,flex:1,resizeMode:'contain',alignSelf:'center'}} source={require('./physiology.jpeg')} />     
                           
                          </View >
                          <View   style={{flex:1,height:30,width:180,backgroundColor:'#FAFAFA'}}>
                          <Text style={styles.text}>
                              Physiology
                            </Text>

                          </View>
                                                      <View>

                          </View>
                </View>
           </Row>
           <Row>
                <View style={{height:160,width:180,flex:1,flexDirection:'column', margin:10,alignContent:"center",alignItems:'center'}}>
                          <View style={{height:30,width:180,flex:1,backgroundColor:'#EEEEEE'}}>
                          <Image style={{height:40,width:40,flex:1,resizeMode:'contain',alignSelf:'center'}} source={require('./microbiology.jpeg')} />     
                           
                          </View >
                          <View   style={{flex:1,height:30,width:180,backgroundColor:'#FAFAFA'}}>
                          <Text style={styles.text}>
                              Microbiology
                            </Text>

                          </View>
                                                      <View>

                          </View>
                </View>
           </Row>
           <Row>
                <View style={{height:160,width:180,flex:1,flexDirection:'column', margin:10,alignContent:"center",alignItems:'center'}}>
                          <View style={{height:30,width:180,flex:1,backgroundColor:'#EEEEEE'}}>
                          <Image style={{height:40,width:40,flex:1,resizeMode:'contain',alignSelf:'center'}} source={require('./community.png')} />     
                           
                          </View >
                          <View   style={{flex:1,height:30,width:180,backgroundColor:'#FAFAFA'}}>
                          <Text style={styles.text}>
                              Community medicines 
                            </Text>

                          </View>
                                                      <View>

                          </View>
                </View>
           </Row>
           <Row>
                <View style={{height:160,width:180,flex:1,flexDirection:'column', margin:10,alignContent:"center",alignItems:'center'}}>
                          <View style={{height:30,width:180,flex:1,backgroundColor:'#EEEEEE'}}>
                          <Image style={{height:40,width:40,flex:1,resizeMode:'contain',alignSelf:'center'}} source={require('./opthalmology.jpeg')} />     
                                                     </View >
                          <View   style={{flex:1,height:30,width:180,backgroundColor:'#FAFAFA'}}>
                          <Text style={styles.text}>
                              Opthalmology
                            </Text>

                          </View>
                                                      <View>

                          </View>
                </View>
           </Row>
              
            </Col>
            <Col>
            <Row>
                <View style={{height:160,width:180,flex:1,flexDirection:'column', margin:10,alignContent:"center",alignItems:'center'}}>
                          <View style={{height:30,width:180,flex:1,backgroundColor:'#EEEEEE'}}>
                          <Image style={{height:30,width:30,flex:1,resizeMode:'contain',alignSelf:'center'}} source={require('./lectureVideos.png')} />     
                           
                                </View >
                          <View   style={{flex:1,height:30,width:180,backgroundColor:'#FAFAFA'}}>
                          <Text style={styles.text}>
                              19 Free videos 
                            </Text>

                          </View>
                                                      <View>

                          </View>
                </View>
           </Row>
           <Row>
                <View style={{height:160,width:180,flex:1,flexDirection:'column', margin:10,alignContent:"center",alignItems:'center'}}>
                          <View style={{height:30,width:180,flex:1,backgroundColor:'#EEEEEE'}}>
                          <Image style={{height:40,width:40,flex:1,resizeMode:'contain',alignSelf:'center'}} source={require('./biochemistry.png')} />     
                           
                          </View >
                          <View   style={{flex:1,height:30,width:180,backgroundColor:'#FAFAFA'}}>
                          <Text style={styles.text}>
                              BioChemistry 
                            </Text>

                          </View>
                                                      <View>

                          </View>
                </View>
           </Row>
           <Row>
                <View style={{height:160,width:180,flex:1,flexDirection:'column', margin:10,alignContent:"center",alignItems:'center'}}>
                          <View style={{height:30,width:180,flex:1,backgroundColor:'#EEEEEE'}}>
                          <Image style={{height:40,width:40,flex:1,resizeMode:'contain',alignSelf:'center'}} source={require('./pharmacy.jpeg')} />     
                           
                          </View >
                          <View   style={{flex:1,height:30,width:180,backgroundColor:'#FAFAFA'}}>
                          <Text style={styles.text}>
                              Pharmacology
                            </Text>

                          </View>
                                                      <View>

                          </View>
                </View>
           </Row>
           <Row>
                <View style={{height:160,width:180,flex:1,flexDirection:'column', margin:10,alignContent:"center",alignItems:'center'}}>
                          <View style={{height:30,width:180,flex:1,backgroundColor:'#EEEEEE'}}>
                          <Image style={{height:40,width:40,flex:1,resizeMode:'contain',alignSelf:'center'}} source={require('./pathology.png')} />     
                           
                          </View >
                          <View   style={{flex:1,height:30,width:180,backgroundColor:'#FAFAFA'}}>
                          <Text style={styles.text}>
                              pathology
                            </Text>

                          </View>
                                                      <View>

                          </View>
                </View>
           </Row>
           <Row>
                <View style={{height:160,width:200,flex:1,flexDirection:'column',margin:10,alignContent:"center",alignItems:'center'}}>
                          <View style={{height:20,width:180,flex:1,backgroundColor:'#EEEEEE'}}>
                          <Image style={{height:40,width:40,flex:1,resizeMode:'contain',alignSelf:'center'}} source={require('./forensic.jpeg')} />     
                           
                          </View >
                          <View   style={{flex:1,height:30,width:180,backgroundColor:'#FAFAFA'}}>
                          <Text style={styles.text}>
                              Forensic Medicines
                            </Text>

                          </View>
                                                      <View>

                          </View>
                </View>
           </Row>
           <Row>
                <View style={{height:160,width:180,flex:1,flexDirection:'column', margin:10,alignContent:"center",alignItems:'center'}}>
                          <View style={{height:20,width:180,flex:1,backgroundColor:'#EEEEEE'}}>
                          <Image style={{height:40,width:40,flex:1,resizeMode:'contain',alignSelf:'center'}} source={require('./ENT.png')} />     
                                                     </View >
                          <View   style={{flex:1,height:30,width:180,backgroundColor:'#FAFAFA'}}>
                          <Text style={styles.text}>
                              ENT
                            </Text>

                          </View>
                                                      <View>

                          </View>
                </View>
           </Row>
           
          </Col>
     </Grid>  


          
            
      
     
  </View>
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
    
    backgroundColor:'#EEEEEE',
    
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
      backgroundColor:'#EEEEEE',
       
        },

        text:{
          fontWeight:'bold',
          fontSize:18,
          color:'black',
          
                 }


});

