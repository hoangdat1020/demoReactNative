import * as types from '../constants/ActionType';

export const actAddToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity
  };
};
export const actSubToCart = (product, quantity) => {
  return {
    type: types.SUB_TO_CART,
    product,
    quantity
  };
};
export const actAddToUser = (username, password) => {
  return {
    type: types.ADD_TO_PERSIST,
    username,
    password
  };
};
