// import * as types from './../constants/ActionType';

const initialState = [
  {
    id: 1,
    images: [
      {
        url:
          'https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png'
      }
    ],
    name: 'Snowboard',
    price: '5000000',
    category: 1
  },
  {
    id: 2,
    images: [
      {
        url:
          'https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png'
      }
    ],
    name: 'Snowboard',
    price: '5000000',
    category: 1
  },
  {
    id: 3,
    images: [
      {
        url:
          'https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png'
      }
    ],
    name: 'Snowboard2',
    price: '5000000',
    category: 2
  },
  {
    id: 4,
    images: [
      {
        url:
          'https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png'
      }
    ],
    name: 'Snowboard2',
    price: '5000000',
    category: 2
  }
];
const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
