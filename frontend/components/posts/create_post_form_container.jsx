import React from 'react';
import { currentUser } from '../../reducers/selectors';
import { connect } from 'react-redux';
import { createPost, createPostWithPhoto } from '../../actions/post';
import { fetchSubcattit } from '../../actions/subcattit';
import CreateForm from './create_post_form';
import { findSubcat } from '../../reducers/selectors';
import { clearErrors } from '../../actions/session';
import { showSpinner, hideSpinner } from '../../actions/spinner';



const mapStateToProps = (state, ownProps) => {
  // const subcattit = ownProps.location.state.subcattit
  const subcattitName = ownProps.match.params.subcattit
  // debugger
  return {
    currentUser: currentUser(state),
    subcattit: ownProps.match.params.subcattit,
    subcattitObj: findSubcat(state, subcattitName),
    errors: state.errors.sessionErrors
}};

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  fetchSubcattit: subcattit => dispatch(fetchSubcattit(subcattit)),
  clearErrors: () => dispatch(clearErrors()),
  createPostWithPhoto: (photo) => dispatch(createPostWithPhoto(photo)),
  showSpinner: (loading) => dispatch(showSpinner(loading)),
  hideSpinner: () => dispatch(hideSpinner()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm)
