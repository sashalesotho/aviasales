import { combineReducers } from 'redux';

import filter from './filterReducer';
import mainReducer from './mainReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  mainReducer,
  filter,
  errorReducer,
});
