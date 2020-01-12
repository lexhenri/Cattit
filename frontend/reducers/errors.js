import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors";
import routingErrorReducer from './routing_errors';

const errorReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  routingErrors: routingErrorReducer
});

export default errorReducer;