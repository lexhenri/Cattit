import { RECEIVE_UPDOOT, DESTROY_UPDOOT } from '../actions/updoots';

const UpdootReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_UPDOOT:
      return action.post.updoot = action.updoot;
    case DESTROY_UPDOOT:
      return nextState.post.updoot = action.updoot;
    default:
      return state;
  }
};