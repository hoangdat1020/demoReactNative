/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import * as types from '../constants/ActionType';

const initialState = [];
const order = (state = initialState, action) => {
  const {data} = action;
  switch (action.type) {
    case types.ADD_TO_ORDER:
      if (data) {
        state = [...data];
      }
      return [...state];
    case types.REMOVE_ALL_ORDER:
      return (state = []);
    default:
      return [...state];
  }
};
export default order;
