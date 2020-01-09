import { TOGGLE_DROPDOWN } from '../actions/dropdown';

export default function dropdownReducer(state = null, action) {
  switch (action.type) {
    case TOGGLE_DROPDOWN:
      return action.status;
    default:
      return state;
  }
}
