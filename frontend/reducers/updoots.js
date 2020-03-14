import { RECEIVE_UPDOOT, DESTROY_UPDOOT, RECEIVE_DOWNDOOT, DESTROY_DOWNDOOT } from '../actions/updoots';

const updootReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_UPDOOT:
      return null;
    case DESTROY_UPDOOT:
      nextState = Object.assign({}, state);
      delete nextState[action.post.updoots];
      return nextState
    case RECEIVE_DOWNDOOT:
      return null;
    case DESTROY_DOWNDOOT:
      nextState = Object.assign({}, state);
      delete nextState[action.post.downdoots];
      return nextState
    default:
      return state;
  }
};

export default updootReducer;