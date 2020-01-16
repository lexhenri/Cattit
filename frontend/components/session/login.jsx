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
    this.props.clearErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleErrors() {
    const errorCSS = `.text-input:focus { border-color: #ea0027; }`
    //some jquery shit here to remove and add stuff when cleared 
    return (
      <ul>
        {this.props.errors.map(error => <ul key={error}>{error}</ul> ) }
        {this.props.errors.map(error => error ? <style>{errorCSS}</style> : null ) }
      </ul>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(this.props.closeModal);
  }

  render() {
    
    return (
      
      <div>
        <form className="session-form">
          <h2 className="title">Sign in</h2>
          <div className="float-container">
            <label className="float-text" htmlFor="loginUsername">Username</label>
            <input
              id="loginUsername"
              className="text-input"
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              required />
          </div>

          {/* <label>Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')} />
          </label> */}
          <div className="float-container">
          <label className="float-text" htmlFor="loginPassword">Password</label>
            <input
              className="text-input"
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')} />
      
          </div>
          <div className="error"> {this.handleErrors()} </div>
          <button className="submit-btn" onClick={this.handleSubmit}>Sign in</button>
        </form>
        <div className="bottom-text">
          <a href="https://github.com/minibells">Github</a>  ·  <a href="https://github.com/minibells">Temp</a>
          <p>New to Cattit? <a className="small-signup" onClick={() => this.props.openModal('signup')}>Sign Up</a></p>
        </div>
      </div>
    );
  }
}

export default Login