import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Suggested from './suggested';
import AllIcon from '../../../app/assets/images/cattit_logos/cattit_logo.svg';
import AllBanner from '../../../app/assets/images/cat_types.jpg';
import { HideUntilLoaded } from 'react-animation';
import SpinLogo from '../../../app/assets/images/cattit_logos/cattit-head-logo.png';
import PostIndexContainer from '../posts/post_index_container';

class Frontpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author_id: '',
      subcattit_id: '',
      subcattit: '',
      modal: 'closed',
      speed: 5,
    }
  }

  componentDidMount() {
    this.props.clearError();
    this.props.fetchAllPosts();
    // this.props.fetchFrontpage(this.props.frontpage)

  }

  render(){
    // debugger;

    // if (this.props.posts === undefined) return null;

    return (

      <div>
        <div className="top-banner">
          <img src={AllBanner} />
        </div>
        <div className='desc-banner'>
          <div className="header-content">
            <img src={AllIcon} className="all-icon" />
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
            <HideUntilLoaded
              animationIn="bounceIn"
              Spinner={() =>
                <img style={{ animation: `spin ${this.state.speed}s linear infinite` }} src={SpinLogo} alt="img" />}
            >
            <PostIndexContainer posts={this.props.posts}/>
            </HideUntilLoaded>

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