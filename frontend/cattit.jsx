import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import { postSession } from './util/session_api';
// import { createSubcattit } from './actions/subcattit';
// import { fetchPost } from './actions/post';
// import { fetchUser } from './actions/user';
// import { getUser } from './util/user_util';
// import { getPost } from './util/post_util';
import { createUpdoot, destroyUpdoot, createDowndoot, destroyDowndoot } from './util/updoots_util';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  let store;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
  }
  store = configureStore(preloadedState);
  window.dispatch = store.dispatch;
  window.getState = store.getState; // for testing
  window.createUpdoot = createUpdoot;
  window.destroyUpdoot = destroyUpdoot;
  window.createDowndoot = createDowndoot;
  window.destroyDowndoot = destroyDowndoot;
  // window.getUser = getUser;
  // window.fetchUser = fetchUser;
  // window.fetchPost = fetchPost;
  // window.getPost = getPost;
  window.postSession = postSession;
  ReactDOM.render(<Root store={store}/>, root)
})