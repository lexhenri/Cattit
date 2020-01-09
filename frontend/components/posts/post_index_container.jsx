import React from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { fetchPosts, createNewPost, fetchPost, removePost } from '../../actions/post';
import PostIndex from './post_index';

const mSTP = (state, ownProps) => ({
  posts: Object.values(state.entities.posts)
});

const mDTP = dispatch => ({
  requestPosts: subcattit => dispatch(fetchPosts(subcattit)),
  createNewPost: (post, subcattit) => dispatch(createNewPost(post, subcattit))
});

export default connect(mSTP, mDTP)(PostIndex)