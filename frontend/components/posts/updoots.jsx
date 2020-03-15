import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { currentUser, findUserUpdoots, findUserDowndoots } from '../../reducers/selectors';
import { giveUpdoot, removeUpdoot, giveDowndoot, removeDowndoot } from '../../actions/updoots';
import { openModal, closeModal } from '../../actions/modal';


function Updoots (props) {

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });


  function removeDoot(e, post) {
    // debugger;
    e.preventDefault();
    e.stopPropagation();
    if (props.userDowndoots === 1) {
      props.removeDowndoot(post);
    } else if (props.userUpdoots === 1) {
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

 const renderUserUpdoots = (post) => {
    // const updoots = post.postDoots
    return (
      <div>
        {
          props.userUpdoots !== 1 ?
            (<div className='no-doots no-doots-up' onClick={(e) => handleUpdoot(e, post)}>
              <i className="fas fa-angle-double-up" />
            </div>) : (<div className='updooted' onClick={(e) => removeDoot(e, post)}>
              <i className="fas fa-angle-double-up" />
            </div>)
        }
      </div>
    )
  }

 const renderUpdoots = (post) => {
    return (
      <div>
            <div className='no-doots no-doots-up' onClick={(e) => handleUpdoot(e, post)}>
              <i className="fas fa-angle-double-up" />
            </div>
      </div>
    )
  }

 const renderDowndoots = (post) => {
    return (
      <div>
            <div className='no-doots no-doots-down' onClick={(e) => handleDowndoot(e, post)}>
              <i className="fas fa-angle-double-down" />
            </div>
      </div>
    )
  }

  const renderUserDowndoots = (post) => {
    // const downdoots = post.downdoots
    return (
      <div>
        {
          props.userDowndoots !== 1 ?
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
        {
        props.userUpdoots ? ( <div>{renderUserUpdoots(props.post)}</div> ):
          (<div>{renderUpdoots(props.post)}</div>)
        }
        <span className="karma-bar">{props.postDoots}</span>
        {
        props.userDowndoots ? (<div> {renderUserDowndoots(props.post)}</div>) :
          (<div> {renderDowndoots(props.post)}</div>)
        }
      </div>
    )
  }

  // TODO: make user doots booleans, ya moron

const mSTP = (state, ownProps) => {
  const upDoots = ownProps.post.updoots;
  const downDoots = ownProps.post.downdoots;
  const postUpdoots = Object.values(upDoots).length;
  const postDowndoots = Object.values(downDoots).length;
  let doots = (postUpdoots - postDowndoots);
  const current_user = currentUser(state);
  const user_updoots = findUserUpdoots(upDoots, current_user);
  const user_downdoots = findUserDowndoots(downDoots, current_user);
  // debugger;
  return {
    currentUser: current_user,
    userUpdoots: user_updoots,
    userDowndoots: user_downdoots,
    postDoots: doots,
    post: ownProps.post,
    posts: state.entities.posts,
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