import React from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import { openModal, closeModal } from '../../actions/modal';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  otherForm: (
    <button onClick={() => dispatch(openModal('signup'))}>
      Signup
      </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(Signup);