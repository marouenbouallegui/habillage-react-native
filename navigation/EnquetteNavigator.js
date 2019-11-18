import {createAppContainer,navigate} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NewEnquetteScreen from '../screens/NewEnquetteScreen';
import EnquetteListScreen from '../screens/EnquetteListScreen';
import MainTabNavigator from '../navigation/MainTabNavigator';

const EnquetteListStack = createStackNavigator({
  EnquetteList: {screen: EnquetteListScreen},
  NewEnquette: {screen: NewEnquetteScreen},
  MainTabNavigator: {screen: MainTabNavigator},
},
{
  initialRouteName: 'EnquetteList',
});


const App = createAppContainer(EnquetteListStack);

export default App;