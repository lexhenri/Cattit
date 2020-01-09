import React from 'react';

const PostIndexItem = props => {

  return (
    <ul>
      <li>
        {props.post.title}
      </li>
      <li>
        {props.post.body}
      </li>
    </ul>
  )
}

export default PostIndexItem;