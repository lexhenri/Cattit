import React from 'react';
import { connect } from 'react-redux';
import { fetchSubcattit, createSubcattit } from '../../actions/subcattit';
import Subcattit from './subcattit';

const mSTP = (state, ownProps) => ({
  subcattits: Object.values(state.entities.subcattits)
})

const mDTP = dispatch => ({
  fetchSubcattit: subcattit => dispatch(fetchSubcattit(subcattit)),
  createSubcattit: subcattit => dispatch(createSubcattit(subcattit))
})

export default connect(mSTP, mDTP)(Subcattit);
