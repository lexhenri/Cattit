import React, { useState, useEffect } from 'react';
import TimeAgo from 'timeago-react';



const PostIndexItem = props => {
  // let num_comments = props.post.comment_ids.length
  
  return (
    <div className="post">
      <div className="karma-bar">
        <i className="fas fa-angle-double-up"></i>
        <span className="karma-bar">{props.post.upvotes}</span>
        <i className="fas fa-angle-double-down"></i>
      </div>
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
        {
        (props.view !== "show") ? 
          (
          <div className="bottom-fade">
        <div className="post-body" dangerouslySetInnerHTML={{ __html: props.post.body }} />
            </div>
          ) : (
          <div className="post-body" dangerouslySetInnerHTML={{ __html: props.post.body }} />
          )
        }
        <div className="post-bottom">
            <i className="fas fa-comment-alt comment-btn"></i>
         
            {
              (props.post.num_comments) ? (<span className="comments">{props.post.num_comments} Comments</span>) : (<span className="comments">0 Comments</span>)
            } 
  
        </div>
      </div>
    </div>
  )
}

export default PostIndexItem;