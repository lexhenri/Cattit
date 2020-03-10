import React from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { fetchAllPosts, fetchPost } from '../../actions/all_posts';
import { openShow, closeShow } from '../../actions/post_show';
import AllPostIndex from './all_post_index';

const mSTP = (state, ownProps) => ({
  posts: Object.values(state.entities.posts),
});

const mDTP = dispatch => ({
  fetchAllPosts: () => dispatch(fetchAllPosts()),
  fetchPost: (post) => dispatch(fetchPost(post)),
  closeShow: () => dispatch(closeShow()),
  openShow: show => dispatch(openShow(show)),
});

export default connect(mSTP, mDTP)(AllPostIndex)