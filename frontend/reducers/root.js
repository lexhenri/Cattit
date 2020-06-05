import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import sessionReducer from './session';
import errorReducer from './errors';
import uiReducer from './ui_reducer';
import { i18nReducer } from 'react-redux-i18n';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorReducer,
  ui: uiReducer,
  i18n: i18nReducer
});