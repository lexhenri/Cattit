import React from 'react';

class KarmaBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      updoots: this.props.post.updoots.length,
    }

    this.removeDoot = this.removeDoot.bind(this);
    this.giveDowndoot = this.giveDowndoot.bind(this);
    this.giveUpdoot = this.giveUpdoot.bind(this);
  }

  // componentDidMount(){
  //   this.props.fetchPost(this.props.post.id)
  // }

  removeDoot(e, post) {
    // debugger;
    e.preventDefault();
    e.stopPropagation();
    let downDoot = post.downdoots.length;
    let upDoot = post.updoots.length;
    if (downDoot > 0 ) {
      this.props.removeDowndoot(post);
    } else if (upDoot > 0) {
      this.props.removeUpdoot(post);
    } 
  }

  giveUpdoot(e, post) {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.currentUser !== undefined){
      this.props.giveUpdoot(post)
    }
    else {
      this.props.openModal("login")
    }
  }

  giveDowndoot(e, post) {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.currentUser !== undefined){
      this.props.giveDowndoot(post)
    } else {
      this.props.openModal("login")
    }
  }

  renderUpdoots(){
    const updoots = this.props.post.updoots
    return (
      <div>
        {
          updoots === 0 ?
            (<div className='no-doots no-doots-up' onClick={(e) => this.giveUpdoot(e, this.props.post)}>
              <i className="fas fa-angle-double-up" />
            </div>) : (<div className='updooted' onClick={(e) => this.removeDoot(e, this.props.post)}>
              <i className="fas fa-angle-double-up" />
            </div>)
        }
      </div>
    )
  }

  renderDowndoots(){
    const downdoots = this.props.post.downdoots
    return (
      <div>
        {
          downdoots === 0 ?
            (<div className='no-doots no-doots-down' onClick={(e) => this.props.giveDowndoot(e, this.props.post)}>
              <i className="fas fa-angle-double-down" />
            </div>) : (<div className='downdooted' onClick={(e) => this.removeDoot(e, this.props.post)}>
              <i className="fas fa-angle-double-down" />
            </div>)
        }
      </div>
    )
  }

  render(){
    return(
      <div className="karma-bar">
        {this.renderUpdoots()}
        <span className="karma-bar">{this.props.post.updoots.length}</span>
        {this.renderDowndoots()}
      </div>
    )
  }
}

export default KarmaBar;

