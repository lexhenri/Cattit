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
            <AllPostContainer />
          </div>
          <div className="sidebar-container">
            <Suggested />
          </div>
          </div>
  )
  }

}

export default Frontpage;