import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import PostIndexItem from './post_index_item';
import PostShowModal from './post_show_modal';

class PostIndex extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title: '',
      body: '',
      author_id: '',
      subcattit_id: '',
      subcattit: '',
      modal: 'closed'

    }
    this.removeHandler = this.removeHandler.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount(){
    // debugger;
    this.setState({
      subcattit: this.props.subcattit
    })
    this.props.fetchPosts(this.props.subcattit);
    // console.log("mounted!")
  }

  componentDidUpdate(preProps){
    if (preProps.subcattit !==  this.props.subcattit) {
      this.props.fetchPosts(this.props.subcattit);
    // } else if (preProps.posts.length !== Object.values(this.props.posts).length) {
    //   this.props.fetchPosts(this.props.subcattit)
    // }
  }
}

  removeHandler(e){
    e.preventDefault();
    e.stopPropagation();
    let postId = e.currentTarget.id
    this.props.removePost(postId)
  }
          // <Link to={`/mew/${this.props.subcattit}/comments/${post.id}`} onClick={() => this.props.openShow('show')}>

 openModal(e, post){
   e.preventDefault();
   e.stopPropagation();
   let postId = e.currentTarget.id;
   this.setState({
     post: this.props.posts[postId],
     modal: 'open'
   });
  //  this.props.fetchPost(this.state.post.id);
  //  console.log(this.state.post);
  //  this.props.openShow(post)
 }

 closeModal(e){
   e.preventDefault();
   e.stopPropagation();
   this.props.closeShow();
   this.setState({
     modal: 'closed'
   })
 }

  render(){

    // debugger;
    if (this.props.posts === undefined) return null;
    const { posts } = this.props;

    return(


      <div className="post-container">
        <PostShowModal post={this.state.post} modalView={this.state.modal} closeModal={this.closeModal}/>
        { Object.values(posts).map((post, i) => (
          // <Link to={{
            //   pathname: `/mew/${this.state.subcattit}/posts/${post.id}`,
            //   state: { modal: true },
            //   }}
            //   onClick={() => this.props.openShow(post)}
            //   key={i}>
            <div onClick={(e) => this.openModal(e, post)} key={i} id={post.id}>
            <PostIndexItem 
              post={post} 
              key={i} 
              subcattit={this.state.subcattit} 
              removeHandler={this.removeHandler.bind(this)} 
              currentUser={this.props.currentUser} 
              />
         </div>
            // </Link>
            ))
        }
      </div>
    )
    
  // render(){
  //   const { posts } = this.props;
  //   return(
  //     <div className="post-container">
  //       { Object.values(posts).map((post, i) => 
  //         <div onClick={(e) => this.openModal(e, post)} key={i}>
  //           <PostIndexItem 
  //             post={post} 
  //             key={i} 
  //             subcattit={this.props.subcattit} 
  //             removeHandler={this.removeHandler.bind(this)} 
  //             currentUser={this.props.currentUser} />
  //             </div>)
  //       }
  //     </div>
  //   )
  }
}

export default PostIndex;