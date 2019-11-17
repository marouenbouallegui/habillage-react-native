import {createAppContainer,navigate} from 'react-native-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NewEnquetteScreen from '../screens/NewEnquetteScreen';

const EnquetteNavigator = createStackNavigator({
  NewEnquette: {screen: NewEnquetteScreen},
 
});

const App = createAppContainer(EnquetteNavigator);

export default App;