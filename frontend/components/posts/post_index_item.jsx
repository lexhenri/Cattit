import React from 'react';

const PostIndexItem = props => {

  const {post} = props;

  return (
    <ul>
      <li>
        {post.title}
      </li>
      <li>
        {post.body}
      </li>
    </ul>
  )
}

export default PostIndexItem;