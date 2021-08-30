import { LOGIN_SUCCESS } from '../actions';

const INITIAL_STATE = { email: '' };

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default userReducer;
