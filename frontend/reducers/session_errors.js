import { RECEIVE_SESSION_ERRORS, RECEIVE_ERRORS } from '../actions/session';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, state, { error: action.errors });
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { error: action.errors });
    default:
      return state;
  }
};