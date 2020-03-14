import React from 'react';
import { closeModal } from '../../actions/modal';
import { connect } from 'react-redux';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';
import ModalLogo from '../../../app/assets/images/cattit_logos/cattit_logo.svg'


function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginContainer />;
      break;
    case 'signup':
      component = <SignupContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background">
    <div className="modal-inner">
     
      <div className="modal-col-1">
      </div>
      <div className="modal-col-container">
          {
            (modal === 'login') ? (
        <div className="modal-logo">
          <img className="login-logo" src={ModalLogo} />
        </div>  
        ) : (null) }
        <div className="session-container" onClick={e => e.stopPropagation()}>
            <div className="session-form-container">
          {component}
          </div>
        </div>
      </div>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="modal-btn" onClick={closeModal}>
          <polygon fill="inherit" points="11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497">
          </polygon>
        </svg>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);