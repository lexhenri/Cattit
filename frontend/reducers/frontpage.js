import { RECEIVE_FRONTPAGE } from '../actions/frontpage';

const FrontpageReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_FRONTPAGE:
      return action.frontpage;
    case RECEIVE_POST:
    default:
      return state;
  }
};

export default FrontpageReducer;
