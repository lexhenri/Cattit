import React from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { fetchPosts, createNewPost } from '../../actions/post';
import { fetchUser } from '../../actions/user';
import PostIndex from './post_index';

const mSTP = (state, ownProps) => ({
  posts: Object.values(state.entities.posts),
});

const mDTP = dispatch => ({
  fetchPosts: (subcattit) => dispatch(fetchPosts(subcattit)),
  createNewPost: (post) => dispatch(createNewPost(post)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mSTP, mDTP)(PostIndex)