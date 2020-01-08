import React from 'react';

class Signup extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(this.props.closeModal);
  }

  render() {
    return (
      <div className="session-form">
        <h2 className="title">By having a Cattit account, you can play, meow, and yowl opinions on all your favorite Cattit content.</h2>
        <form className="session-form">
          <div className="float-container">
          <label className="float-text" htmlFor="createEmail">Email</label>
            <input
              id="createEmail"
              className="text-input"
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')} />
          </div>
{/*       
          <label>Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')} />
          </label>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')} />
          </label> */}
          <button className="submit-btn" onClick={this.handleSubmit}>Sign up</button>
        </form>
        <div className="bottom-text">
          <p>Already a Cattitor? <a href="#" className="small-signup" onClick={() => this.props.openModal('login')}>Log in</a></p>
        </div>
      </div>
    );
  }
};

export default Signup