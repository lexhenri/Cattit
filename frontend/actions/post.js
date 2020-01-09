import { makePost, getPosts, getPost, removePost } from '../util/post_util';
import { receiveErrors, clearErrors } from './session';

export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REMOVE_POST = 'REMOVE_POST'

const receivePost = (subcattit, postId) => ({
  type: RECEIVE_POST,
  postId,
  subcattit
});

const receivePosts = (subcattit) => ({
  type: RECEIVE_POSTS,
  subcattit
})

const removePost = (subcattit, postId) => ({
  type: REMOVE_POST,
  postId,
  subcattit
})

export const createNewPost = (subcattit, post) => dispatch => makePost(formUser, subcattit)
  .then((post, subcattit) => dispatch(receivePost(post, subcattit)), (errors) => dispatch(receiveErrors(errors.responseJSON)));

export const fetchPosts = (subcattit) => dispatch => receivePosts(subcattit)
  .then(posts => dispatch(receivePosts(posts)));

export const fetchPost = (subcattit, postId) => dispatch => receivePost(subcattit, postId)
  .then((subcattit, postId) => dispatch(receivePost(postId, subcattit)))

export const deletePost = (subcattit, postId) => dispatch => removePost(subcattit, postId)
  .then(() => dispatch(removePost(postId)));