import React, { useState, useEffect } from 'react';

const PostIndexItem = props => {


  return (
    <div className="post">
      <div className="karma-bar"></div>
      <div className="content">
        <div className="top-info"><span>Posted by {props.post.username}</span></div>
      <div className="post-title">
          <h3>{props.post.title}</h3>
      </div>
      <div className="post-body">
        <p>{props.post.body}</p>
        </div>
      </div>
    </div>
  )
}

export default PostIndexItem;