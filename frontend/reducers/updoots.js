import { RECEIVE_UPDOOT, DESTROY_UPDOOT, RECEIVE_DOWNDOOT, DESTROY_DOWNDOOT } from '../actions/updoots';

const updootReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_UPDOOT:
      return action.post.updoots = action.updoots;
    case DESTROY_UPDOOT:
      nextState = Object.assign({}, state);
      delete nextState[action.posts.updoots];
      return nextState
    case RECEIVE_DOWNDOOT:
      return action.post.updoots = action.updoots;
    case DESTROY_DOWNDOOT:
      nextState = Object.assign({}, state);
      delete nextState[action.posts.downdoots];
      return nextState
    default:
      return state;
  }
};

export default updootReducer;