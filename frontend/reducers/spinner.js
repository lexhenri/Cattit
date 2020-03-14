import { SHOW_SPINNER, HIDE_SPINNER } from '../actions/spinner';

export default function spinnerReducer(state = null, action) {
  switch (action.type) {
    case SHOW_SPINNER:
      return action.loading;
    case HIDE_SPINNER:
      return null;
    default:
      return state;
  }
}