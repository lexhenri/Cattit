import React from 'react';
import { connect } from 'react-redux';
import { fetchSubcattit, createSubcattit, fetchAllSubcattits } from '../../actions/subcattit';
import Subcattit from './subcattit';
import { clearError } from '../../actions/subcattit';
import { findSubcat, findPosts } from '../../reducers/selectors';
import { currentUser } from '../../reducers/selectors';
import { openModal, closeModal } from '../../actions/modal';
import { fetchPosts, fetchPost } from '../../actions/post';



const mSTP = (state, ownProps) => {
  const info = ownProps.match.params.subcattit
  // debugger;
  return {
    subcattits: Object.values(state.entities.subcattits),
    subcattit: ownProps.match.params.subcattit,
    posts: state.entities.posts,
    subcattitInfo: state.entities.subcattits[info],
    subcattit_obj: findSubcat(state, info),
    currentUser: currentUser(state),

    // error: state.errors.routingErrors,
    // reponseError: state.errors.routingErrors.reponseError,
  }
}

//for some reason the subcattits state grows with every route visited, this
// is maybe a problem?

const mDTP = (dispatch, ownProps) => {
  // console.log(ownProps);
  return {
  fetchSubcattit: subcattit => dispatch(fetchSubcattit(subcattit)),
  fetchAllSubcattits: () => dispatch(fetchAllSubcattits()),
  createSubcattit: subcattit => dispatch(createSubcattit(subcattit)),
  clearError: () => dispatch(clearError()),
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal)),
  fetchPosts: (posts) => dispatch(fetchPosts(posts))
  }
}

export default connect(mSTP, mDTP)(Subcattit);
