import React from 'react';

class Subcattit extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name:'',
      posts: ''
    }
  }

  render(){
    return (
      <h1>this is a subcattit</h1>
    )
  }
}

export default Subcattit;