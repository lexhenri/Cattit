import React from 'react';
import { currentUser } from '../../reducers/selectors';
import { connect } from 'react-redux';
import { createNewPost } from '../../actions/post';
import { fetchSubcattit } from '../../actions/subcattit';
import CreateForm from './create_post_form';
import { findSubcat } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  // const subcattit = ownProps.location.state.subcattit
  const subcattitName = ownProps.match.params.subcattit
  // debugger
  return {
    currentUser: currentUser(state),
    subcattit: ownProps.match.params.subcattit,
    subcattit_obj: findSubcat(state, subcattitName),
    // subcattitName: ownProps.match.params.subcattit
}};

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createNewPost(post)),
  fetchSubcattit: subcattit => dispatch(fetchSubcattit(subcattit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm)
