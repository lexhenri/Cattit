import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST, RECEIVE_ALL_POSTS, POST_IMAGE } from '../actions/post';
import { RECEIVE_UPDOOT, RECEIVE_DOWNDOOT, DESTROY_UPDOOT, DESTROY_DOWNDOOT  } from '../actions/updoots';

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
    case RECEIVE_UPDOOT:
      nextState[action.updoot.post_id].updoots.push(action.updoot);
      return nextState;
    case RECEIVE_DOWNDOOT:
      nextState[action.downdoot.post_id].downdoots.push(action.downdoot);
      return nextState;
    case DESTROY_UPDOOT:
      nextState[action.updoot.post_id].updoots = nextState[action.updoot.post_id].updoots.filter((updoot) =>
        updoot.id !== action.updoot.id)
      return nextState
    case DESTROY_DOWNDOOT:
      nextState[action.downdoot.post_id].downdoots = nextState[action.downdoot.post_id].downdoots.filter((downdoot) =>
        downdoot.id !== action.downdoot.id)
      return nextState
    default:
      return state;
  }
};

export default PostReducer;

//  case RECEIVE_UPDOOT:
// nextState = Object.assign({}, state);
// nextState[action.updoot.post_id].updoots.push(action.updoot);
// return nextState;
//     case RECEIVE_DOWNDOOT:
// nextState = Object.assign({}, state);
// nextState[action.downdoot.post_id].downdoots.push(action.downdoot);
// return nextState;
//     case DESTROY_UPDOOT:
// nextState = Object.assign({}, state);
// delete nextState[action.updoot.post_id].updoots.find(updoot => updoot.id === action.updoot.id)
// // nextState[action.updoot.post_id].updoots.filter((updoot) => 
// //   updoot.id !== action.updoot.id);
// return nextState;
//     case DESTROY_DOWNDOOT:
// nextState = Object.assign({}, state);
// nextState[action.downdoot.post_id].downdoots.filter((downdoot) =>
//   downdoot.id !== action.downdoot.id)
// return nextState