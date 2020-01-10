import React from 'react';
import PostIndexContainer from '../posts/post_index_container'
import CreatePostFormContainer from '../posts/create_post_form_container';

class Subcattit extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      posts: '',
      id: this.props.subcattit.id
    }
  }



  render(){
    const { subcattits } = this.props

    return (
      <div>
        <h1>this is a subcattit, nya</h1>
        <PostIndexContainer subcattit={this.props.subcattit} />
        {/* <CreatePostFormContainer subcattit={this.props.subcattit} /> */}
      </div>
    )
  }
}

export default Subcattit;