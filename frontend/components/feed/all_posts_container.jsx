// import React from 'react';
// import { connect } from 'react-redux';
// import { clearErrors } from '../../actions/session';
// import { fetchAllPosts, fetchPost } from '../../actions/post';
// import { openPreview, closePreview } from '../../actions/preview';
// import { currentUser } from '../../reducers/selectors';
// import AllPostIndex from './all_post_index';

// const mSTP = (state, ownProps) => ({
//   posts: state.entities.posts,
//   currentUser: currentUser(state),
// });

// const mDTP = dispatch => ({
//   fetchAllPosts: () => dispatch(fetchAllPosts()),
//   closePreview: () => dispatch(closePreview()),
//   openPreview: show => dispatch(openPreview(show)),
// });

// export default connect(mSTP, mDTP)(AllPostIndex)