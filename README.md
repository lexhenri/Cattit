# README

### Cattit is Reddit, but for cats. They post human memes. We've come full circle.

Link to live Heroku app: https://cattit.herokuapp.com/#/

Cattit's frontend components were developed and are rendered in React, while backend routes and storage is handled through a Rails API. Cattit runs on Ruby v5.2.1.

The Subcattit (Subreddit) component is a single view component that updates and remounts upon URL change. The ids of all Subcattits are unique names, as keeping to the spirit of Reddit's mini-forums was important to me in the design process. This caused a few challenges through routing, as the association between posts and their Subcattit was through ID. This was easily solved by implementing a selector that mapped the entire Subcattit object to props, as well as a single unique ID string. 

While each component of Cattit (Subcattit, Show Modal, Posts, Sidebar, Dropdown, Nav Bar, and Session Modal) is able to re-render separately without affecting other components, the issue of prop threading due to the slightly nested nature of the Subcattit structure was a challenge. Posts are filtered in the Post controller in the rails backend, so each "index" the Ajax fetch call delivers to Subcattit only contains posts that belong to that Subcattit, and that index is rendered on the Subcattit show page, making it necessary to also update Posts on url change, which is easily done through a fetch in componentDidUpdate. I believe fetching these separately and not relying on the Subcattit show page itself to refresh the post index is a cleaner and potentially faster method, should the number of posts per Subcattit expand (especially with the eventual implementation of infinite scroll).

This also allows the app to be dynamic (such as hiding the sidebar on smaller screen-sizes, etc.).

The Post Show Modal also renders separately from the Post Index, though the appropriate post is passed through the openModal function. Currently, the app has a decent amount of basic functionality (including error handling), but comments, upvotes, and the front page feed can be easily added, especially because each component is standalone (for example, upvotes can be added to posts without refactoring anything else). 

### You may be wondering why my node modules are not gitignored!

This is because of a bug within the Quill package that is used for creating posts. In order to use it and have any functionality, we had to edit the package file. In the future this could be solved by doing a custom package, but since Cattit is currently (relatively) light, I've just been pushing all modules to git. In the future, Quill may be replaced by another library such as Slate, etc.

### Hey, have some code:

The following is the code for an entire Subcattit:

```
import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
import Moment from 'moment';
import { Redirect, Route } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import SubSidebar from './sub_sidebar';


class Subcattit extends React.Component {
  constructor(props){
    super(props);
 
}
  
  componentDidMount(){
    this.props.clearError();
    this.props.fetchSubcattit(this.props.subcattit)

    }
  

  componentDidUpdate(preProps, preState) { 
    if (preProps.match.params.subcattit !== this.props.match.params.subcattit) {
      this.props.fetchSubcattit(this.props.subcattit)
      console.log("update!")
      this.props.clearError();

      }
  }
  
  render(){
    Moment.locale('en');
    if (this.props.subcattitInfo === undefined) return null;

    return (
      <div>
      <div className="top-banner">
        <img src={this.props.subcattitInfo.bannerUrl} />
      </div>
        <div className='desc-banner'>
          <div className="header-content">
              <img src={this.props.subcattitInfo.iconUrl} className="header-pic" />
            <div className="text-container">
          <h1 className="header-title">{this.props.subcattitInfo.name}</h1>
          <h2 className='subcat-title'>mew/{this.props.subcattitInfo.name}</h2>
            </div>
          <button className="follow-btn"><span>Join</span></button>
          </div>
          </div>

        <div className="subcattit-container">
          <div className="subcat-feed-container">
            <div className="mini-submit">
            {
              (this.props.currentUser !== undefined) ?
                (<Link to={{ pathname: `/mew/${this.props.subcattit}/submit` }}>
                      <input className="mini-input" placeholder="Create Post" />
                  </Link> 
                  ) : (<a onClick={() => this.props.openModal('login')} >
                      <input className="mini-input" placeholder="Create Post" />
                    </a>)
            }
          </div>
        <PostIndexContainer subcattit={this.props.subcattit} subcattitInfo={this.props.subcattitInfo}/>
          </div>
        <SubSidebar subcattit={this.props.subcattit} subcattitInfo={this.props.subcattitInfo} page={"subcattit"} currentUser={this.props.currentUser} openModal={this.props.openModal}/>
      
          </div> 
          </div>
    )
  }
}

export default Subcattit;
```

Does the word Subcattit look really funny to you now? Because it does for me.

![ohNoes](https://i.imgur.com/D2aBwmq.gif)
