import * as UpdootUtil from '../util/updoots_util';

export const RECEIVE_UPDOOT = 'RECEIVE_UPDOOT';
export const DESTROY_UPDOOT ='DESTORY_UPDOOT';
export const RECEIVE_DOWNDOOT = 'RECEIVE_DOWNDOOT';
export const DESTROY_DOWNDOOT ='DESTORY_DOWNDOOT';

const deleteUpdoot = (post) => ({
  type: DESTROY_UPDOOT,
  post,
})

const receiveUpdoot = (post) => ({
  type: RECEIVE_UPDOOT,
  post
})

const deleteDowndoot = (post) => ({
  type: DESTROY_DOWNDOOT,
  post,
})

const receiveDowndoot = (post) => ({
  type: RECEIVE_DOWNDOOT,
  post
})

export const giveUpdoot = (post) => dispatch => {
  return UpdootUtil.createUpdoot(post)
    .then((post) => dispatch(receiveUpdoot(post)));
}

export const removeUpdoot = (post) => dispatch => {
  return UpdootUtil.destroyUpdoot(post)
    .then((post) => dispatch(deleteUpdoot(post)));
}

export const giveDowndoot = (post) => dispatch => {
  return UpdootUtil.createDowndoot(post)
    .then((post) => dispatch(receiveDowndoot(post)));
}

export const removeDowndoot = (post) => dispatch => {
  return UpdootUtil.destroyDowndoot(post)
    .then((post) => dispatch(deleteDowndoot(post)));
}
