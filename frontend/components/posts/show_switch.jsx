import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useLocation, useParams } from "react-router-dom";
import PostIndexContainer from './post_index_container';
import PostShowContainer from "./post_show_container";

function ShowSwitch() {
  let location = useLocation();

  // This piece of state is set when one of the
  // gallery links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gallery in the background, behind
  // the modal.
  let background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route path="/mew/:subcattit/" children={<PostIndexContainer />} />
        {/* <Route path="/mew/:subcattit/posts/:postId" children={<PostShowModal />} /> */}
      </Switch>

      {/* Show the modal when a background page is set */}
      {background && <Route path="/mew/:subcattit/posts/:id/" children={<PostShowContainer />} />}
    </div>
  );
}

export default ShowSwitch;
