import React from 'react';
import AllPostIndexItem from './all_post_index_item';

class AllPostIndex extends React.Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   title: '',
    //   body: '',
    //   author_id: '',
    //   subcattit_id: ''
    // }
  }

  componentDidMount() {
    this.props.fetchAllPosts();
  }


  render() {
    const { posts } = this.props;
    return (
      <div className="feed-container">
        { posts.map((post, i)=>
            <div onClick={() => this.props.openPreview(post)} key={i}>
              <AllPostIndexItem post={post} key={i} subcattit={post.name}/>
            </div>)
        }
      </div>
    )
  }
}

export default AllPostIndex;