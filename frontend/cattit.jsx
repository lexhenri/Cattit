import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import { postSession } from './util/session_api';
import { loadTranslations, setLocale, syncTranslationWithStore, setLocaleGetter } from 'react-redux-i18n';
import translationsObj from './translations';



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
  // window.dispatch = store.dispatch;
  window.getState = store.getState; // for testing
  // const localeFunction = () => 'en-US';
  var language = navigator.languages ? navigator.languages[0] : (navigator.userLanguage || navigator.language)
  syncTranslationWithStore(store)
  window.dispatch = store.dispatch(loadTranslations(translationsObj));
  window.dispatch = store.dispatch(setLocale(language));

 
  window.postSession = postSession;
  ReactDOM.render(<Root store={store}/>, root)
})