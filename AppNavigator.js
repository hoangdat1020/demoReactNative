import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-ionicons';
import Category from './screens/Category';
import Categories from './screens/Categories';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Settings from './screens/Settings';

const color = {
  ACTIVE: '#147efb',
  INACTIVE: '#ccc'
}

const CategoryStack = createStackNavigator({
  Categories,
  Category
});
CategoryStack.navigationOptions = {
  tabBarLabel: 'Home',// thay doi gia tri mac dinh  ban dau la categoryStack
  tabBarIcon: ({ focused }) => {
    return <Icon name="ios-planet"
      size={36}
      color={focused ? color.ACTIVE : color.INACTIVE}
    />
  }
};
const CartStack = createStackNavigator({
  Cart
});
CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => {
    return <Icon name="ios-cart"
      size={36}
      color={focused ? color.ACTIVE : color.INACTIVE}
    />
  }
};
const OrderStack = createStackNavigator({ Orders });
OrderStack.navigationOptions = {
  tabBarLabel: 'Orders',
  tabBarIcon: ({ focused }) => {
    return <Icon name="ios-wallet"
      size={36}
      color={focused ? color.ACTIVE : color.INACTIVE}
    />
  }
};
const SettingStack = createStackNavigator({ Settings });
SettingStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => {
    return <Icon name="ios-cog"
      size={36}
      color={focused ? color.ACTIVE : color.INACTIVE}
    />
  }
};

const AppNavigator = createBottomTabNavigator({
  CategoryStack,
  CartStack,
  OrderStack,
  SettingStack
})

export default AppNavigator;