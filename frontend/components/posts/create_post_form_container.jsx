import React from 'react';
import { currentUser } from '../../reducers/selectors';
import { connect } from 'react-redux';
import { createNewPost } from '../../actions/post';
import { fetchSubcattit } from '../../actions/subcattit';
import CreateForm from './create_post_form';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: currentUser(state),
  
}};

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createNewPost(post)),
  fetchSubcattit: subcattit => dispatch(fetchSubcattit(subcattit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm)
