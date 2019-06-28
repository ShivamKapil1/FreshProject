import  React  from 'react';
import Home from './components/Home';
import Qbank from './components/Qbank';
import Test from './components/Test';
import Videos from './components/Videos';

import { BottomNavigation } from 'react-native-paper';

const GoToHome=()=>{
  return (<Home/>)
}
const GoToTest=()=>{
  return ( <Test/>)
}

const GoToQbank=()=>{
  return ( <Qbank/>)
}
const GoToVideos=()=>{
  return ( <Videos/>)
}

export default class HomeScreen extends React.Component {

 handleIndexChange=index=>this.setState({index});

 state={index:0,routes:[{key:'Home',title:'Home',icon:'home'},
                        {key:'Qbank',title:'Qbank',icon:'question-answer'},
                       {key:'Test',title:'Test',icon:'timer-off'},
                        {key:'Videos',title:'Videos',icon:"video-call"},
 ],};
renderScene=BottomNavigation.SceneMap({
  Home:GoToHome,
  Test:GoToTest,
  Qbank:GoToQbank,
  Videos:GoToVideos,

});

  render() {
    return (

       <BottomNavigation
  navigationState={this.state}
  onIndexChange={this.handleIndexChange}
  renderScene={this.renderScene}

       />

    )}
  }
