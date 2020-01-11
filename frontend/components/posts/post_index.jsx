import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title: '',
      body: '',
      author_id: '',
      subcattit_id: ''
    }
  }

  componentDidMount(){
    this.props.fetchPosts(this.props.subcattit);
  }

  componentDidUpdate(preProps){
    if (this.props.subcattit !== preProps.subcattit) {
      this.props.fetchPosts(this.props.subcattit)
    }
  }

  render(){
    const { posts, fetchUser } = this.props;

    return(
      <div className="post-container">
          {
            posts.map(post => <PostIndexItem post={post} fetchUser={fetchUser} key={post.id} />)
          }
      </div>
    )
  }
}

export default PostIndex;