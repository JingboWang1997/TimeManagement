import { combineReducers } from 'redux';
import categoryReducer from './categoryReducers';
import uiStateReducer from './uiStateReducers';

export default combineReducers({
  categoryReducer,
  uiStateReducer
});