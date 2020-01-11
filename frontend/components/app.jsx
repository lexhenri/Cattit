import React from 'react';
import Modal from './modal/modal'
import TopNavContainer from './top_nav/top_nav_container';
import SubcattitContainer from './subcattit/subcattit_container';
import CreatePostFormContainer from './posts/create_post_form_container';
import TempSplash from './feed/temp';
import ErrorNotFound from './util/not_found'
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <Modal />
    <header>
      <Route path='/' component={TopNavContainer} />
    </header>
    <Switch>
    <Route path="/mew/:subcattit" component={SubcattitContainer} />
    <Route path="/met/:subcattit/submit" component={CreatePostFormContainer} />
    <Route exact path="/" component={TempSplash} />
    <Route path="*" component={ErrorNotFound} />
    <Route path="/404" component={ErrorNotFound} />
    </Switch>
  </div>
);

export default App;