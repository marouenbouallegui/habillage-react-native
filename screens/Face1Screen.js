
import { Text, Platform,Switch } from 'react-native';
import React from 'react';
import { View,AppRegistry,ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import {
  Button, CheckBox, Header, Icon, Picker, SearchBar, Card,
} from 'react-native-elements'
const title="Face 1";
var questions =[
  {
    question:"test 1 ?",
    propostionNamber:3
  },
  {
    question:"test 2 ?",
    propostionNamber:3
  }
];

export default class FaceS1creen extends React.Component {
  
  
  constructor(){
 
    super();
 
    this.state ={
       status:false
 
    }
  }
 
ShowHideTextComponentView = () =>{
 
  if(this.state.status == true)
  {
    this.setState({status: false})
  }
  else
  {
    this.setState({status: true})
  }
}
 
  render() {
  
    return (
 
      <View style={styles.MainContainer}>
       <Card >
         <Text>test test </Text>
       <Switch
         onValueChange = {this.ShowHideTextComponentView}
         value = {this.state.status}/>
        </Card> 
      {
        
        this.state.status ? (
        <Card title="Camion details">
          <Text style= {{ fontSize: 25, color: "#000", textAlign: 'center' }}> Hello Friends </Text>
        </Card>): null
      }
 
     
      
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 

 
});
 
AppRegistry.registerComponent('FaceS1creen', () => FaceS1creen);