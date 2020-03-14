import * as UpdootUtil from '../util/updoots_util';

export const RECEIVE_UPDOOT = 'RECEIVE_UPDOOT';
export const DESTROY_UPDOOT ='DESTORY_UPDOOT';

const deleteUpdoot = (post) => ({
  type: DESTROY_UPDOOT,
  post,
})

const receiveUpdoot = (post) => ({
  type: RECEIVE_UPDOOT,
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
