import React from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { fetchPosts, createPost, removePost } from '../../actions/post';
import { openShow, closeShow } from '../../actions/post_show';
import PostIndex from './post_index';
import { currentUser } from '../../reducers/selectors';

const mSTP = (state, ownProps) => ({
  posts: Object.values(state.entities.posts),
  currentUser: currentUser(state),
});

const mDTP = dispatch => ({
  fetchPosts: (subcattit) => dispatch(fetchPosts(subcattit)),
  createPost: (post) => dispatch(createPost(post)),
  closeShow: () => dispatch(closeShow()),
  openShow: show => dispatch(openShow(show)),
  removePost: postId => dispatch(removePost(postId))
});

export default connect(mSTP, mDTP)(PostIndex)