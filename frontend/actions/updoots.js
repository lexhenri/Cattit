import * as UpdootUtil from '../util/updoots_util';

export const RECEIVE_UPDOOT = 'RECEIVE_UPDOOT';
export const DESTROY_UPDOOT ='DESTROY_UPDOOT';
export const RECEIVE_DOWNDOOT = 'RECEIVE_DOWNDOOT';
export const DESTROY_DOWNDOOT ='DESTROY_DOWNDOOT';
export const RECEIVE_UPDOOTS = 'RECEIVE_UPDOOTS';
export const RECEIVE_DOWNDOOTS = 'RECEIVE_DOWNDOOTS';


const deleteUpdoot = (post) => ({
  type: DESTROY_UPDOOT,
  post,
})

const receiveUpdoot = (updoot) => ({
  type: RECEIVE_UPDOOT,
  updoot
})

const deleteDowndoot = (post) => ({
  type: DESTROY_DOWNDOOT,
  post,
})

const receiveDowndoot = (downdoot) => ({
  type: RECEIVE_DOWNDOOT,
  downdoot
})

const receiveUpdoots = (post) => ({
  type: RECEIVE_UPDOOTS,
  post
})

const receiveDowndoots = (post) => ({
  type: RECEIVE_DOWNDOOTS,
  post
})

export const giveUpdoot = (updoot) => dispatch => {
  return UpdootUtil.createUpdoot(updoot)
    .then((updoot) => dispatch(receiveUpdoot(updoot)));
}

export const removeUpdoot = (post) => dispatch => {
  return UpdootUtil.destroyUpdoot(post)
    .then(() => dispatch(deleteUpdoot(post)));
}

export const giveDowndoot = (downdoot) => dispatch => {
  return UpdootUtil.createDowndoot(downdoot)
    .then((downdoot) => dispatch(receiveDowndoot(downdoot)));
}

export const removeDowndoot = (post) => dispatch => {
  return UpdootUtil.destroyDowndoot(post)
    .then((post) => dispatch(deleteDowndoot(post)));
}

// export const getUpdoots = (post) => dispatch => {
//   return UpdootUtil.fetchUpdoots(post)
//     .then((updoots) => dispatch(receiveUpdoots(updoots)));
// }

// export const getDowndoots = (post) => dispatch => {
//   return UpdootUtil.fetchDowndoots(post)
//     .then((downdoots) => dispatch(receiveDowndoots(downdoots)));
// }
