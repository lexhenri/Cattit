import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import { postSession } from './util/session_api';



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

 
  window.postSession = postSession;
  ReactDOM.render(<Root store={store}/>, root)
})