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
import type { NavigationEventSubscription } from 'react-navigation';

type Props = {|
  navigation: NewEnquetteScreen,
|};

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

const {navigate} = this.props.navigation;
export default class EnquetteListScreen extends React.Component {
 // const {navigate} = this.props.navigation;
  state = {
    search: '',
  };
  render() {
    return (
      <View>
        <ScrollView >
          <Header
            placement="left"
            centerComponent={{ text: ' Enquette Liste', style: { color: '#fff' } }}
          />

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
            title="Go to Jane's profile"
            onPress={() =>  navigation.navigate('NewEnquetteScreen', { name: 'Jane' })}
          />
        </ScrollView>
      </View>


    );
  }
 
}