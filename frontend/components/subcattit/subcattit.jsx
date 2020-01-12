import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
// import { withRouter } from "react-router";
import { Redirect } from 'react-router-dom';
import CreatePostFormContainer from '../posts/create_post_form_container';

class Subcattit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: 200
    }
  }
  
  componentDidMount(){
    this.props.fetchSubcattit(this.props.subcattit)
    .then(() =>
      this.setState({
        status: this.props.error
      })
    )
  }
  

  componentDidUpdate(preProps, preState) {
    // if (preProps.subcattit !== this.props.subcattit) {
    if (preProps.match.params.subcattit !== this.props.match.params.subcattit) {
      console.log("update!")
        this.props.fetchSubcattit(this.props.subcattit)
          .then(() =>
            this.setState({
              status: this.props.error
            }))
          // console.log(this.state)
          // this.props.clearError();
      }
  }


  // componentWillUnmount(){
  //   this.props.clearError();
  // }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({
  //       errors: nextProps.errors
  //     });
  //   }
  // }

  //if subcattit === null?

  
  render(){
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