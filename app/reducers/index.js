import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';
import user from './user';

const appReducers= combineReducers({
    products,
    cart,
    user

});
export default appReducers;