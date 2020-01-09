import { combineReducers } from 'redux';
import userReducer from './user';
import postReducer from './post';
import subcattitReducer from './subcattit';


const entitiesReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  subcattits: subcattitReducer
});

export default entitiesReducer;

