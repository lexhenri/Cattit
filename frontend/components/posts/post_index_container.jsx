import React from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { fetchPosts, createPost } from '../../actions/post';
import { openShow, closeShow } from '../../actions/post_show';
import PostIndex from './post_index';

const mSTP = (state, ownProps) => ({
  posts: Object.values(state.entities.posts),
});

const mDTP = dispatch => ({
  fetchPosts: (subcattit) => dispatch(fetchPosts(subcattit)),
  createPost: (post) => dispatch(createPost(post)),
  closeShow: () => dispatch(closeShow()),
  openShow: show => dispatch(openShow(show)),
});

export default connect(mSTP, mDTP)(PostIndex)