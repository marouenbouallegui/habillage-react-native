import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Face1Screen from '../screens/Face1Screen';
import Face2Screen from '../screens/Face2Screen';
import Face3Screen from '../screens/Face3Screen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const Face1Stack = createStackNavigator(
  {
    Face1: Face1Screen,
  },
  config
);

Face1Stack.navigationOptions = {
  tabBarLabel: 'Face 1',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

Face1Stack.path = '';

const Face2Stack = createStackNavigator(
  {
    Face2: Face2Screen,
  },
  config
);

Face2Stack.navigationOptions = {
  tabBarLabel: 'Face 2',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={ Platform.OS === 'ios'
    ? `ios-information-circle${focused ? '' : '-outline'}`
    : 'md-information-circle'} />
  ),
};

Face2Stack.path = '';

const Face3Stack = createStackNavigator(
  {
    Face3: Face3Screen,
  },
  config
);

Face3Stack.navigationOptions = {
  tabBarLabel: 'Face 3',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={ Platform.OS === 'ios'
    ? `ios-information-circle${focused ? '' : '-outline'}`
    : 'md-information-circle'} />
  ),
};

Face3Stack.path = '';

const tabNavigator = createBottomTabNavigator({
  Face1Stack,
  Face2Stack,
  Face3Stack,
});

tabNavigator.path = '';

export default tabNavigator;
