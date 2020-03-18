import { RECEIVE_SUBCATTIT, RECEIVE_ALL_SUBCATTITS, RECEIVE_ERROR, CLEAR_ERROR } from '../actions/subcattit';
import { OPEN_SHOW, CLOSE_SHOW } from '../actions/post_show';
import { RECEIVE_SUBSCRIBE, DESTROY_SUBSCRIBE } from '../actions/subscribe';

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
      if (!action.error) return state;
      return action.error;
    case CLEAR_ERROR:
      action.error = {};
      return action.error;
    case RECEIVE_SUBSCRIBE:
      nextState[action.subscribe.subcattit_name].subscribes.push(action.subscribe);
      return nextState;
    case DESTROY_SUBSCRIBE:
      nextState[action.subscribe.subcattit_name].subscribes = nextState[action.subscribe.subcattit_name].subscribes.filter((subscribe) =>
        subscribe.id !== action.subscribe.id)
      return nextState
    default:
      return state;
  }
}

export default subcattitReducer;