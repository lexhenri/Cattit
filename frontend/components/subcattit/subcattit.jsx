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

  componentDidUpdate(preProps) {
    if (this.props.subcattit !== preProps.subcattit) {
      this.props.fetchSubcattit(this.props.subcattit)
    }
  }

  
  render(){
    // console.log(this.props.subcattit);
    if (this.props.subcattitInfo === undefined) return null;
    return (
      <div>
      <div className="top-banner"></div>
        <div className='desc-banner'>
          <div className="header-content">
            <div className="header-title">
          <h1 className="subcat-title">{this.props.subcattitInfo.name}</h1>
          <h2>m/{this.props.subcattitInfo.name}</h2>
            </div>

          </div>
          </div>

        <div className="subcattit-container">
        <PostIndexContainer subcattit={this.props.subcattit} />
        {/* <CreatePostFormContainer subcattit={this.props.subcattit} /> */}
        <div className="sidebar-container">
          <div className="box">
              <div className="box-banner"><h1>About Community</h1></div>
            <div className="box-content">
                <h3>{this.props.subcattitInfo.description}</h3>
            </div>
          </div>
        </div>
        </div>
       

      </div>
      
    )
  }
}

export default Subcattit;