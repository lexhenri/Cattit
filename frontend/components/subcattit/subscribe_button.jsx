import React, { useState, useEffect } from 'react';
import { createSubscribe, removeSubscribe } from '../../actions/subscribe';
import { openModal } from '../../actions/modal';
import { connect } from 'react-redux';


const SubscribeButton = ({subcattitName, subcattit, currentUser, createSubscribe, openModal, removeSubscribe}) => {

  const [user_id, setCurrentUser] = useState("")
  const [subscribed, setSubscribe] = useState(false);
  const [subcattit_id, setSubcattitId] = useState(subcattitName);
  const [subcattit_name, setSubcattitName] = useState(subcattitName);
  const [subscribeText, setSubscribeText] = useState("Joined");

  useEffect (() => {
    if (currentUser){
      setCurrentUser(currentUser.id);
    }
  }, [currentUser])

  function findUserSubscripton() {
    let subScribe = {};
    Object.values(subcattit.subscribes).forEach(subscribe => subscribe.user_id === user_id ? subScribe = subscribe : null);
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
      setSubscribe(!subscribed)
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
      setSubscribe(!subscribed)
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
          (!subscribed) ? (<div>{renderJoinButton()}</div>)  : (<div>{renderLeaveButton()}</div>)
        }    
    </div>
  )


}


const mDTP = dispatch => ({
  createSubscribe: subscribe => dispatch(createSubscribe(subscribe)),
  removeSubscribe: (subscribe) => dispatch(removeSubscribe(subscribe)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(null, mDTP)(SubscribeButton)


