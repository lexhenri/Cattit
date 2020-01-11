import React from 'react';
import Modal from './modal/modal'
import TopNavContainer from './top_nav/top_nav_container';
import PostIndexContainer from './posts/post_index_container';
import SubcattitContainer from './subcattit/subcattit_container';
import CreatePostFormContainer from './posts/create_post_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <Modal />
    <header>
      <Route path='/' component={TopNavContainer} />
    </header>
    <Route path="/mew/:subcattit" component={SubcattitContainer} />
    <Route path="/met/:subcattit/submit" component={CreatePostFormContainer} />
  </div>
);

export default App;