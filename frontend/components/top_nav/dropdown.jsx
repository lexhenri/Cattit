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
           
         
            {/* <svg className="dropdown-icon left btn-fill" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg"><g fill="inherit"><path d="M146.8 142.6h-37.6c-31.1 0-56.5 25.3-56.5 56.5 0 5.2 4.2 9.4 9.4 9.4h131.8c5.2 0 9.4-4.2 9.4-9.4 0-31.2-25.3-56.5-56.5-56.5zM128 130.7c20.1 0 36.4-16.3 36.4-36.4v-9.4c0-20.1-16.3-36.4-36.4-36.4S91.6 64.8 91.6 84.9v9.4c0 20.1 16.3 36.4 36.4 36.4z"></path></g></svg> */}
            <i className="fas fa-cat dropdown-icon left btn-fill"></i>
         
            <svg className="dropdown-icon right btn-fill" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"></path></svg>
         
           </div>
          </div>
          {
            this.state.status ? (
          
            <div className="dropdown-content" ref={(element) => {
              this.dropdownMenu = element;
            }}>
              <div className="dropdown-item">
            Hi, {this.props.currentUser.username}
                </div>
              <div className="dropdown-item logout" onClick={this.props.logout}>
              <div className="logout-btn"> 
                <svg  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="inherit"><path d="M15,2 L5,2 C4.447,2 4,2.447 4,3 L4,9 L9.586,9 L8.293,7.707 C7.902,7.316 7.902,6.684 8.293,6.293 C8.684,5.902 9.316,5.902 9.707,6.293 L12.707,9.293 C13.098,9.684 13.098,10.316 12.707,10.707 L9.707,13.707 C9.512,13.902 9.256,14 9,14 C8.744,14 8.488,13.902 8.293,13.707 C7.902,13.316 7.902,12.684 8.293,12.293 L9.586,11 L4,11 L4,17 C4,17.553 4.447,18 5,18 L15,18 C15.553,18 16,17.553 16,17 L16,3 C16,2.447 15.553,2 15,2"></path></g></svg>
              </div>
              <div className="logout-text">Log out</div>
             </div>
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

