import * as AllPostApiUtil from '../util/all_posts_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'



const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts,
})

export const fetchAllPosts = () => dispatch => {
  return AllPostApiUtil.getPosts()
    .then(posts => dispatch(receiveAllPosts(posts)));
}

export const fetchPost = (post) => dispatch => {
  return AllPostApiUtil.getPost(post)
    .then((post) => dispatch(receivePost(post)))
}
