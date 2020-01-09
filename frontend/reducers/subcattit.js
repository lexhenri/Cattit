import { RECEIVE_SUBCATTIT } from '../actions/subcattit';

const subcattitReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch(action.type){
    case RECEIVE_SUBCATTIT:
      nextState[action.subcattit.id] = action.subcattit;
      return nextState;
    default:
      return state;
  }
}

export default subcattitReducer;