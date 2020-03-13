import React from 'react';
import { closeShow } from '../../actions/post_show';
import { connect } from 'react-redux';
import PostShowModal from './post_show_modal';
import { fetchPost, removePost } from '../../actions/post';
import { findSubcat } from '../../reducers/selectors';
import { fetchSubcattit } from '../../actions/subcattit';
import { currentUser } from '../../reducers/selectors';
import { useLocation, useHistory, useParams } from "react-router-dom";


const mapStateToProps = (state, ownProps) => {
  let info;
  if (state.ui.postShow) {
    info = state.ui.postShow.name
  }
  // let history = useHistory();
  // let { id } = useParams();
  debugger;
  return {
    history: useHistory(),
    params: useParams(),
    post: state.ui.postShow,
    subcattitInfo: state.entities.subcattits[info],
    currentUser: currentUser(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    location: () => dispatch(useLocation()),
    closeShow: () => dispatch(closeShow()),
    fetchPost: postId => dispatch(fetchPost(postId)),
    fetchSubcattit: subcattit => dispatch(fetchSubcattit(subcattit)),
    removePost: postId => dispatch(removePost(postId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShowModal);