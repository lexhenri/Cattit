import React from 'react';
import SignupContainer from '../components/session/signup_container';
import LoginContainer from '../components/session/login_container';
import GreetingContainer from './top_nav/top_nav_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Route path='/' component={GreetingContainer} />
    </header>
    <Route path='/login' component={LoginContainer} />
    <Route path='/signup' component={SignupContainer} />
  </div>
);

export default App;