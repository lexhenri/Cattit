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
    this.demoLogin = this.demoLogin.bind(this);
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
        {Object.keys(this.props.errors).map((error, i) => <ul key={i}>{this.props.errors[error]}</ul>)}
        {Object.keys(this.props.errors).map((error) => this.props.errors[error] ? <style>{errorCSS}</style> : null)}
      </ul>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(this.props.closeModal);
  }

  demoLogin() {
    const demoUser = {
      username: 'Breakfast',
      password: 'kittens'
    };
    this.state = demoUser;
    const intervalLength = 75;
    const timer = demoUser.username.length * intervalLength;
    this.totalTimer = timer + (demoUser.password.length * intervalLength) + 1000;
    this.typeInputInfo("username", demoUser.username, intervalLength);
    setTimeout(() => this.typeInputInfo("password", demoUser.password, intervalLength), timer)
  }
  typeInputInfo(field, value, intervalLength) {
    let incrementedValue = "";
    setInterval(() => {
      if (value.length > 0) {
        incrementedValue += value.slice(0, 1);
        value = value.slice(1);
        this.setState({ [field]: incrementedValue });
      } else {
        clearInterval();
      }
    }, intervalLength);
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
          <a href="https://github.com/minibells">Github</a>  ·  <a onClick={this.demoLogin} className="demo-login">Demo Login</a>
          <p>New to Cattit? <a className="small-signup" onClick={() => this.props.openModal('signup')}>Sign Up</a></p>
        </div>
      </div>
    );
  }
}

export default Login