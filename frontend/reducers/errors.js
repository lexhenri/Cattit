import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors";

const errorReducer = combineReducers({
  errors: sessionErrorsReducer
});

export default errorReducer;