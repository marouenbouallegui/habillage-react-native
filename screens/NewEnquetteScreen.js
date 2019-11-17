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
        <Header
          placement="left"
          centerComponent={{ text: ' Neuvelle enquete', style: { color: '#fff' } }}
        />
        <Card title="Camion details">
          
          <Text style={{ fontSize: 18, color: "#3399ff", textAlign: "center" }}>{"\n"}Choisir la  matricule du camion{"\n"}</Text>
          <Dropdown
            label='matricule camion'
            data={camion}
          />
          <Text style={{ fontSize: 18, color: "#3399ff", textAlign: "center" }}>{"\n"}Type d'enquete{"\n"}</Text>
          <Dropdown
            label="Type d'enquete"
            data={camion}
          />
          <Text style={{ fontSize: 18, color: "#3399ff", textAlign: "center" }}>{"\n"}camion accidenté ? {"\n"}</Text>

          <View style={{  flexDirection: 'row' }}>
            <View style={{ width: "50%", alignItems: "center" }}>
              <Icon style={{}}
                raised
                name='check'
                type='font-awesome'
                color='#00e600'
                onPress={() => console.log('hello')} />
            </View>
            <View style={{ width: "50%", alignItems: "center" }}>
              <Icon
                raised
                name='minus-circle'
                type='font-awesome'
                color='#e62e00'
                onPress={() => console.log('hello')} />
            </View>
          </View>
        </Card>
      </View>
    )
  }

}