import { RECEIVE_SUBCATTIT, RECEIVE_ALL_SUBCATTITS, RECEIVE_ERROR, CLEAR_ERROR } from '../actions/subcattit';
import { OPEN_SHOW, CLOSE_SHOW } from '../actions/post_show';

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
    case OPEN_SHOW:
      return action.payload.subcattit;
    case CLOSE_SHOW:
      return {[action.subcattit.name]: action.subcattit}
    default:
      return state;
  }
}

export default subcattitReducer;