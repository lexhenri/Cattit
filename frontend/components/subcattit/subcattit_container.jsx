import React from 'react';
import { connect } from 'react-redux';
import { fetchSubcattit, createSubcattit, fetchAllSubcattits } from '../../actions/subcattit';
import Subcattit from './subcattit';
import { clearError } from '../../actions/subcattit'


const mSTP = (state, ownProps) => {
  const info = ownProps.match.params.subcattit
  return {
    subcattits: Object.values(state.entities.subcattits),
    subcattit: ownProps.match.params.subcattit,
    subcattitInfo: state.entities.subcattits[info],
    error: state.errors.routingErrors,
    // reponseError: state.errors.routingErrors.reponseError,
  }
}

//for some reason the subcattits state grows with every route visited, this
// is maybe a problem?

const mDTP = (dispatch, ownProps) => {
  // console.log(ownProps);
  return {
  fetchSubcattit: subcattit => dispatch(fetchSubcattit(subcattit)),
  fetchAllSubcattits: () => dispatch(fetchAllSubcattits()),
  createSubcattit: subcattit => dispatch(createSubcattit(subcattit)),
  clearError: () => dispatch(clearError())
  }
}

export default connect(mSTP, mDTP)(Subcattit);
