import React from 'react';
import { closePreview } from '../../actions/preview';
import { connect } from 'react-redux';
import PreviewSidebar from './preview_sidebar';
import AllPostIndexItem from './all_post_index_item';
import { fetchPost } from '../../actions/post';
import { findSubcat } from '../../reducers/selectors';
import { fetchSubcattit } from '../../actions/subcattit';



function PreviewModal({ post, closePreview, fetchSubcattit, subcattitInfo }) {

  if (!post) {
    return null;
  }

  // const subcattitInfo = fetchSubcattit(post.name);
  // console.log(subcattitInfo);
  // debugger
  return (
    <div className="show-modal-bg">
      <div className="show-container" onClick={e => e.stopPropagation()} >
        <div className="show-topbar">
          <div className="top-close" onClick={closePreview}>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="show-modal-btn">
              <polygon fill="inherit" points="11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497">
              </polygon>
            </svg>
            <span className="close">Close</span>
          </div>
        </div>
        <div className="show-content">


          <div className="show-post-column">

            <AllPostIndexItem post={post} view={"show"} />
          </div>
          <div className="show-post-sidebar">

            {/* <PreviewSidebar page={"create"} subcattitInfo={subcattitInfo} subcattit={post.subcattit} /> */}

          </div>

        </div>
      </div>
    </div>
  )

}


const mapStateToProps = (state, ownProps) => {
  let info;
  if (state.ui.preview) {
    info = state.ui.preview.name
  }
  // debugger
  return {
    post: state.ui.preview,
    subcattitInfo: state.entities.subcattits[info],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closePreview: () => dispatch(closePreview()),
    fetchPost: postId => dispatch(fetchPost(postId)),
    fetchSubcattit: subcattit => dispatch(fetchSubcattit(subcattit))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewModal);