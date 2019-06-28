import {createAppContainer,createStackNavigator} from 'react-navigation';
  //need to be customized

import Anatomy from './Anatomy';
import Zoology from './Zoology';


const HomeStack=createStackNavigator({

//const MainNavigator=createSwitchNavigator({   
  Anatomy:{screen:Anatomy},
  Zoology:{screen:Zoology},
  
  },
  {initialRouteName:'Anatomy'});
  

  const HomeNavigator=createAppContainer(HomeStack)

  export  default HomeNavigator;

