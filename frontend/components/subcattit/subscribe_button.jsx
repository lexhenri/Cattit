import React, { useState, useEffect } from 'react';
import { getSubscribe, removeSubscribe } from '../../actions/subscribe';
import { openModal } from '../../actions/modal';
import { connect } from 'react-redux';


const SubscribeButton = ({subcattitName, currentUser, getSubscribe, openModal, removeSubscribe}) => {

  const [user_id, setCurrentUser] = useState("")
  const [subscribed, setSubscribe] = useState(false);
  // const [user_id, setUserId] = useState(currentUser.id);
  const [subcattit_id, setSubcattitId] = useState(subcattitName);



  useEffect (() => {
    if (currentUser){
      setCurrentUser(currentUser.id);
    }
  }, [currentUser])

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

  return (
    <div>
      <button className="follow-btn" onClick={(e) => handleSubscribe(e)}>
        {
          (!subscribed) ? (<span>Join</span>)  : (<span>Joined</span>)
        }
        </button>
    </div>
  )


}

// const mSTP = (state, ownProps) => {

//  return {
//     currentUser: current_user,
//     userUpdoots: user_updoots,
//     userDowndoots: user_downdoots,
//     postDoots: totalDoots,
//     post: ownProps.post,
//     posts: state.entities.posts,
//   }
// };

const mDTP = dispatch => ({
  getSubscribe: subscribe => dispatch(getSubscribe(subscribe)),
  removeSubscribe: () => dispatch(removeSubscribe(subscribe)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(null, mDTP)(SubscribeButton)


