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
    this.removeHandler = this.removeHandler.bind(this);
  }

  componentDidMount(){
    this.props.fetchPosts(this.props.subcattit);
    // console.log("mounted!")
  }

  componentDidUpdate(preProps){
    if (preProps.subcattit !==  this.props.subcattit) {
      this.props.fetchPosts(this.props.subcattit)
    }
    if (this.props.posts.length !== preProps.posts.length) {
      this.props.fetchPosts(this.props.subcattit)
    }
}

  removeHandler(postId){
    e.preventDefault();
    this.props.removePost(postId)
      .then(() => this.props.history.push(`/mew/${this.props.subcattit}`));
  }
          // <Link to={`/mew/${this.props.subcattit}/comments/${post.id}`} onClick={() => this.props.openShow('show')}>

 

  render(){
    const { posts } = this.props;
    return(
      <div className="post-container">
        {
        posts ? ( posts.map((post, i) => 
          <a onClick={() => this.props.openShow(post)} key={i} >
            <PostIndexItem 
              post={post} 
              key={i} 
              subcattit={this.props.subcattit} 
              removeHandler={this.removeHandler.bind(this)} 
              currentUser={this.props.currentUser} />
          </a>)
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
// { post: post, subcattit: this.props.subcattitInfo }

export default PostIndex;