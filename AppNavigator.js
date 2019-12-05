import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-ionicons';
import Category from './screens/Category';
import Categories from './screens/Categories';
import CartS from './screens/Cart';
import OrderS from './screens/Orders';
import SettingS from './screens/Settings';
import CartIcon from './app/components/CartIcon';
import Details from './screens/Details';
const Home = createStackNavigator(
  {
    Categories: {
      screen: Categories,
      navigationOptions: {
        title: 'Home'
      }
    },
    Category,
    Details
  },
  {
    navigationOptions: {
      header: null
    }
  }
);
const Cart = createStackNavigator({
  Cart: CartS,
  Details
});
const Orders = createStackNavigator({
  Orders: OrderS,
  Details
});
const Settings = createStackNavigator({
  Settings: SettingS
});

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;

  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-planet`;
  } else if (routeName === 'Settings') {
    iconName = `ios-options`;
  } else if (routeName === 'Cart') {
    iconName = `ios-cart`;
    return <CartIcon tintColor={tintColor} />;
  } else if (routeName === 'Orders') {
    iconName = `ios-wallet`;
  }

  return <Icon name={iconName} size={25} color={tintColor} />;
};

const AppNavigator = createBottomTabNavigator(
  {
    Home,
    Cart,
    Orders,
    Settings
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: '#147efb',
      inactiveTintColor: '#ccc'
    }
  }
);
export default AppNavigator;
