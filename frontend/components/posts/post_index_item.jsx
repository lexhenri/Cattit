import React from 'react';

const PostIndexItem = props => {

  return (
    <div className="post">
      <div className="post-title">
        {props.post.title}
      </div>
      <div className="post-body">
        {props.post.body}
        </div>
    </div>
  )
}

export default PostIndexItem;