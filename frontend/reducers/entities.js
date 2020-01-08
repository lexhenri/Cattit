import { combineReducers } from 'redux';
import userReducer from './user';


const entitiesReducer = combineReducers({
  users: userReducer,
});

export default entitiesReducer;

