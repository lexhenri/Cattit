import React from 'react';
import { Link, NavLink} from 'react-router-dom';


const ErrorNotFound = (props) => {

  const handleClick = () => {
    props.history.goBack();
  }  
  
  return (
    <div className="feed-container">
      <div className='not-found-container'>
        <div className="message-box">
          <h1 className="title">Page Not Found!</h1>
        </div>
        <div className="nav-btn">
          <button className="btn signup" onClick={handleClick}>Go back meow!</button>
        </div>
      </div>
    </div>
  )
}

export default ErrorNotFound;