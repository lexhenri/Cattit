import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import { createSubcattit } from './actions/subcattit';
import { fetchPost } from './actions/post';
import { fetchUser } from './actions/user';
import { getUser } from './util/user_util';
import { getPost } from './util/post_util';


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
  window.createSubcattit = createSubcattit;
  store = configureStore(preloadedState);
  window.dispatch = store.dispatch;
  window.getState = store.getState; // for testing
  window.getUser = getUser;
  window.fetchUser = fetchUser;
  window.fetchPost = fetchPost;
  window.getPost = getPost;
  ReactDOM.render(<Root store={store}/>, root)
})