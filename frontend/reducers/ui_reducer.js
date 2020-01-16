import { combineReducers } from 'redux';
import modalReducer from './modal';
import dropdownReducer from './dropdown';
import postShowReducer from './post_show';

const uiReducer = combineReducers({
  modal: modalReducer,
  dropdown: dropdownReducer,
  postShow: postShowReducer
})

export default uiReducer;