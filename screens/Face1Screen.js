
import { Text, Platform, Switch } from 'react-native';
import React from 'react';
import { View, AppRegistry, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
/*import { RNCamera } from 'react-native-camera';*/
import {
  ListItem,Button, CheckBox, Header, Icon, Picker, SearchBar, Card,
} from 'react-native-elements'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const title="Face 1";
var questions =[
  {
    question:"test 1 ?",
    propostionNamber:"b1"
  },
  {
    question:"test 2 ?",
    propostionNamber:"b2"
  }
];
var radio_props = [
  {label: 'A', value: 'A' ,buttonColor:"red"},
  {label: 'B', value: 'B' },
  {label: 'C', value: 'C' },
  {label: 'D', value: 'D' }

];

export default class Face1Screen extends React.Component {
  
  
  constructor(){
 
    super();
 
    this.state ={
       status:true
 
    }
  }

  ShowHideTextComponentView = () => {

    if (this.state.status == true) {
      this.setState({ status: false })
    }
    else {
      this.setState({ status: true })
    }
  }

  render() {

    return (

      <View style={styles.MainContainer}>
       <Card >
       <ListItem style= {{ fontSize: 25, color: "#000", textAlign: 'center' }} title="test test"/>
       <Switch
         onValueChange = {this.ShowHideTextComponentView}
         value = {this.state.status}/>
        </Card> 
      {
        
        this.state.status ? (
        <Card title="Camion details">
          {
            questions.map((l, i) => (
              <View key={i} >
              <ListItem style= {{ fontSize: 25, color: "#000", textAlign: 'center' }}  bottomDivider title={l.question}/>
              <RadioForm radio_props={radio_props}
         
          onPress={(value) => {this.setState({value:value})}}
          formHorizontal={true}
        /></View>
            ))
          }
         
        </Card>): null
      }
 
     
      
      </View>
    );
  }
}

const styles = StyleSheet.create({



});

AppRegistry.registerComponent('FaceS1creen', () => FaceS1creen);