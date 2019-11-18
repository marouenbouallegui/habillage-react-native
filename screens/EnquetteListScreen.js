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
  Button, ListItem, Header, Icon, SocialIcon, SearchBar
} from 'react-native-elements'


var list = [
  {
    name: 'Amy Farha',

    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',

    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',

    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',

    subtitle: 'Vice Chairman'
  },

]
function alert1() {
  alert("ok")
}
function newEnquette() {
  return (
    alert("add")
  )
}


export default class EnquetteListScreen extends React.Component {
 // const {navigate} = this.props.navigation;
  state = {
    search: '',
  };
  render() {
    return (
      <View>
        <ScrollView >
          
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                onPress={alert1}
                title={l.name}
                subtitle={l.subtitle}
                bottomDivider
              />
            ))
          }

          <Button
            title="nouvelle Enquete"
            onPress={() =>  this.props.navigation.navigate('NewEnquette')}
          />
        </ScrollView>
      </View>


    );
  }
 
}