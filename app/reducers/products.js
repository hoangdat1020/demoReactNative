/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-fallthrough */
/* eslint-disable no-shadow */
import * as types from '../constants/ActionType';

const initialState = [
  {
    id: 1,
    images: [
      {
        url:
          'https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png'
      }
    ],
    name: 'Snowboard1',
    price: '5000000',
    category: 1,
    state: false
  },
  {
    id: 2,
    images: [
      {
        url:
          'https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png'
      }
    ],
    name: 'Snowboard2',
    price: '5000000',
    category: 1,
    state: false
  },
  {
    id: 3,
    images: [
      {
        url:
          'https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png'
      }
    ],
    name: 'Snowboard3',
    price: '5000000',
    category: 2,
    state: false
  },
  {
    id: 4,
    images: [
      {
        url:
          'https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png'
      }
    ],
    name: 'Snowboard4',
    price: '5000000',
    category: 2,
    state: false
  }
];
const products = (state = initialState, action) => {
  const {product} = action;
  let index = -1;
  switch (action.type) {
    case types.LIKE_PRODUCT:
      index = findProduct(state, product);
      if (index !== -1) {
        state[index].state = !state[index].state;
      }
      return [...state];
    default:
      return [...state];
  }
};

const findProduct = (products, product) => {
  let index = -1;
  if (products.length > 0) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};

export default products;
