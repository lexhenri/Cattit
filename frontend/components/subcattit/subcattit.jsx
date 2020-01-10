import React from 'react';
import PostIndexContainer from '../posts/post_index_container'
import CreatePostFormContainer from '../posts/create_post_form_container';

class Subcattit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      posts: '',
      description: ''
    }
  }

  
  componentDidMount(){
    this.props.fetchSubcattit(this.props.subcattit);
   
  } 
  
  // componentWillReceiveProps() {

  // }
  
  render(){
    // debugger
    if (this.props.subcattitInfo === undefined) return null;
    return (
      <div className="subcattit-grid">
        <div className="top-banner"></div>
        <div className='desc-banner'><h1>{this.props.subcattitInfo.description}</h1></div>
        <div className="col-spacer"></div>
        <div className="post-container">
        <PostIndexContainer subcattit={this.props.subcattit} />
        {/* <CreatePostFormContainer subcattit={this.props.subcattit} /> */}
       

        <div className="col-spacer"></div>
        </div>
      </div>
    )
  }
}

export default Subcattit;