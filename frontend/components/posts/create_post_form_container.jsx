import React from 'react';
import { currentUser } from '../../reducers/selectors';
import { connect } from 'react-redux';
import { createNewPost } from '../../actions/post';
import CreateForm from './create_post_form';


const mapStateToProps = state => ({
  currentUser: currentUser(state)
});

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createNewPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm)
