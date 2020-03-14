import React from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { fetchPosts, createPost, removePost, fetchPost } from '../../actions/post';
import { openShow, closeShow } from '../../actions/post_show';
import PostIndex from './post_index';
import { currentUser } from '../../reducers/selectors';
import { useLocation, useHistory, useParams } from "react-router-dom";
import { giveUpdoot, removeUpdoot, giveDowndoot, removeDowndoot } from '../../actions/updoots';


const mSTP = (state, ownProps) => {

  // debugger;
  // console.log(ownProps);
  return {
  // subcattit: subcattitName,
  // subcattit: ownProps.match.params.subcattit,
  posts: state.entities.posts,
  currentUser: currentUser(state),
  }
};

const mDTP = dispatch => ({
  location: () => dispatch(useLocation()),
  fetchPosts: (subcattit) => dispatch(fetchPosts(subcattit)),
  createPost: (post) => dispatch(createPost(post)),
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  closeShow: () => dispatch(closeShow()),
  openShow: (post) => dispatch(openShow(post)),
  removePost: postId => dispatch(removePost(postId)),
  giveUpdoot: post => dispatch(giveUpdoot(post)),
  removeUpdoot: post => dispatch(removeUpdoot(post)),
  giveDowndoot: post => dispatch(giveDowndoot(post)),
  removeDowndoot: post => dispatch(removeDowndoot(post))
});

export default connect(mSTP, mDTP)(PostIndex)