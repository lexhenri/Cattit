import React from 'react';
import { toggleDropdown } from '../../actions/dropdown';
import { connect } from 'react-redux';


class Dropdown extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      status: false
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleToggle(e){
    e.preventDefault();
    this.setState({ status: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    if (!this.dropdownMenu.contains(event.target)) {
    this.setState({ status: false }, () => {
      document.removeEventListener('click', this.closeMenu);
     });
    }
  }

 
  render () {
    
    return (
      <div>
          <div className="dropdown-btn" onClick={this.handleToggle}>
           <div className="grid">

          <div className="dropdown-greet">{this.props.currentUser.username}</div>
           
         
            <svg className="dropdown-icon left btn-fill" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg"><g fill="inherit"><path d="M146.8 142.6h-37.6c-31.1 0-56.5 25.3-56.5 56.5 0 5.2 4.2 9.4 9.4 9.4h131.8c5.2 0 9.4-4.2 9.4-9.4 0-31.2-25.3-56.5-56.5-56.5zM128 130.7c20.1 0 36.4-16.3 36.4-36.4v-9.4c0-20.1-16.3-36.4-36.4-36.4S91.6 64.8 91.6 84.9v9.4c0 20.1 16.3 36.4 36.4 36.4z"></path></g></svg>
         
         
            <svg className="dropdown-icon right btn-fill" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"></path></svg>
         
           </div>
          </div>
          {
            this.state.status ? (
          
            <div className="dropdown-content" ref={(element) => {
              this.dropdownMenu = element;
            }}>
            <ul>Hi, {this.props.currentUser.username}</ul>
            <ul><button onClick={this.props.logout}>Log out</button></ul>
          </div>
            ) : (
              null
            )
          }
           </div>
  )
}
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

