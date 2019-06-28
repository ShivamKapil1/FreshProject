
import {FlatList,View,Text,Image} from 'react-native';
import React ,{Component} from 'react';
import {List, ListItem} from 'react-native-elements';



keyExtractor=(item,index)=>index.toString()
export default class Completed extends Component {


renderItem=({item})=>(
      <ListItem
       title={item.name}
       subtitle={item.completedModules}
        leftAvatar={{ source: require('./physiology.jpeg' ) }}
       badge={{ value:10, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}

       />

  )

 render(){
      const data=[
            {"id":1,"name":"Biochemistry","completedModules":"0/70 modules completed","picture":'./test.png'},

            {"id":1,"name":"Dermatology","completedModules":"0/70 modules completed","picture":'./test.png'},

            {"id":1,"name":"Radiology","completedModules":"0/70 modules completed","picture":'./test.png'},
            {"id":2,"name":"Medicine","completedModules":"0/70 modules completed","picture":'./test.png'},
            {"id":3,"name":"Surgery","completedModules":"0/70 modules completed","picture":'./test.png'},
            {"id":4,"name":"Pediatrics","completedModules":"0/70 modules completed","picture":'./test.png'},
            {"id":5,"name":"Orthopedics","completedModules":"0/70 modules completed","picture":'./test.png'},
            {"id":6,"name":"Biochemistry","completedModules":"0/70 modules completed","picture":'./test.png'},
            {"id":7,"name":"Biochemistry","completedModules":"0/70 modules completed","picture":'./test.png'},
        ]
     return(
<View>

            <FlatList
                keyExtractor={this.keyExtractor}
                data={data}
                renderItem={this.renderItem}
                   />




 </View>

     );
 }
}
