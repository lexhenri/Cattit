import React from 'react';
import AllPostContainer from './all_posts_container';
import { Link, NavLink } from 'react-router-dom';
import Suggested from './suggested';


class Frontpage extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.clearError();
    // this.props.fetchFrontpage(this.props.frontpage)

  }

  render(){
    return (

      <div>
        <div className="top-banner">
          {/* <img src={this.props.subcattitInfo.bannerUrl} /> */}
        </div>
        <div className='desc-banner'>
          <div className="header-content">
            {/* <img src={this.props.subcattitInfo.iconUrl} className="header-pic" /> */}
            <div className="text-container">
              <h1 className="header-title">all</h1>
              <h2 className='subcat-title'>cattit/all</h2>
            </div>
            {/* <button className="follow-btn"><span>Join</span></button> */}
          </div>
        </div>

        <div className="subcattit-container">
          <div className="subcat-feed-container">
            {/* <div className="mini-submit">
              {
                (this.props.currentUser !== undefined) ?
                  (<Link to={{ pathname: `/mew/${this.props.subcattit}/submit` }}>
                    <input className="mini-input" placeholder="Create Post" />
                  </Link>
                  ) : (<a onClick={() => this.props.openModal('login')} >
                    <input className="mini-input" placeholder="Create Post" />
                  </a>)
              }
            </div> */}
            <AllPostContainer />
          </div>
          <div className="sidebar-container">
            <Suggested />
           </div>
          {/* <SubSidebar subcattit={this.props.subcattit} subcattitInfo={this.props.subcattitInfo} page={"subcattit"} currentUser={this.props.currentUser} openModal={this.props.openModal} /> */}

        </div>
      </div>
   
  )
  }

}

export default Frontpage;