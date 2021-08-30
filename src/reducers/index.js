import { combineReducers } from 'redux';
import userReducer from './user';
// import walletReducer from './wallet';

const rootReducer = combineReducers({ userReducer });

export default rootReducer;
