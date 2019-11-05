import * as types from "./../constants/ActionType";

var initialState = [];
const cart = (state = initialState, action) => {
  var arr = [...state];
  var { product, quantity } = action;
  var index = -1;
  var id = 0;
  switch (action.type) {
    case types.ADD_TO_CART:
      index = findProduct(state, product);
      if (index != -1) {
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
      if (index != -1) {
        id = state[index].product.id;
        console.log(id);
        state[index].quantity -= quantity;
        if (state[index].quantity === 0) {
          arr = state.filter(item => item.product.id != id);

          console.log(arr);
          return arr;
        }
      }
      return [...state];
    //
    default:
      return [...state];
  }
};

var findProduct = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};

export default cart;
