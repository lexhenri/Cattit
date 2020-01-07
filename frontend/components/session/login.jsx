import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleErrors() {
    return (
      this.props.errors.map(error => <ul>{error}</ul>)
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/'))
  }

  render() {
    
    return (
      <div className="session-form">
        <h2>Log In</h2>
        { this.handleErrors() }
        <form>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')} />
          </label>
          {/* <label>Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')} />
          </label> */}
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')} />
          </label>
          <button onClick={this.handleSubmit}>Login!</button>
        </form>
      </div>
    );
  }
}

export default Login