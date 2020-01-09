import * as SubcattitUtil from '../util/subcattit_util';

export const RECEIVE_SUBCATTIT = 'RECEIVE_SUBCATTIT';

const receiveSubcattit = subcattit => ({
  type: RECEIVE_SUBCATTIT,
  subcattit
})

export const fetchSubcattit = subcattit => dispatch => {
  return SubcattitUtil.getSubcattit(subcattit)
  .then(subcattit => dispatch(receiveSubcattit(subcattit)))
}

export const createSubcattit = subcattit => dispatch => {
  return SubcattitUtil.createSubcattit(subcattit)
    .then(subcattit => dispatch(receiveSubcattit(subcattit)))
}