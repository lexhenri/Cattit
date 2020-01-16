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
import CreatePostFormContainer from './posts/create_post_form_container';



const App = () => (
  <div>
    <Modal />
    <header>
      {/* <TopNavContainer />  */}
      <Route path='/' component={TopNavContainer} />
    </header>
    <Switch>
  
    <AuthRoute exact path="/mew/:subcattit/submit" key={location.pathname} component={CreatePostFormContainer} />
    <Route exact path="/mew/:subcattit" key={location.pathname} component={SubcattitContainer} />
    <Route path="/mew/*" component={ErrorNotFound} />
    <Route exact path="/" component={TempSplash} />
    <Route component={ErrorNotFound} />
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