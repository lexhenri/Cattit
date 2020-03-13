import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
import PostIndex from '../posts/post_index';
import Moment from 'moment';
import { Redirect, Route } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import SubSidebar from './sub_sidebar';


class Subcattit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      subcattit: this.props.subcattit,
      posts: this.props.posts
    }
}
  
  componentDidMount(){
    this.props.clearError();
    this.props.fetchSubcattit(this.props.subcattit);
    this.props.fetchPosts(this.props.subcattit);
    }
  

  componentDidUpdate(preProps, preState) { 
    if (preProps.match.params.subcattit !== this.props.match.params.subcattit) {
      this.props.fetchSubcattit(this.props.subcattit)
      this.setState({
        subcattit: this.props.subcattit,
        posts: this.props.posts
      })
      console.log("update!")
      this.props.clearError();

      }
  }
  
  render(){
    // debugger;
    Moment.locale('en');
    if (this.props.subcattitInfo === undefined) return null;
    // debugger;
    return (
      <div>
      <div className="top-banner">
        <img src={this.props.subcattitInfo.bannerUrl} />
      </div>
        <div className='desc-banner'>
          <div className="header-content">
              <img src={this.props.subcattitInfo.iconUrl} className="header-pic" />
            <div className="text-container">
          <h1 className="header-title">{this.props.subcattitInfo.name}</h1>
          <h2 className='subcat-title'>mew/{this.props.subcattitInfo.name}</h2>
            </div>
          {/* <button className="follow-btn"><span>Join</span></button> */}
          </div>
          </div>

        <div className="subcattit-container">
          <div className="subcat-feed-container">
            <div className="mini-submit">
            {
              (this.props.currentUser !== undefined) ?
                (<Link to={{ pathname: `/mew/${this.props.subcattit}/submit` }}>
                      <input className="mini-input" placeholder="Create Post" />
                  </Link> 
                  ) : (<a onClick={() => this.props.openModal('login')} >
                      <input className="mini-input" placeholder="Create Post" />
                    </a>)
            }
          </div>
          <PostIndexContainer subcattit={this.state.subcattit} posts={this.state.posts}/> 
          </div>
        <SubSidebar subcattit={this.props.subcattit} subcattitInfo={this.props.subcattitInfo} page={"subcattit"} currentUser={this.props.currentUser} openModal={this.props.openModal}/>
      
          </div> 
          </div>
    )
  }
}

export default Subcattit;