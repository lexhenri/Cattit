import { RECEIVE_ERROR, CLEAR_ERROR } from '../actions/subcattit';
import { HTTP_404_ERROR } from '../actions/errors';
import { push } from 'react-router-redux'


// const execute404 = (state, action) => {
//   push('/404');
//   return { ...state };
// }

const routingErrorReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign([], state);

  switch (action.type) {
    case RECEIVE_ERROR:
      return action.error
    // case HTTP_404_ERROR:
    //   return execute404(state, action);
    case CLEAR_ERROR:
      action.error = [];
      return action.error; //look into this
    default:
      return state;
  }
}

export default routingErrorReducer;