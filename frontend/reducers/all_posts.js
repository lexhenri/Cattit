import { RECEIVE_ALL_POSTS } from '../actions/all_posts';

const AllPostsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    default:
      return state;
  }
};

export default AllPostsReducer;