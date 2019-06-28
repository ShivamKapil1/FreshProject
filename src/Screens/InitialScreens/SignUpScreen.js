import React from 'react';
import { Button, View, Text } from 'react-native';
import CustomButton from './Button';
import Card from 'react-native-elements';
import Icon from 'react-native-vector-icons';

class SignUpScreen extends React.Component {
  render() {
    return (

    <View style={{ flex: 1, backgroundColor:'indigo'}}>

      <View style={{ flex: 2, justifyContent: 'center', alignItems:'center'}}>
          <Text style={{color:'white',fontWeight: 'bold', fontSize:35}}>SignUp</Text>
      </View>

      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'flex-start'}}>

        <View style={{marginBottom:30}}>
          <Text style={{color:'white',fontSize:15, fontWeight: 'bold'}}>
          Sign up with
          </Text>
        </View>

        <View style={{flexDirection:'row', justifyContent: 'center', marginBottom:25, marginTop:20}}>
            <View
                      style={styles.createLine}
            />

            <View>
              <Text style={styles.oR}>        or        </Text>
            </View>

            <View
                      style={styles.createLine}
            />

        </View>

        <CustomButton btnstyle= {styles.btnstyle}>
          <Text style={{color:'white'}}> I'm already a Member - Sign in </Text>
        </CustomButton>

        <CustomButton btnstyle= {styles.btnstyle2}>
          <Text style={{color:'white'}}> Create an account - Register </Text>
        </CustomButton>

      </View>

      <View style={{ flex: 1}} >
          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'flex-end'}}>
              <View style={{marginBottom: 8}}>
                <Text style={{color:'grey'}}>
                  By signing up, you agree to the
                </Text>
              </View>
              <Text style={{color:'white'}}>
              Terms of Use  |  Privacy Policy
              </Text>
          </View>
          <View style={{ flex: 2, alignItems: 'center', justifyContent: 'flex-end'}}>

          </View>
          <View style={{ flexDirection:'row'}}>
                <CustomButton
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                    btnstyle= {styles.iconButton1}>
                    <Text style={{color:'white',fontWeight: 'bold', fontSize: 22}}>G +</Text>
                </CustomButton>
                <CustomButton
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                    btnstyle= {styles.iconButton2}>
                    <Text style={{color:'white',fontWeight: 'bold', fontSize: 25}}>f</Text>
                </CustomButton>
                <CustomButton
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                    btnstyle= {styles.iconButton3}>
                    <Text style={{color:'white',fontWeight: 'bold',fontSize: 22}}>in</Text>
                </CustomButton>

          </View>
      </View>

    </View>

    );
  }
}

const styles= {

  createLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderColor: 'grey',
    width: 125,
    marginBottom: 8
  },
  oR: {
    fontSize: 20,
    color: 'white'
  },
  iconButton1:{
    width: 75,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'red',
    borderColor: 'white'

  },
  iconButton2:{
    width: 75,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'royalblue',
    borderColor: 'white'

  },
  iconButton3:{
    width: 75,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'dodgerblue',
    borderColor: 'white'

  },
  btnstyle: {
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
    borderColor: 'darkseagreen',
    backgroundColor: 'darkseagreen'
  },
  btnstyle2: {
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
    borderColor: 'white',
    backgroundColor: 'transparent'
  }


};

export default SignUpScreen;
