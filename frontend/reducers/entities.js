import { combineReducers } from 'redux';
import userReducer from './user';
import postReducer from './post';
import subcattitReducer from './subcattit';
import frontpageReducer from './frontpage';


const entitiesReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  subcattits: subcattitReducer,
  frontpage: frontpageReducer
});

export default entitiesReducer;

