import React from 'react';
import PostIndexItem from './post_index_item';

class AllPostIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      author_id: '',
      subcattit_id: ''
    }
  }

  componentDidMount() {
    this.props.fetchAllPosts();
  }


  render() {
    const { posts } = this.props;
    return (
      <div className="post-container">
        {
          posts ? (posts.map(post =>
            <a onClick={() => this.props.openShow(post)} >
              <PostIndexItem post={post} key={post.id} />
            </a>)
          ) : (
              <div className="post-container">
                <div className="post">
                  <h2 className="title">No posts yet!</h2>
                </div>
              </div>)
        }
      </div>
    )
  }
}

export default AllPostIndex;