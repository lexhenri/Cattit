import * as UserUtil from '../util/user_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = userId => dispatch => {
  return UserUtil.getUser(userId)
    .then(user => dispatch(receiveUser(user)))
}