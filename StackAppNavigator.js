import AppNavigator from './AppNavigator';
import Login from './screens/Login';
import Register from './screens/Register';
import {createStackNavigator} from 'react-navigation-stack';
import Details from './screens/Details';
const StackAppNavigator = createStackNavigator(
  {
    // Login,
    // Register,
    // Details,
    AppNavigator
  },
  {
    initialRouteName: 'AppNavigator',
    headerMode: 'none'
  }
);
export default StackAppNavigator;
