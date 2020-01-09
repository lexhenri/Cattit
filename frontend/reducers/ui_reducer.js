import { combineReducers } from 'redux';
import modalReducer from './modal';
import dropdownReducer from './dropdown';

const uiReducer = combineReducers({
  modal: modalReducer,
  dropdown: dropdownReducer
})

export default uiReducer;