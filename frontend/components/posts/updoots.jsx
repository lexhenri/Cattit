import React from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { currentUser } from '../../reducers/selectors';
import { giveUpdoot, removeUpdoot, giveDowndoot, removeDowndoot } from '../../actions/updoots';
import { openModal, closeModal } from '../../actions/modal';


function Updoots (props) {

  function removeDoot(e, post) {
    // debugger;
    e.preventDefault();
    e.stopPropagation();
    let downDoot = post.downdoots.length;
    let upDoot = post.updoots.length;
    if (downDoot > 0) {
      props.removeDowndoot(post);
    } else if (upDoot > 0) {
      props.removeUpdoot(post);
    }
  }

  function handleUpdoot(e, post) {
    e.preventDefault();
    e.stopPropagation();
    if (props.currentUser !== undefined) {
      props.giveUpdoot(post);
    }
    else {
      props.openModal("login")
    }
  }

  function handleDowndoot(e, post) {
    e.preventDefault();
    e.stopPropagation();
    if (props.currentUser !== undefined) {
      props.giveDowndoot(post)
    } else {
      props.openModal("login")
    }
  }

 const renderUpdoots = (post) => {
    const updoots = post.updoots
    return (
      <div>
        {
          updoots >= 0 ?
            (<div className='no-doots no-doots-up' onClick={(e) => handleUpdoot(e, post)}>
              <i className="fas fa-angle-double-up" />
            </div>) : (<div className='updooted' onClick={(e) => removeDoot(e, post)}>
              <i className="fas fa-angle-double-up" />
            </div>)
        }
      </div>
    )
  }

  const renderDowndoots = (post) => {
    const downdoots = post.downdoots
    return (
      <div>
        {
          downdoots >= 0 ?
            (<div className='no-doots no-doots-down' onClick={(e) => handleDowndoot(e, post)}>
              <i className="fas fa-angle-double-down" />
            </div>) : (<div className='downdooted' onClick={(e) => removeDoot(e, post)}>
              <i className="fas fa-angle-double-down" />
            </div>)
        }
      </div>
    )
  }

  return (

    // <div className='no-doots no-doots-up' onClick={(e) => handleUpdoot(e, props.post)}>
    //   <i className="fas fa-angle-double-up" />
    // </div>

      <div className="karma-bar">
        {renderUpdoots(props.post)}
        <span className="karma-bar">{props.post.updoots.length}</span>
        {renderDowndoots(props.post)}
      </div>
    )
  }

const mSTP = (state, ownProps) => {
  return {
    posts: state.entities.posts,
    currentUser: currentUser(state),
  }
};

const mDTP = dispatch => ({
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  giveUpdoot: post => dispatch(giveUpdoot(post)),
  removeUpdoot: post => dispatch(removeUpdoot(post)),
  giveDowndoot: post => dispatch(giveDowndoot(post)),
  removeDowndoot: post => dispatch(removeDowndoot(post)),
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(Updoots)