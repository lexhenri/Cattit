import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';
import { RECEIVE_USER } from '../actions/user';

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {

    // case RECEIVE_CURRENT_USER:
    //   return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USER:
      return nextState[action.user.id] = action.user
    default:
      return state;
  }
};