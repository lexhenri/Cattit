import React from 'react';

class CreateForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      author_id: this.props.current_user.id,
      subcattit_id: this.props.subcattit
    }
    
    this.handleInput = this.handleInput.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewPost(this.state)
  }

  handleErrors() {
    const errorCSS = `.text-input:focus { border-color: #ea0027; }`
    //some jquery shit here to remove and add stuff when cleared 
    return (
      <ul>
        {this.props.errors.map(error => <ul key={error}>{error}</ul>)}
        {this.props.errors.map(error => error ? <style>{errorCSS}</style> : null)}
      </ul>
    )
  }

  render(){

    return(
      <div className="create-form">
        <form className="post-form">
          <h2 className="title">Don't shitpost.</h2>

          <div className="float-container">
            <label htmlFor="createTitle">Title</label>
            <input
              id="createTitle"
              className="text-input"
              type="text"
              value={this.state.title}
              onChange={this.handleInput('title')}
              required />
          </div>

          <div className="float-container">
            <label htmlFor="createBody">Body</label>
            <input
              id="createBody"
              className="text-input"
              type="text"
              value={this.state.body}
              onChange={this.handleInput('body')}
              required />
          </div>

          <div className="error"> {this.handleErrors()} </div>
          <button className="submit-btn" onClick={this.handleSubmit}>Post it!</button>
        </form>

      </div>
    )
  }
}

export default CreateForm;