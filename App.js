import React from 'react';
//import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './AppNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './app/store/index';
import SplashScreen from 'react-native-splash-screen';
import SwiperO from './screens/SwiperO';
import IphoneX13 from './app/components/RegisLoginComponent/IphoneX13';
// const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SwiperO />
          {/* <AppContainer /> */}
          {/* <IphoneX13 /> */}
        </PersistGate>
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'stretch',
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     paddingLeft: 16,
//     paddingRight: 16
//   }
// });