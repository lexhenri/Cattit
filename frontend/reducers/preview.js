import { OPEN_PREVIEW, CLOSE_PREVIEW } from '../actions/preview';

export default function previewReducer(state = null, action) {
  switch (action.type) {
    case OPEN_PREVIEW:
      return action.post;
    case CLOSE_PREVIEW:
      return null;
    default:
      return state;
  }
}