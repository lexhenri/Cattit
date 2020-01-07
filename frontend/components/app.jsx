import React from 'react';
import SignupContainer from '../components/session/signup_container';
import LoginContainer from '../components/session/login_container';
import GreetingContainer from '../components/greeting/greeting_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Welcome to Cattit, the Original Place for Cats on the Internet</h1>
    </header>
    <Route path='/login' component={LoginContainer} />
    <Route path='/signup' component={SignupContainer} />
    <Route path='/' component={GreetingContainer} />
  </div>
);

export default App;