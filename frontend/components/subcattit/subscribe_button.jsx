import React, { useState, useEffect } from 'react';
import { getSubscribe, removeSubscribe } from '../../actions/subscribe';
import { openModal } from '../../actions/modal';
import { connect } from 'react-redux';


const SubscribeButton = ({subcattitName, subcattit, currentUser, getSubscribe, openModal, removeSubscribe}) => {

  const [user_id, setCurrentUser] = useState("")
  const [subscribed, setSubscribe] = useState(false);
  const [subcattit_id, setSubcattitId] = useState(subcattitName);
  const [subcattit_name, setSubcattitName] = useState(subcattitName);



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


  function handleSubscribe(e) {
    if (currentUser) {
      e.preventDefault();
      e.stopPropagation();
      getSubscribe({subcattit_id, user_id});
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

  return (
    <div>
      <button className="follow-btn" onClick={(e) => handleSubscribe(e)}>
        {
          (!subscribed) ? (<span>Join</span>)  : (<span>Joined</span>)
        }
        </button>
      <button className="follow-btn" onClick={(e) => handleUnSubscribe(e)}>
        {
          (!subscribed) ? (<span>Join</span>)  : (<span>Joined</span>)
        }
        </button>
    </div>
  )


}


const mDTP = dispatch => ({
  getSubscribe: subscribe => dispatch(getSubscribe(subscribe)),
  removeSubscribe: (subscribe) => dispatch(removeSubscribe(subscribe)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(null, mDTP)(SubscribeButton)


