import React, { Component } from 'react';
import {
  View,
  StyleSheet,Text,ScrollView,Button,Image,TouchableOpacity} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default class BookList extends Component {
  render(props) {
    return (
    <View>


      <View style={{
        height:70,
        width:426,
        backgroundColor:'white', alignItems:'flex-start',
        padding:20}}>
          <Text style={{ fontSize: 20, fontWeight: 'bold'}}>
                  {this.props.bookListName}
          </Text>
      </View>

      <ScrollView
      horizontal={true}
      style={{ flexDirection: 'row', flex: 1 }}>



          <Grid>
                        <Row>
                              <Row>
                              <View style={styles.gridContainer}>
                              <View style={{height:30,width:180}}>
                                   <Text>
                                        anatomy</Text>
                              </View>
                              <Image style={styles.imageStyle} source={require('./toDo.png')} />
                              <View>

                              </View>
                          </View>
                              </Row>

                              <Row>
                        <View style={styles.gridContainer}>
                              <View style={{height:30,width:180}}>
                                  <Text style={{fontSize:14}} >
                                  The anatomy of darwin
                                  </Text>
                              </View>
                              <Image style={styles.imageStyle} source={require('./toDo.png')} />
                              <View>

                              </View>
                        </View>
                              </Row>

                              <Row>
                        <View style={styles.gridContainer}>
                              <View style={{height:30,width:180}}>
                                  <Text style={{fontSize:14}} >
                                  The anatomy of darwin
                                  </Text>
                              </View>
                              <Image style={styles.imageStyle} source={require('./toDo.png')} />
                              <View>

                              </View>
                        </View>
                              </Row>

                              <Row>
                        <View style={styles.gridContainer}>
                              <View style={{height:30,width:180}}>
                                  <Text style={{fontSize:14}} >
                                  The anatomy of darwin
                                  </Text>
                              </View>
                              <Image style={styles.imageStyle} source={require('./toDo.png')} />
                              <View>

                              </View>
                        </View>
                              </Row>

                              <Row>
                        <View style={styles.gridContainer}>
                              <View style={{height:30,width:180}}>
                                  <Text style={{fontSize:14}} >
                                  The anatomy of darwin
                                  </Text>
                              </View>
                              <Image style={styles.imageStyle} source={require('./toDo.png')} />
                              <View>

                              </View>
                        </View>
                              </Row>

                              <Row>
                                  <View style={styles.gridContainer}>
                                      <View style={{height:30,width:180}}>
                                           <Text>
                                                anatomy</Text>
                                      </View>
                                      <Image style={styles.imageStyle} source={require('./toDo.png')} />
                                      <View>

                                      </View>
                                  </View>
                              </Row>

                        </Row>

          </Grid>


      </ScrollView>
    </View>

    );
  }
}


const styles = StyleSheet.create({
    container: {
          flex: 1,
        },
    boxContainer: {
          flex: 1,
        },
    bigheader: {
          flex: 3,
          backgroundColor: 'powderblue',
        },
    image: {
          height: 140,
          resizeMode: 'contain',
          justifyContent: 'space-between',
        },
    align: {
      flexDirection: 'row',
      flexWrap: 'wrap-reverse',

        },
    item: {
          height: 150,
          backgroundColor: '#CCCCCC',
          padding: 10,
        },
    gridContainer: {
          height: 250,
          width: 180,
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#CCCCCC',
          padding: 10,
          margin: 10,
          alignContent: 'center',
          alignItems: 'center'
        },
    imageStyle: {
             height: 70,
             width: 180,
             resizeMode: 'contain',
          },
    text: {
            fontSize: 18,
          }

});
