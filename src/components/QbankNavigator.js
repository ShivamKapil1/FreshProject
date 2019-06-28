import {createAppContainer,createStackNavigator} from 'react-navigation';
//need to be customized  
import AIIMS  from './AIIMS';
import Completed from './AIIMS';
//import Unattempted from './Unattempted';
//import Paused from './Paused';
//import All from './All';
//import Free from './Free';


const QNavigator=createStackNavigator({

//const MainNavigator=createSwitchNavigator({   
   AIIMS:{screen:AIIMS},
  // All:{screen:All},
  
   //Completed:{screen:Completed},  
   //Unattempted:{screen:Unattempted},
   //Free:{screen:Free}, 
  },
  {initialRouteName:'AIIMS'});
  

  const QbankNavigator=createAppContainer(QNavigator)

  export  default  QbankNavigator;

