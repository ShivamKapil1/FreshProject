import {createAppContainer,createStackNavigator, createSwitchNavigator } from 'react-navigation';
  

import Completed from './Completed';
import Unattempted from './Unattempted';
import Paused from './Paused';
import All from './All';
import Free from './Free';


//const MainNavigator = createStackNavigator({

const MainNavigator=createSwitchNavigator({   
   Paused:{screen:Paused},
   All:{screen:All},
   Completed:{screen : Completed},  
   Unattempted:{screen : Unattempted},
   Free:{screen:Free}
  },
  {initialRouteName:'All'});
  

  const TestNavigator=createAppContainer(MainNavigator)

  export  default TestNavigator;

