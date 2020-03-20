import React, { useState, useEffect } from 'react';
import { createSubscribe, removeSubscribe } from '../../actions/subscribe';
import { openModal } from '../../actions/modal';
import { isSubscribed } from '../../reducers/selectors';
import { connect } from 'react-redux';


const SubscribeButton = ({subcattitName, subcattit, currentUser, createSubscribe, openModal, removeSubscribe, hasSub}) => {

  const [user_id, setCurrentUser] = useState("")
  const [subscribed, setSubscribe] = useState(hasSub);
  const [subcattit_id, setSubcattitId] = useState(subcattitName);
  const [subscribeText, setSubscribeText] = useState("Joined");
  const [currentSubcat, setCurrentSubcat] = useState(subcattit);

  useEffect (() => {
    if (currentUser){
      setCurrentUser(currentUser.id);
    }
  }, [currentUser])

  useEffect(() => {
    setSubscribe(hasSub);
  }, [hasSub])

  useEffect(() => {
    setCurrentSubcat(subcattit)
    setSubscribe(hasSub);
  }, [subcattit]);


  function findUserSubscripton() {
    let subScribe = {};
    Object.values(subcattit.subscribes)
      .forEach(subscribe => subscribe.user_id === user_id ? 
        subScribe = subscribe : null);
    return subScribe;
  }

  function onMouseover(e) {
    e.preventDefault();
    setSubscribeText("Leave")
  }

  function onMouseout(e) {
    e.preventDefault();
    setSubscribeText("Joined")
  }


  function handleSubscribe(e) {
    if (currentUser) {
      e.preventDefault();
      e.stopPropagation();
      createSubscribe({subcattit_id, user_id});
      setSubscribe(true);
    } else {
      openModal("login");
    }
  }

  function handleUnSubscribe(e) {
    if (currentUser) {
      e.preventDefault();
      e.stopPropagation();
      const unSub = findUserSubscripton()
      removeSubscribe(unSub);
      setSubscribe(false);
    } else {
      openModal("login");
    }
  }

  function renderLeaveButton(){
    return (
      <button className="follow-btn" 
              onClick={(e) => handleUnSubscribe(e)} 
              onMouseEnter={(e) => onMouseover(e)}
              onMouseLeave={(e) => onMouseout(e)}>
          <span className="follow-btn-text">{subscribeText}</span>   
      </button>
    )
  }

  function renderJoinButton(){
    return (
      <button className="follow-btn"
        onClick={(e) => handleSubscribe(e)}>
        <span className="follow-btn-text">Join</span>
      </button>
    )
  }

  return (
    <div>
        {
        (subscribed) ? (<div className="follow-btn-container">{renderLeaveButton()}</div>) 
        : (<div className="follow-btn-container">{renderJoinButton()}</div>)
        }    
    </div>
  )


}

const mSTP = (state, ownProps) => {
  let subscribeList = ownProps.subcattit.subscribes;
  let userSubbed = false;
  if (ownProps.currentUser) {
    userSubbed = isSubscribed(subscribeList, ownProps.currentUser);
  }
  return {
    hasSub: userSubbed,
  }
}

const mDTP = dispatch => ({
  createSubscribe: subscribe => dispatch(createSubscribe(subscribe)),
  removeSubscribe: (subscribe) => dispatch(removeSubscribe(subscribe)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(SubscribeButton)


