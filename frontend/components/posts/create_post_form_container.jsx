import React from 'react';
import { currentUser } from '../../reducers/selectors';
import { connect } from 'react-redux';
import { createNewPost } from '../../actions/post';
import { fetchSubcattit } from '../../actions/subcattit';
import CreateForm from './create_post_form';


const mapStateToProps = (state, ownProps) => {
  const subcattit = ownProps.history.location.state.subcattit
  return {
    currentUser: currentUser(state),
    subcattit: subcattit,
    subcattitName: ownProps.match.params.subcattit
}};

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createNewPost(post)),
  fetchSubcattit: subcattit => dispatch(fetchSubcattit(subcattit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm)
