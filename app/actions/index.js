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
export const actLikeProduct = product => {
  return {
    type: types.LIKE_PRODUCT,
    product
  };
};
export const actRemoveAll = () => {
  return {
    type: types.REMOVE_ALL
  };
};
export const actAddToOrder = data => {
  return {
    type: types.ADD_TO_ORDER,
    data
  };
};
export const actRemoveToOrder = () => {
  return {
    type: types.REMOVE_ALL_ORDER
  };
};
