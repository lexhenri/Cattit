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
    if (preProps.subcattit !==  this.props.subcattit) {
      this.props.fetchPosts(this.props.subcattit)
    }
  //   if (preProps.match.params.subcattit !== this.props.match.params.subcattit) {
  //     console.log("update!")
  //     this.props.fetchPosts(this.props.subcattit)
  // }
}

  render(){
    const { posts } = this.props;

    return(
      <div className="post-container">
        {
        posts ? ( posts.map(post => <PostIndexItem post={post} key={post.id} />)
        ) : (
          <div className="post-container">
            <div className="post">
            <h2 className="title">No posts yet!</h2>
            </div>
            </div>)
        }
      </div>
    )
  }
}

export default PostIndex;