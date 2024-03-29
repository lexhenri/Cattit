import React from 'react';
import Login from './login';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import { openModal, closeModal } from '../../actions/modal';
import { clearErrors } from '../../actions/session'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.sessionErrors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: formUser => dispatch(login(formUser)),
  otherForm: (
    <button onClick={() => dispatch(openModal('login'))}>
      Signup
      </button>
  ),
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

