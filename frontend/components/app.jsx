import React from 'react';
import Modal from './modal/modal'
import TopNavContainer from './top_nav/top_nav_container';
import SubcattitContainer from './subcattit/subcattit_container';
import FrontpageContainer from './feed/frontpage_container';
// import AllPostsContainer from './posts/all_posts_container';
import ErrorNotFound from './util/not_found'
import { Route, Switch, Redirect } from 'react-router-dom';
import ErrorBoundary from './util/error_boundary'
import RedirectWithStatus from './util/redirect_to';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CreatePostFormContainer from './posts/create_post_form_container';
import PostShowModal from './posts/post_show_modal';
import PreviewModal from './feed/preview_modal';
import ShowSwitch from './posts/show_switch';



const App = () => (
  <div>
    <Modal />
    <PreviewModal />
    <header>
      {/* <TopNavContainer />  */}
      <Route path='/' component={TopNavContainer} />
      {/* <ShowSwitch /> */}
    </header>
    <Switch>
  
    <Route exact path="/" component={FrontpageContainer} />
    <Route exact path="/mew/:subcattit" key={location.pathname} component={SubcattitContainer} />
    <AuthRoute exact path="/mew/:subcattit/submit" key={location.pathname} component={CreatePostFormContainer} />
    {/* <Route exact path="/mew/:subcattit/comments/:postId" component={PostShowModal} /> */}
    {/* <Route path="/mew/*" component={ErrorNotFound} /> */}
    {/* <Route component={ErrorNotFound} /> */}
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