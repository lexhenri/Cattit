import React from 'react';
import { closeDropdown, openDropdown } from '../../actions/dropdown';
import { connect } from 'react-redux';


function Dropdown({dropdown, openDropdown, closeDropdown}) {

  if (!dropdown){
    return null;
  }

  switch(dropdown) {
    case  'open':

      break;
    case 'closed':
    
      break;
    default:
      return null;
  }

  return (
      <div className="dropdown">
          <button class="dropdown-btn" onClick={openDropdown}>
            <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" className="dropdown-icon"><g fill="inherit"><path d="M146.8 142.6h-37.6c-31.1 0-56.5 25.3-56.5 56.5 0 5.2 4.2 9.4 9.4 9.4h131.8c5.2 0 9.4-4.2 9.4-9.4 0-31.2-25.3-56.5-56.5-56.5zM128 130.7c20.1 0 36.4-16.3 36.4-36.4v-9.4c0-20.1-16.3-36.4-36.4-36.4S91.6 64.8 91.6 84.9v9.4c0 20.1 16.3 36.4 36.4 36.4z"></path></g></svg>
            <svg className="dropdown-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"></path></svg>
          </button>
      <div class="dropdown-content" onClick={e => e.stopPropagation()}>
            <ul>Hi, {this.props.currentUser.username}</ul>
            <ul><button onClick={this.props.logout}>Log out</button></ul>
          </div>
          </div>
  )
}


const mapStateToProps = state => {
  return {
    dropdown: state.ui.dropdown
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeDropdown: () => dispatch(closeDropdown())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);

