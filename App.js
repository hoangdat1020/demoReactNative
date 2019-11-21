import React from 'react';
import {createAppContainer} from 'react-navigation';
import {Provider} from 'react-redux';
import AppNavigator from './AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './app/store/index';
import SplashScreen from 'react-native-splash-screen';
import StackAppNavi from './StackAppNavigator';
import SwiperO from './screens/SwiperO';
import IphoneX13 from './app/components/RegisLoginComponent/IphoneX13';
const AppContainer = createAppContainer(StackAppNavi);
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
