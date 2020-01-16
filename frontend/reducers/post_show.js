import { OPEN_SHOW, CLOSE_SHOW } from '../actions/post_show';

export default function postShowReducer(state = null, action) {
  switch (action.type) {
    case OPEN_SHOW:
      return action.post;
    case CLOSE_SHOW:
      return null;
    default:
      return state;
  }
}