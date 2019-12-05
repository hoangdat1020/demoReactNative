/* eslint-disable no-return-assign */
/* eslint-disable no-fallthrough */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import * as types from '../constants/ActionType';

const initialState = [];
const cart = (state = initialState, action) => {
  let arr = [...state];
  const {product, quantity} = action;
  let index = -1;
  let id = 0;
  switch (action.type) {
    case types.ADD_TO_CART:
      index = findProduct(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity
        });
      }
      return [...state];
    case types.SUB_TO_CART:
      index = findProduct(state, product);
      if (index !== -1) {
        id = state[index].product.id;

        state[index].quantity -= quantity;
        if (state[index].quantity === 0) {
          arr = state.filter(item => item.product.id !== id);
          return arr;
        }
      }
      return [...state];
    case types.REMOVE_ALL:
      return (state = []);
    default:
      return [...state];
  }
};

const findProduct = (cart, product) => {
  let index = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};

export default cart;
