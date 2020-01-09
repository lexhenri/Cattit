import * as PostApiUtil from '../util/post_util';
import { receiveErrors, clearErrors } from './session';

export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REMOVE_POST = 'REMOVE_POST'

const receivePost = (post, subcattit) => ({
  type: RECEIVE_POST,
  post,
  subcattit
});

const receivePosts = (posts, subcattit) => ({
  type: RECEIVE_POSTS,
  posts,
  subcattit
})

const deletePost = (postId, subcattit) => ({
  type: REMOVE_POST,
  postId,
  subcattit
})

export const createNewPost = (post, subcattit) => dispatch => PostApiUtil.makePost(post, subcattit)
  .then((post, subcattit) => dispatch(receivePost(post, subcattit)), (errors) => dispatch(receiveErrors(errors.responseJSON)));

export const fetchPosts = (subcattit) => dispatch => PostApiUtil.getPosts(subcattit)
  .then(posts => dispatch(receivePosts(posts)));

export const fetchPost = (post, subcattit) => dispatch => PostApiUtil.getPost(subcattit, post)
  .then((subcattit, post) => dispatch(receivePost(post, subcattit)))

export const removePost = (postId, subcattit) => dispatch => PostApiUtil.removePost(subcattit, postId)
  .then(() => dispatch(deletePost(postId)));