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
    this.props.fetchSubcattit(this.props.match.params.subcattit);
  } 
  
  // componentDidUpdate(preProps, preState) {
  //   // this.props.fetchSubcattit(this.props.match.params.subcattit);
  //   if (this.props.subcattit !== preProps.subcattit) {
  //     this.setState({
  //       name: name
  //     })
  //   }
  // }
  
  render(){
   
    return (
      <div className="subcattit-grid">
        <div className="top-banner"></div>
        <div className='desc-banner'><h1></h1></div>
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