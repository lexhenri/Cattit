import React, { useState, useEffect, useSelector } from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { currentUser, findUserUpdoots, findUserDowndoots } from '../../reducers/selectors';
import { giveUpdoot, removeUpdoot, giveDowndoot, removeDowndoot, getUpdoots, getDowndoots } from '../../actions/updoots';
import { openModal, closeModal } from '../../actions/modal';


function Updoots (props) {

  const [userUpdoot, setUpdoot] = useState(props.userUpdoots);
  const [userDowndoot, setDowndoot] = useState(props.userDowndoots);
  const [postDoot, setPostdoot] = useState(props.post.totalDoots);
  const newDoot = { post_id: props.post.id }

  // const totalDoots = useSelector(postDoot => props.postDoots);

  useEffect(() => {
   setUpdoot(props.userUpdoots);
  }, [props.userUpdoots]);

  useEffect(() => {
    setDowndoot(props.userDowndoots);
  }, [props.userDowndoots]);

  useEffect(() => {
    setPostdoot(postDoot);    // setPostdoot(postDoot);
  }, [props.post.totalDoots])
  

  // function countDoots(){
  //   useEffect(() => {
  //     setPostdoot(postDoot);
  //   }, [props.postDoots]);
  // }

  function findUserUpdoot(updoots, currentUser) {
    let upDoot = {};
    if (currentUser === undefined) return null;
    Object.values(updoots).forEach(updoot => updoot.user_id === currentUser.id ? upDoot = updoot : null);
    return upDoot;
  }

  function findUserDowndoot(downdoots, currentUser) {
    let downDoot = {};
    if (currentUser === undefined) return null;
    Object.values(downdoots).forEach(downdoot => downdoot.user_id === currentUser.id ?downDoot = downdoot : null);
    return downDoot;
  }

  function removeDoot(e, post) {
    // debugger;
    e.preventDefault();
    e.stopPropagation();
    // debugger;
    if (userDowndoot) {
      const downdoot = findUserDowndoot(props.post.downdoots, props.currentUser)
      props.removeDowndoot(downdoot);
      setDowndoot(!userDowndoot);
    } else if (userUpdoot) {
      const updoot = findUserUpdoot(props.post.updoots, props.currentUser);
      props.removeUpdoot(updoot);
      setUpdoot(!userUpdoot);
    }
  }

  function handleUpdoot(e, post) {
    e.preventDefault();
    e.stopPropagation();
    if (props.currentUser !== undefined) {
      props.giveUpdoot(newDoot);
      setUpdoot(!userUpdoot);
      // setDowndoot(!userDowndoot);
      if (userDowndoot) {
        // props.removeDowndoot(post);
        setDowndoot(!userDowndoot);
        // countDoots();
        // setPostdoot(postDoot + 1)
      }
      // countDoots();
    }
    else {
      props.openModal("login");
    }
  }

  function handleDowndoot(e) {
    e.preventDefault();
    e.stopPropagation();
    if (props.currentUser !== undefined) {
      props.giveDowndoot(newDoot);
      setDowndoot(!userDowndoot);
      // countDoots();

      if (userUpdoot) {
        setUpdoot(!userUpdoot);
        // countDoots();

      }
    } else {
      props.openModal("login");
    }
  }
 
 const renderUserUpdoots = (post) => {
    return (
      <div>
        {
          !userUpdoot ?
            (<div className='no-doots no-doots-up' onClick={(e) => handleUpdoot(e)}>
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
            <div className='no-doots no-doots-up' onClick={(e) => handleUpdoot(e)}>
              <i className="fas fa-angle-double-up" />
            </div>
      </div>
    )
  }

 const renderDowndoots = (post) => {
    return (
      <div>
            <div className='no-doots no-doots-down' onClick={(e) => handleDowndoot(e)}>
              <i className="fas fa-angle-double-down" />
            </div>
      </div>
    )
  }

  const renderUserDowndoots = (post) => {
    return (
      <div>
        {
          !userDowndoot ?
            (<div className='no-doots no-doots-down' onClick={(e) => handleDowndoot(e)}>
              <i className="fas fa-angle-double-down" />
            </div>) : (<div className='downdooted' onClick={(e) => removeDoot(e, post)}>
              <i className="fas fa-angle-double-down" />
            </div>)
        }
      </div>
    )
  }
 
  return (

      <div className="karma-container">
        {
        userUpdoot ? ( <div>{renderUserUpdoots(props.post)}</div> ):
          (<div>{renderUpdoots(props.post)}</div>)
        }
        <span className="karma-container">{postDoot}</span>
        {
        userDowndoot ? (<div> {renderUserDowndoots(props.post)}</div>) :
          (<div> {renderDowndoots(props.post)}</div>)
        }
      </div>
    )
  }


const mSTP = (state, ownProps) => {
  const upDoots = ownProps.post.updoots;
  const downDoots = ownProps.post.downdoots;
  // let totalDoots = findTotalDoots(upDoots, downDoots);
  const current_user = currentUser(state);
  const user_updoots = findUserUpdoots(upDoots, current_user);
  const user_downdoots = findUserDowndoots(downDoots, current_user);
  // debugger;
  return {
    currentUser: current_user,
    userUpdoots: user_updoots,
    userDowndoots: user_downdoots,
    postDoots: ownProps.post.totalDoots,
    post: ownProps.post,
    posts: state.entities.posts,
  }
};

const mDTP = dispatch => ({
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  giveUpdoot: downdoot => dispatch(giveUpdoot(downdoot)),
  removeUpdoot: post => dispatch(removeUpdoot(post)),
  giveDowndoot: downdoot => dispatch(giveDowndoot(downdoot)),
  removeDowndoot: post => dispatch(removeDowndoot(post)),
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal)),
  getDowndoots: post => dispatch(getDowndoots(post)),
  getUpdoots: post => dispatch(getUpdoots(post)),
});

export default connect(mSTP, mDTP)(Updoots)