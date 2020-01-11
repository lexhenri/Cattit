import * as SubcattitUtil from '../util/subcattit_util';

export const RECEIVE_SUBCATTIT = 'RECEIVE_SUBCATTIT';
export const RECEIVE_ALL_SUBCATTITS = 'RECEIVE_ALL_SUBCATTITS'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveSubcattit = subcattit => ({
  type: RECEIVE_SUBCATTIT,
  subcattit
})

const receiveAllSubcattits = subcattits => ({
  type: RECEIVE_ALL_SUBCATTITS,
  subcattits
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
})

export const fetchSubcattit = subcattit => dispatch => {
  return SubcattitUtil.getSubcattit(subcattit)
  .then(subcattit => dispatch(receiveSubcattit(subcattit)), errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const fetchAllSubcattits = () => dispatch => {
  return SubcattitUtil.getAllSubcattits()
    .then(subcattits => dispatch(receiveAllSubcattits(subcattits)))
}

export const createSubcattit = subcattit => dispatch => {
  return SubcattitUtil.createSubcattit(subcattit)
    .then(subcattit => dispatch(receiveSubcattit(subcattit)))
}