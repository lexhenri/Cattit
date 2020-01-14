import { RECEIVE_SUBCATTIT, RECEIVE_ALL_SUBCATTITS, RECEIVE_ERROR, CLEAR_ERROR } from '../actions/subcattit';

const subcattitReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch(action.type){
    case RECEIVE_ALL_SUBCATTITS:
      return action.subcattits;
    case RECEIVE_SUBCATTIT:
      nextState[action.subcattit.name] = action.subcattit;
      return nextState;
    case RECEIVE_ERROR:
      return action.error;
    case CLEAR_ERROR:
      action.error = {};
      return action.error;
    default:
      return state;
  }
}

export default subcattitReducer;