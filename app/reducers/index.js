import {combineReducers} from 'redux';
import products from './products';
import cart from './cart'
// import * as types from './../constants/ActionType';
const appReducers= combineReducers({
    products,
    cart
});
export default appReducers;