import React from 'react';
import AllPostContainer from '../posts/all_posts_container';
import { Link, NavLink } from 'react-router-dom';


class Frontpage extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.clearError();
    this.props.fetchFrontpage(this.props.frontpage)

  }

  render(){
    return (
    <div className="feed-container">
      < AllPostContainer />
    </div>
  )
  }

}

export default Frontpage;