import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const TempSplash = () => {
  return (
    <div className="feed-container">
      <div className='message-container'>
        <div className="message-box">
          <h1 className="title">Being built right meow.</h1>
        </div>
        <div className="nav-btn">
          <NavLink className="btn signup" to="/mew/mice">Take a peek?</NavLink>
        </div>
      </div>
    </div>
  )
}

export default TempSplash;