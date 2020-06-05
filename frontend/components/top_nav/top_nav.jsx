import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from './dropdown';
// import TopLogo from '../../../app/assets/images/cattit_logos/cattit_logo.svg'
import TopLogo from '../../../app/assets/images/cattit_logos/cattit-01.svg'
import { Translate, Localize } from 'react-i18nify';

class TopNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
      <div className="header">
        <div className="logo">
          <Link to="/">
              <img src={TopLogo} className="top-logo" />
            </Link>
        </div>
          {
            this.props.currentUser ? (
              <Dropdown currentUser={this.props.currentUser} logout={this.props.logout}/>
            ) : (
                <div className='top-buttons'>
                  <button className="btn login" onClick={() => this.props.openModal('login')}><Translate value="application.login" /></button>
                  <button className="btn signup" onClick={() => this.props.openModal('signup')}><Translate value="application.signup" /></button>
                </div>
              )
          }
      {/* <div className="temp"></div> */}
        </div>
     
      </div>
    )
  };
}

export default TopNav