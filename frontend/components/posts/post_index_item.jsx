import React, { useState, useEffect } from 'react';
import TimeAgo from 'timeago-react';



const PostIndexItem = props => {

  return (
    <div className="post">
      <div className="karma-bar"></div>
      <div className="content">
        <div className="post-head">
        <div className="top-info">
          <span>Posted by {props.post.username}</span>
          <span className="time-ago"><TimeAgo datetime={props.post.created_at} locale='en' /></span>
          </div>
      <div className="post-title">
          <h3>{props.post.title}</h3>
      </div>
        </div>
      <div className="post-body">
        <p>{props.post.body}</p>
        </div>
        <div className="post-bottom">
            <i class="fas fa-comment-alt comment-btn"></i>
          <span className="comments">
            92 Comments
          </span>
        </div>
      </div>
    </div>
  )
}

export default PostIndexItem;