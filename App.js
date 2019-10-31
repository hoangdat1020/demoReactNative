import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';
import {createStore } from 'redux';
import appReducers from './app/reducers/index';
import {Provider} from 'react-redux';

const AppContainer = createAppContainer(AppNavigator);
const store = createStore(
  appReducers
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
    <AppContainer /> 
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  }
});