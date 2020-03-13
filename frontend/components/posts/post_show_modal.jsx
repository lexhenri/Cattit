import React from 'react';
import PostShowItem from './post_show_item';
import SubSidebar from '../subcattit/sub_sidebar';


class PostShowModal extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title: '',
      body: '',
      author_id: '',
      subcattit_id: ''
    }
    this.removeHandler = this.removeHandler.bind(this);
    this.back = this.back.bind(this);
  }

  componentDidMount(){
    this.props.fetchPost(this.props.post.id);
  }

  // componentDidUpdate(preProps) {
  //   if (preProps.post.id !== this.props.post.id) {
  //     this.props.fetchPost(this.props.post.id);
  //   }
  // }
 

  removeHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    let postId = e.currentTarget.id
    this.props.removePost(postId)
  }

  back(e){
    e.stopPropagation();
    this.props.history.goBack();
  }

  render(){

    if (!this.props.post) {
      return null;
    }

    return(
      <div className="show-modal-bg">
        <div className="show-container" onClick={e => e.stopPropagation()} >
          <div className="show-topbar">
            <div className="top-close" onClick={(e) => this.back(e)}>
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="show-modal-btn">
                <polygon fill="inherit" points="11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497">
                </polygon>
              </svg>
              <span className="close">Close</span>
            </div>
          </div>
          <div className="show-content">


            <div className="show-post-column">

              <PostShowItem post={this.props.post} view={"show"} />

            </div>
            <div className="show-post-sidebar">

              <SubSidebar page={"create"} subcattitInfo={this.props.subcattitInfo} subcattit={this.props.post.name} />

            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default PostShowModal;