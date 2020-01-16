import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
import Moment from 'moment';
import { Redirect, Route } from 'react-router-dom';
import CreatePostFormContainer from '../posts/create_post_form_container';
import { Link, NavLink } from 'react-router-dom';
import { RouteWithProps } from '../util/prop_routing';
import SubSidebar from './sub_sidebar';


class Subcattit extends React.Component {
  constructor(props){
    super(props);
  //   this.state = {
  //     errors: false
  // }
  // this.props.clearError();
}
  
  componentDidMount(){
    this.props.clearError();
    this.props.fetchSubcattit(this.props.subcattit)

      // this.setState({
      //   errors: this.props.error
      // })
    }
  

  componentDidUpdate(preProps, preState) { 
    // if (preProps.subcattit !== this.props.subcattit) {
    if (preProps.match.params.subcattit !== this.props.match.params.subcattit) {
      this.props.fetchSubcattit(this.props.subcattit)
      console.log("update!")
      this.props.clearError();

      }
  }


  //if subcattit === undefined?

  
  render(){
    Moment.locale('en');
    // <Redirect to={{ pathname: '/404', state: { response_error: true } }} />
    if (this.props.subcattitInfo === undefined) return null;
  //check if errors exist here???

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
          <div className="subcat-feed-container">
            <div className="mini-submit">
              {/* <input className="mini-input" placeholder="Create Post" > */}
            {
              (this.props.currentUser !== undefined) ?
                (<Link to={{ pathname: `/mew/${this.props.subcattit}/submit`, state: { subcattit_info: this.props.subcattitInfo } }}>
                      <input className="mini-input" placeholder="Create Post" />
                  </Link> 
                  ) : (<a onClick={() => this.props.openModal('login')} >
                      <input className="mini-input" placeholder="Create Post" />
                    </a>)
            }
          </div>
        <PostIndexContainer subcattit={this.props.subcattit} subcattitInfo={this.props.subcattitInfo}/>
          </div>
        <SubSidebar subcattit={this.props.subcattit} subcattitInfo={this.props.subcattitInfo} page={"subcattit"} currentUser={this.props.currentUser} openModal={this.props.openModal}/>
      
          </div> 
          </div>
    )
  }
}

export default Subcattit;