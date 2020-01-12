import * as SubcattitUtil from '../util/subcattit_util';
import { push } from 'react-router-redux'

export const RECEIVE_SUBCATTIT = 'RECEIVE_SUBCATTIT';
export const RECEIVE_ALL_SUBCATTITS = 'RECEIVE_ALL_SUBCATTITS'
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

const receiveSubcattit = subcattit => ({
  type: RECEIVE_SUBCATTIT,
  subcattit
})

const receiveAllSubcattits = subcattits => ({
  type: RECEIVE_ALL_SUBCATTITS,
  subcattits
})

const receiveError = error => ({
  type: RECEIVE_ERROR,
  error
})

export const clearError = () => ({
  type: CLEAR_ERROR,
})

export const fetchSubcattit = subcattit => dispatch => {
  return SubcattitUtil.getSubcattit(subcattit)
  .then(subcattit => dispatch(receiveSubcattit(subcattit)), (error) => dispatch(receiveError(error.status)))
  // (error) => dispatch(receiveError(error.status)))
}


export const fetchAllSubcattits = () => dispatch => {
  return SubcattitUtil.getAllSubcattits()
    .then(subcattits => dispatch(receiveAllSubcattits(subcattits)))
}

export const createSubcattit = subcattit => dispatch => {
  return SubcattitUtil.createSubcattit(subcattit)
    .then(subcattit => dispatch(receiveSubcattit(subcattit)))
}