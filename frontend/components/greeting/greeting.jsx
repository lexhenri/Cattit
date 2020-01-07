import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      this.props.currentUser ? (
        <div class="nav">
          <h2>Hi, {this.props.currentUser.username}</h2>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      ) : (
          <div class="nav">
            <p class='nav_link'>
              <Link to='/signup' >Sign Up</Link>
              <br />
              <Link to='/login'>Log In</Link>
            </p>
          </div>
        )
    )
  }
};

export default Greeting