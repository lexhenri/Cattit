import React from 'react';
import PostIndexContainer from '../posts/post_index_container'

class Subcattit extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name:'',
      posts: ''
    }
  }

  render(){
    return (
      <div>
        <h1>this is a subcattit,nya</h1>
        <PostIndexContainer subcattit={this.props.subcattit} />
      </div>
    )
  }
}

export default Subcattit;