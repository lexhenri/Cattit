import { RECEIVE_SUBCATTIT, RECEIVE_ALL_SUBCATTITS } from '../actions/subcattit';

const subcattitReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch(action.type){
    case RECEIVE_ALL_SUBCATTITS:
      return action.subcattits;
    case RECEIVE_SUBCATTIT:
      nextState[action.subcattit.name] = action.subcattit;
      return nextState;
    default:
      return state;
  }
}

export default subcattitReducer;