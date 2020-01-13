import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
// import { withRouter } from "react-router";
import { Redirect } from 'react-router-dom';
import CreatePostFormContainer from '../posts/create_post_form_container';
// import icon from '1vlmbsmvdt941.jpg';


class Subcattit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      errors: false
  }
}
  
  componentDidMount(){
    this.props.fetchSubcattit(this.props.subcattit)
   
      this.setState({
        errors: this.props.error
      })
    }
  

  componentDidUpdate(preProps, preState) { 
    // if (preProps.subcattit !== this.props.subcattit) {
    if (preProps.match.params.subcattit !== this.props.match.params.subcattit) {
      this.props.fetchSubcattit(this.props.subcattit)
      console.log("update!")
      }
  }


  //if subcattit === undefined?

  
  render(){
  
    // <Redirect to={{ pathname: '/404', state: { response_error: true } }} />
    if (this.props.subcattitInfo === undefined) return null;
  
    return (
      <div>
      <div className="top-banner"></div>
        <div className='desc-banner'>
          <div className="header-content">
              <img src={window.icon} className="header-pic" />
            <div className="text-container">
          <h1 className="header-title">{this.props.subcattitInfo.name}</h1>
          <h2 className='subcat-title'>m/{this.props.subcattitInfo.name}</h2>
            </div>
          <button className="follow-btn"><span>Join</span></button>
          </div>
          </div>

        <div className="subcattit-container">
        <PostIndexContainer subcattit={this.props.subcattit} />
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