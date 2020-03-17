import { combineReducers } from 'redux';
import userReducer from './user';
import postReducer from './post';
import subcattitReducer from './subcattit';
import frontpageReducer from './frontpage';
// import updootReducer from './updoots';


const entitiesReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  subcattits: subcattitReducer,
  frontpage: frontpageReducer,
  // updoots: updootReducer
});

export default entitiesReducer;

