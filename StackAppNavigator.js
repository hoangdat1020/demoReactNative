import AppNavigator from './AppNavigator';
import Login from './screens/Login';
import Register from './screens/Register';

import {createStackNavigator} from 'react-navigation-stack';

const StackAppNavigator = createStackNavigator(
  {
    Login,
    Register,
    AppNavigator
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);
export default StackAppNavigator;
