import * as UpdootUtil from '../util/updoots_util';

export const RECEIVE_UPDOOT = 'RECEIVE_UPDOOT';
export const DESTROY_UPDOOT ='DESTROY_UPDOOT';
export const RECEIVE_DOWNDOOT = 'RECEIVE_DOWNDOOT';
export const DESTROY_DOWNDOOT ='DESTROY_DOWNDOOT';



const deleteUpdoot = (updoot) => ({
  type: DESTROY_UPDOOT,
  updoot
})

const receiveUpdoot = (updoot) => ({
  type: RECEIVE_UPDOOT,
  updoot
})

const deleteDowndoot = (downdoot) => ({
  type: DESTROY_DOWNDOOT,
  downdoot,
})

const receiveDowndoot = (downdoot) => ({
  type: RECEIVE_DOWNDOOT,
  downdoot
})



export const giveUpdoot = (updoot) => dispatch => {
  return UpdootUtil.createUpdoot(updoot)
    .then((updoot) => dispatch(receiveUpdoot(updoot)));
}

export const removeUpdoot = (updoot) => dispatch => {
  return UpdootUtil.destroyUpdoot(updoot)
    .then(() => dispatch(deleteUpdoot(updoot)));
}

export const giveDowndoot = (downdoot) => dispatch => {
  return UpdootUtil.createDowndoot(downdoot)
    .then((downdoot) => dispatch(receiveDowndoot(downdoot)));
}

export const removeDowndoot = (downdoot) => dispatch => {
  return UpdootUtil.destroyDowndoot(downdoot)
    .then(() => dispatch(deleteDowndoot(downdoot)));
}

