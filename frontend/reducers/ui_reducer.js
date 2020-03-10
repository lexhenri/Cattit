import { combineReducers } from 'redux';
import modalReducer from './modal';
import dropdownReducer from './dropdown';
import postShowReducer from './post_show';
import previewReducer from './preview';

const uiReducer = combineReducers({
  modal: modalReducer,
  dropdown: dropdownReducer,
  postShow: postShowReducer,
  preview: previewReducer,
})

export default uiReducer;