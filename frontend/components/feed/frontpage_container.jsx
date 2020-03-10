import React from 'react';
import { connect } from 'react-redux';
import { fetchFrontpage } from '../../actions/front_page';
import Frontpage from './frontpage';
import { clearError } from '../../actions/subcattit';
import { currentUser } from '../../reducers/selectors';
import { openModal, closeModal } from '../../actions/modal';
import { openPreview, closePreview } from '../../actions/preview'


const mSTP = (state, ownProps) => {
  return {
    currentUser: currentUser(state),

  }
}


const mDTP = (dispatch, ownProps) => {
  return {
    fetchFrontpage: frontpage => dispatch(fetchFrontpage(frontpage)),
    clearError: () => dispatch(clearError()),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
    closePreview: () => dispatch(closePreview()),
    openPreview: preview => dispatch(openPreview(preview)),
  }
}

export default connect(mSTP, mDTP)(Frontpage);