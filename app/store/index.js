import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import appReducers from '../reducers/index';
import {createStore} from 'redux';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user']
};
const persistedReducer = persistReducer(persistConfig, appReducers);
const store = createStore(persistedReducer);
const persistor = persistStore(store);
export {store, persistor};
