import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,

  ul
} from 'react-native';
import {
  Button, CheckBox, Header, Icon, Picker, SearchBar, Card,
} from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown';

let data = [{
  value: 'NON',
}, {
  value: 'OUI',
}];
let camion = [{
  value: '1234TN123',
}, {
  value: '8888TN123',
}];
export default class NewEnquetteScreen extends React.Component {
  state = {
    checked: false
  };

  render() {
    return (
      <View>
        
        <Card title="Camion details">
          
        <Card><Text style={{ fontSize: 18, color: "#3399ff", textAlign: "center" }}>Choisir la  matricule du camion</Text></Card>
          <Dropdown
            label='matricule camion'
            data={camion}
          />
        <Card><Text style={{ fontSize: 18, color: "#3399ff", textAlign: "center" }}>Type d'enquete</Text></Card>
          <Dropdown
            label="Type d'enquete"
            data={camion}
          />
          <Card ><Text style={{ fontSize: 18, color: "#3399ff", textAlign: "center" }}>camion accidenté ? </Text></Card>

          <View style={{  flexDirection: 'row' }}>
            <View style={{ width: "50%", alignItems: "center" }}>
              <Icon style={{}}
                raised
                name='check'
                type='font-awesome'
                color='#00e600'
                onPress={() => console.log(this.props.test)} />
            </View>
            <View style={{ width: "50%", alignItems: "center" }}>
              <Icon
                raised
                name='minus-circle'
                type='font-awesome'
                color='#e62e00'
                onPress={() =>  this.props.navigation.navigate('MainTabNavigator')} />
            </View>
          </View>
        </Card>
      </View>
    )
  }

}