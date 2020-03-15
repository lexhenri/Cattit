import React from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { currentUser, findUserUpdoots, findUserDowndoots } from '../../reducers/selectors';
import { giveUpdoot, removeUpdoot, giveDowndoot, removeDowndoot } from '../../actions/updoots';
import { openModal, closeModal } from '../../actions/modal';


function Updoots (props) {

  function removeDoot(e, post, userDowndoot, userUpdoot) {
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

 const renderUserUpdoots = (userUpdoots, post) => {
    const updoots = post.postDoots
    return (
      <div>
        {
          userUpdoots.length === 0 ?
            (<div className='no-doots no-doots-up' onClick={(e) => handleUpdoot(e, post)}>
              <i className="fas fa-angle-double-up" />
            </div>) : (<div className='updooted' onClick={(e) => removeDoot(e, post, props.userUpdoot, props.userDowndoot)}>
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
            <div className='no-doots no-doots-down' onClick={(e) => handleDowdoot(e, post)}>
              <i className="fas fa-angle-double-down" />
            </div>
      </div>
    )
  }

  const renderUserDowndoots = (userDowndoots, post) => {
    const downdoots = post.downdoots
    return (
      <div>
        {
          userDowndoots === 0 ?
            (<div className='no-doots no-doots-down' onClick={(e) => handleDowndoot(e, post)}>
              <i className="fas fa-angle-double-down" />
            </div>) : (<div className='downdooted' onClick={(e) => removeDoot(e, post, props.userUpdoot, props.userDowndoot)}>
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
        props.userUpdoots ? ( <div>{renderUserUpdoots(props.userUpdoots, props.post)}</div> ):
          (<div>{renderUpdoots(props.post)}</div>)
        }
        <span className="karma-bar">{props.postDoots.length}</span>
        {
        props.userDowndoots ? (<div> {renderUserDowndoots(props.userDowndoots, props.post)}</div>) :
          (<div> {renderDowndoots(props.userDowndoots, props.post)}</div>)
        }
      </div>
    )
  }

const mSTP = (state, ownProps) => {
  const upDoots = ownProps.post.updoots;
  const downDoots = ownProps.post.downdoots;
  const current_user = currentUser(state)

  return {
    currentUser: current_user,
    userUpdoots: findUserUpdoots(upDoots, current_user),
    userDowndoots: findUserDowndoots(downDoots, current_user),
    postDoots: upDoots,
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