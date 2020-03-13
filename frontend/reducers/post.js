import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST, RECEIVE_ALL_POSTS, POST_IMAGE } from '../actions/post';

const PostReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch(action.type){
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      nextState[action.postId] = action.post;
      return nextState;
    case POST_IMAGE:
      nextState[action.post.id] = action.post;
      return nextState;
    case RECEIVE_ALL_POSTS:
      return action.all_posts;
    case REMOVE_POST:
      nextState = Object.assign({}, state);
      delete nextState[action.postId];
      return nextState;
    default:
      return state;
  }
};

export default PostReducer;