import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      action.errors = [];
      return action.errors;
    default:
      return state;
  }
};