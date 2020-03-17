import React, { useState, useEffect } from 'react';
import { closeShow } from '../../actions/post_show';
import { connect } from 'react-redux';
import SubSidebar from '../subcattit/sub_sidebar';
import PostIndexItem from './post_index_item';
import { fetchPost, removePost } from '../../actions/post';
import { findSubcat } from '../../reducers/selectors';
import { fetchSubcattit } from '../../actions/subcattit';
import { currentUser } from '../../reducers/selectors';




function PostShowModal({ modalView, post, closeShow, closeModal, fetchSubcattit, subcattitObj, removeHandler, currentUser }) {

  if (modalView === 'closed') {
    return null;
  }

  function deleteClose(e){
    removeHandler(e);
    closeModal(e);
  }

  // const [subcat, setSubcat] = useState(subcattit);

  // useEffect(() => {
  //   fetchSubcattit(subcattit.name);
  //   setSubcat(subcattit);
  // }, [subcattit]);



  // debugger;
  // console.log(post)
  // const subcattitInfo = fetchSubcattit(post.name);
  // console.log(subcattitInfo);
  // debugger
  // onClick = { e => e.stopPropagation() }
  return (
    <div className="show-modal-bg">
      <div className="show-container" >
        <div className="show-topbar">
          <div className="top-close" onClick={e => closeModal(e)}>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="show-modal-btn">
              <polygon fill="inherit" points="11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497">
              </polygon>
            </svg>
            <span className="close">Close</span>
          </div>
        </div>
        <div className="show-content">


          <div className="show-post-column">

            <PostIndexItem post={post} view={"show"} currentUser={currentUser} removeHandler={deleteClose}/>

          </div>
          <div className="show-post-sidebar">

            <SubSidebar page={"subcattit"} subcattit={subcattitObj} currentUser={currentUser} />

          </div>

        </div>
      </div>
    </div>
  )
}

// export default PostShowModal;


const mapStateToProps = (state, ownProps) => {
  let info;
  if (state.ui.postShow) {
    info = state.ui.postShow.name
  }
  const subcatObj = findSubcat(state, ownProps.subcattit);
  // debugger;
  return {
    // post: state.ui.postShow,
    // subcattitInfo: state.entities.subcattits[info],
    subcattitObj: subcatObj,
    currentUser: currentUser(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeShow: () => dispatch(closeShow()),
    fetchPost: postId => dispatch(fetchPost(postId)),
    fetchSubcattit: subcattit => dispatch(fetchSubcattit(subcattit)),
    removePost: postId => dispatch(removePost(postId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShowModal);