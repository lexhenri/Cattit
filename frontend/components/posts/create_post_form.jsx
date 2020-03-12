import React from 'react';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
import SubSidebar from '../subcattit/sub_sidebar';
import TextPostForm from './text_post_form';
import ImagePostForm from './image_post_form';
import LinkPostForm from './link_post_form';



class CreateForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      post_type: 'text',
      clicked: 'first',
      photoFile: ''

      // author_id: this.props.currentUser.id,
    }
    
    this.handleErrors = this.handleErrors.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateType = this.updateType.bind(this);
    this.renderImageButton = this.renderImageButton.bind(this);
    this.renderLinkButton = this.renderLinkButton.bind(this);
    this.renderTextButton = this.renderTextButton.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }
  
  componentDidMount(){
    this.props.clearErrors();
    this.props.fetchSubcattit(this.props.subcattit);
  }
  

  handleInput(e) {
    // debugger;
    // e.preventDefault();
    this.setState({ 
      title: e.currentTarget.value 
    });
  }
  
  handleChange(value){
    // debugger
    // console.log(value);
    this.setState({
      body: value
    })
  }

  updateType(post_type) {
    this.setState({ post_type });
  }

  handleSubmit(e) {
    e.preventDefault();
    let post = this.state;
    post.author_id = this.props.currentUser.id;
    post.subcattit_id = this.props.subcattitObj.id;
    this.props.createPost(post)
      .then(() => this.props.history.push(`/mew/${this.props.subcattit}`));
  }

  // handleFile(e) {
  //   const file = e.currentTarget.file;
  //   const fileReader = new FileReader();
  //   fileReader.onloadend = () => {
  //     let newPhotos = this.state.photos.concat([file]);
  //     let newPhotosURLs = this.state.photosURLs.concat([fileReader.result]);
  //     this.setState({
  //       photos: newPhotos,
  //       photosURLs: newPhotosURLs
  //     })
  //   }
  //   if (file) {
  //     fileReader.readAsDataURL(file)
  //   }
  // }

  componentDidUpdate(preProps, preState) {
    if (preProps.location.pathname !== this.props.location.pathname){
      this.props.clearErrors();
      this.props.fetchSubcattit(this.props.subcattit)
    }
    if (this.props.currentUser === undefined) {
      this.props.history.push(`/mew/${this.props.subcattit}`)
    }
  }

  handleErrors() {
    const errorCSS = `textarea:focus { border-color: #ea0027 !important; }`
    return (
      <ul>
        {this.props.errors.map((error, i) => <ul key={i}>{error}</ul>)}
        {this.props.errors.map((error) => error ? <style>{errorCSS}</style> : null)
  }
      </ul>
    )
  }

  toggleTab(e) {
    e.preventDefault();
     this.setState({
      clicked: e.currentTarget.id
    })
  }

  
  renderTextButton(){
    return (
      <div className={this.state.clicked === 'first' ? 'tab-highlight' : 'tab-button'} id="first" onClick={e => this.toggleTab(e)}>
          <div className={this.state.post_type === 'text' ? 'content-highlight' : 'tab-content'} onClick={() => this.updateType('text')}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.6498441,5.62718315 L4.38195636,5.62718315 C4.0364078,5.62718315 3.75596259,5.34673795 3.75596259,5.00118939 C3.75596259,4.65564083 4.0364078,4.37519562 4.38195636,4.37519562 L15.6498441,4.37519562 C15.9953927,4.37519562 16.2758379,4.65564083 16.2758379,5.00118939 C16.2758379,5.34673795 15.9953927,5.62718315 15.6498441,5.62718315 M15.6498441,9.38314574 L4.38195636,9.38314574 C4.0364078,9.38314574 3.75596259,9.10270054 3.75596259,8.75715198 C3.75596259,8.41160342 4.0364078,8.13115821 4.38195636,8.13115821 L15.6498441,8.13115821 C15.9953927,8.13115821 16.2758379,8.41160342 16.2758379,8.75715198 C16.2758379,9.10270054 15.9953927,9.38314574 15.6498441,9.38314574 M13.1458691,13.1391083 L4.38195636,13.1391083 C4.0364078,13.1391083 3.75596259,12.8586631 3.75596259,12.5131146 C3.75596259,12.167566 4.0364078,11.8871208 4.38195636,11.8871208 L13.1458691,11.8871208 C13.4914176,11.8871208 13.7718628,12.167566 13.7718628,12.5131146 C13.7718628,12.8586631 13.4914176,13.1391083 13.1458691,13.1391083 M17.6104566,0.000751192518 L2.42134388,0.000751192518 C1.08547319,0.000751192518 0,1.08622438 0,2.42084309 L0,17.5811601 C0,18.4174878 0.423171785,19.1837041 1.13054474,19.6306637 C1.52116485,19.8748012 1.96061247,20 2.410076,20 C2.77440437,20 3.14624466,19.9173688 3.49805316,19.7470985 L7.81490616,17.5210647 L17.5278254,17.5210647 C18.8611921,17.5210647 20.0318005,16.3504563 20.0318005,15.0170896 L20.0318005,2.42084309 C20.0318005,1.08622438 18.9463273,0.000751192518 17.6104566,0.000751192518"></path></svg>
        <span>Post</span>
      </div>
        </div>
    )
    }

  renderImageButton(){
    return (
      <div className={this.state.clicked === 'second' ? 'tab-highlight' : 'tab-mid'} id="second" onClick={e => this.toggleTab(e)}>
        <div className={this.state.post_type === 'image' ? 'content-highlight' : 'tab-content'} onClick={() => this.updateType('image')}>
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="inherit" fillRule="evenodd" d="m8.986223,16.927949l2.240493,-3.024991l-3.521864,-5.376734c-0.102125,-0.156 -0.274999,-0.251499 -0.461249,-0.253749c-0.158375,-0.01 -0.362749,0.0875 -0.468249,0.241249l-5.239359,7.532977c-0.12,0.170624 -0.1335,0.394124 -0.037,0.579248c0.0975,0.185249 0.287499,0.301999 0.497498,0.301999l6.989729,0zm8.513724,3.071991l-14.999954,0c-1.378746,0 -2.499992,-1.121247 -2.499992,-2.499992l0,-14.999954c0,-1.378746 1.121247,-2.499992 2.499992,-2.499992l14.999954,0c1.378746,0 2.499992,1.121247 2.499992,2.499992l0,14.999954c0,1.378746 -1.121247,2.499992 -2.499992,2.499992zm0.803498,-3.071991c0.221249,0 0.420999,-0.129125 0.511873,-0.331249c0.091,-0.201999 0.05375,-0.437749 -0.092,-0.602748l-4.238862,-4.778985c-0.11125,-0.12575 -0.257124,-0.186249 -0.444499,-0.188749c-0.169624,0.008 -0.325624,0.091 -0.425499,0.226874l-3.540739,4.778985c-0.126875,0.170749 -0.145,0.398749 -0.0495,0.587123c0.094375,0.189749 0.288749,0.308749 0.500748,0.308749l7.778726,0l-0.00025,0zm-2.982116,-11.404215c0,-1.173746 -0.952497,-2.124994 -2.124994,-2.124994c-1.174996,0 -2.124994,0.951247 -2.124994,2.124994c0,1.172496 0.949997,2.123744 2.124994,2.123744c1.172496,0 2.124994,-0.951247 2.124994,-2.123744z"></path></svg>
          <span>Image</span>
        </div>
        </div>
    )
  }

  renderLinkButton(){
    return (
      <div className={this.state.clicked === 'third' ? 'tab-highlight' : 'tab-button'} id="third" onClick={e => this.toggleTab(e)}>
        <div className={this.state.post_type === 'link' ? 'content-highlight' : 'tab-content'} onClick={() => this.updateType('link')}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"></path><path d="M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"></path></svg>
        <span>Link</span>
      </div> 
      </div>        
    )
  }

  

  render(){

    return(
      <div className="create-page-container">
      <div className="post-create-container">
        <div className="form-title">
          <h2 className="create-title">Create a post</h2>   
       </div>
       <div className="post-form-container">

        <div className="tab-container">
         
              {this.renderTextButton()}
              {this.renderImageButton()}  
              {this.renderLinkButton()}
           
        </div>
        
            <form className='create-post-form'>
              <textarea
                className="title-bar"
                placeholder="Title"
                value={this.state.title}
                onChange={e => this.handleInput(e)} />

              {(() => {
                switch (this.state.post_type) {
                  case 'text':
                    return <TextPostForm body={this.state.body} handleChange={this.handleChange} />;
                  case 'image':
                    return <ImagePostForm />;
                  case 'link':
                    return <LinkPostForm />;
                  default:
                    return null;
                }
              })()}

              <div className="create-form-bottom">
                <div className="create-error">{this.handleErrors()}</div>
               
                  <button className="post-btn" type="submit" onClick={this.handleSubmit}>Post</button>
              
              </div>
            </form>
       </div>
       </div>
       <div className="create-sidebar-container">
          <SubSidebar subcattitInfo={this.props.subcattitObj} subcattit={this.props.subcattit} page={"submit"}/>
       </div>
       </div>


    )
    
  }
}

export default CreateForm;