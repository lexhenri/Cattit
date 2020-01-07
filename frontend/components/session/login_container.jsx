import React from 'react';
import Login from './login';
import { connect } from 'react-redux';
import { login } from '../../actions/session';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.sessionErrors 
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: formUser => dispatch(login(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

