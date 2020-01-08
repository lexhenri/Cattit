import React from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import { openModal, closeModal } from '../../actions/modal';
import { clearErrors } from '../../actions/session'
import Signup from './signup';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.sessionErrors
});


const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  otherForm: (
    <button onClick={() => dispatch(openModal('signup'))}>
      Signup
      </button>
  ),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal) => dispatch(openModal(modal)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);