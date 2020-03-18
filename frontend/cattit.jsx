import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import { postSession } from './util/session_api';
import { createSubscribe, destroySubscribe} from './util/subscribe_util';
import { getSubscribe, removeSubscribe } from './actions/subscribe';


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
  window.createSubscribe = createSubscribe;
  window.destroySubscribe = destroySubscribe;
  window.getSubscribe = getSubscribe;
  window.removeSubscribe = removeSubscribe;
 
  window.postSession = postSession;
  ReactDOM.render(<Root store={store}/>, root)
})