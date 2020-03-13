import React from "react";
import { Switch, BrowserRouter as Router, Route, Link, useHistory, useLocation, useParams } from "react-router-dom";
import PostIndexContainer from './post_index_container';
// import PostShowContainer from "./post_show_container";

// function ShowSwitch() {
//   let location = useLocation();
//   let params = useParams();
//   let history = useHistory();
//   // This piece of state is set when one of the
//   // gallery links is clicked. The `background` state
//   // is the location that we were at when one of
//   // the gallery links was clicked. If it's there,
//   // use it as the location for the <Switch> so
//   // we show the gallery in the background, behind
//   // the modal.
//   let background = location.state && location.state.background;
//   // debugger;
//   return (
//     <div>
//       <Switch location={background || location}>
//         <Route path="/mew/:subcattit/" component={PostIndexContainer} />
//         {/* <Route path="/mew/:subcattit/posts/:postId" children={<PostShowModal />} /> */}
//       </Switch>

//       {/* Show the modal when a background page is set */}
//       {background && <Route path="/mew/:subcattit/posts/:id/" children={<PostShowContainer />} />}
//     </div>
//   );
// }

// export default ShowSwitch;
