import * as SubscribeApiUtil from '../util/subscribe_util';
import * as UserApiUtil from '../util/user_util';

export const RECEIVE_SUBSCRIBE = "RECEIVE_SUBSCRIBE";
export const DESTROY_SUBSCRIBE = "DESTROY_SUBSCRIBE"
export const RECEIVE_USER_SUBSCRIBES = "RECEIVE_USER_SUBSCRIBES";

const deleteSubscribe = (subscribe) => ({
  type: DESTROY_SUBSCRIBE,
  subscribe
})

const receiveSubscribe = (subscribe) => ({
  type: RECEIVE_SUBSCRIBE,
  subscribe
})

const receiveSubscribes = (user) => ({
  type: RECEIVE_USER_SUBSCRIBES,
  user
})

export const createSubscribe = (subscribe) => dispatch => {
  return SubscribeApiUtil.createSubscribe(subscribe)
    .then((subscribe) => dispatch(receiveSubscribe(subscribe)));
}

export const removeSubscribe = (subscribe) => dispatch => {
  return SubscribeApiUtil.destroySubscribe(subscribe)
    .then(() => dispatch(deleteSubscribe(subscribe)));
}

export const receiveUserSubscribes = (user) => dispatch => {
  return UserApiUtil.getSubscribes(user)
    .then((subscribes) => dispatch(receiveSubscribes(subscribes)));
}