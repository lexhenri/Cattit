import React from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { fetchPosts } from '../../actions/post';
import PostIndex from './post_index';

const mSTP = (state, ownProps) => ({
  posts: Object.values(state.entities.posts)
});

const mDTP = dispatch => ({
  requestPosts: subcattit => dispatch(fetchPosts(subcattit))
});

export default connect(mSTP, mDTP)(PostIndex)