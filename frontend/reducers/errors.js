import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors";

const errorReducer = combineReducers({
  sessionErrors: sessionErrorsReducer
});

export default errorReducer;