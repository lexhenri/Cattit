import React from 'react';
import Modal from './modal/modal'
import TopNavContainer from './top_nav/top_nav_container';
import SubcattitContainer from './subcattit/subcattit_container';
import TempSplash from './feed/temp';
import ErrorNotFound from './util/not_found'
import { Route, Switch, Redirect } from 'react-router-dom';
import ErrorBoundary from './util/error_boundary'
import RedirectWithStatus from './util/redirect_to';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <Modal />
    <header>
      {/* <Route path='/' component={TopNavContainer} /> */}
      <TopNavContainer /> 
    </header>
    <Switch>
    {/* <Route path="/mew/:subcattit/submit" component={CreatePostFormContainer} /> */}
  
    <Route exact path="/" component={TempSplash} />
    <Route exact path="/mew/:subcattit" key={location.pathname} component={SubcattitContainer} />
    <Route path="/mew/*" component={ErrorNotFound} />
    {/* <Route exact path="/404" component={ErrorNotFound} /> */}
    </Switch>
    {/* <RedirectWithStatus status={404} from="/mew/*" to="/404" /> */}
  </div>
);

export default App;

//import withRouter for header

//matchPath?
{/* <Route exact path="/mew/:subcattit" key={location.pathname} render={ props =>
      <ErrorBoundary>
        <SubcattitContainer {...props}/>
      </ErrorBoundary> }/> */}