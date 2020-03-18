import * as SubscribeApiUtil from '../util/subscribe_util';

export const RECEIVE_SUBSCRIBE = "RECEIVE_SUBSCRIBE";
export const DESTROY_SUBSCRIBE = "DESTROY_SUBSCRIBE"

const deleteSubscribe = (subscribe) => ({
  type: DESTROY_SUBSCRIBE,
  subscribe
})

const receiveSubscribe = (subscribe) => ({
  type: RECEIVE_SUBSCRIBE,
  subscribe
})

export const getSubscribe = (subscribe) => dispatch => {
  return SubscribeApiUtil.createSubscribe(subscribe)
    .then((subscribe) => dispatch(receiveSubscribe(subscribe)));
}

export const removeSubscribe = (subscribe) => dispatch => {
  return SubscribeApiUtil.destroySubscribe(subscribe)
    .then(() => dispatch(deleteSubscribe(subscribe)));
}