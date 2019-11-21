/* eslint-disable no-param-reassign */
/* eslint-disable no-fallthrough */
import * as types from '../constants/ActionType';
const initialState = [
  {
    username: null,
    password: null
  }
];
const user = (state = initialState, action) => {
  const {username, password} = action;
  switch (action.type) {
    case types.ADD_TO_PERSIST:
      if (username && password) {
        // state.push({
        //   username,
        //   password
        // });
        state[0].username = username;
        state[0].password = password;

        alert('OK');
      }
      return [...state];

    default:
      return [...state];
  }
};
export default user;
