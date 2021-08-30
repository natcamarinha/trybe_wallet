// Esse reducer será responsável por tratar as informações da pessoa usuária

import { GET_USERNAME } from '../actions';

const INITIAL_STATE = {
  username: '',
  password: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_USERNAME:
    return {
      ...state,
      username: action.payload,
      password: action.payload,
    };
  default:
    return state;
  }
}

export default userReducer;
