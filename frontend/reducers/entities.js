import { combineReducers } from 'redux';
import userReducer from './user';
import postReducer from './post';


const entitiesReducer = combineReducers({
  users: userReducer,
  posts: postReducer
});

export default entitiesReducer;

