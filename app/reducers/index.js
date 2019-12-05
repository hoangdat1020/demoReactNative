import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';
import user from './user';
import order from './order';

const appReducers = combineReducers({
  products,
  cart,
  user,
  order
});
export default appReducers;
