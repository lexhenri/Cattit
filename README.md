# Production README

### Cattit is Reddit, but for cats. They post human memes. We've come full circle.

Link to live Heroku app: https://cattit.herokuapp.com/mew/mice

Link to demo video: https://vimeo.com/399243286

Quick gif of demo video!

![demo](https://i.imgur.com/zfo1fk2s.gif)

Cattit's frontend components were developed and are rendered in React, while backend routes and storage is handled through Rails API and PostgreSQL. Cattit runs on Ruby v5.2.4

The Subcattit (Subreddit) component is a single view component that updates and remounts upon URL change. The ids of all Subcattits are unique names, as keeping to the spirit of Reddit's mini-forums was important to me in the design process. This caused a few challenges through routing, as the association between posts and their Subcattit was through ID. This was easily solved by implementing a selector that mapped the entire Subcattit object to props, as well as a single unique ID string. 

![subcattit_ss](https://i.imgur.com/eTrH6lr.png)

While each component of Cattit (Subcattit, Show Modal, Posts, Sidebar, Votes, etc.) is able to re-render separately without affecting other components, the issue of prop threading due to the slightly nested nature of the Subcattit structure was a challenge. I got a nice taste of "Wrapper Hell". However, I then discovered Hooks!

Here's the code for the "updoots" (Votes/Karma) component:

```
function Updoots (props) {

  const [userUpdoot, setUpdoot] = useState(props.userUpdoots);
  const [userDowndoot, setDowndoot] = useState(props.userDowndoots);
  const [postDoot, setPostdoot] = useState(props.postDoots);
  const newDoot = { post_id: props.post.id }

  useEffect(() => {
    setUpdoot(props.userUpdoots);
  }, [props.userUpdoots]);

  useEffect(() => {
    setDowndoot(props.userDowndoots);
  }, [props.userDowndoots]);

  useEffect(() => {
    setPostdoot(props.postDoots);
  }, [props.postDoots])


  function findUserUpdoot(updoots, currentUser) {
    let upDoot = {};
    if (currentUser === undefined) return null;
    Object.values(updoots)
      .forEach(updoot => updoot.user_id === currentUser.id ? 
        upDoot = updoot : null);
    return upDoot;
  }

  function findUserDowndoot(downdoots, currentUser) {
    let downDoot = {};
    if (currentUser === undefined) return null;
    Object.values(downdoots)
      .forEach(downdoot => downdoot.user_id === currentUser.id ? 
        downDoot = downdoot : null);
    return downDoot;
  }

  function removeDoot(e) {
    e.preventDefault();
    e.stopPropagation();
    if (userDowndoot) {
      const downdoot = findUserDowndoot(props.post.downdoots, props.currentUser)
      props.removeDowndoot(downdoot);
      setDowndoot(!userDowndoot);
      setPostdoot(props.postDoots)
    } else if (userUpdoot) {
      const updoot = findUserUpdoot(props.post.updoots, props.currentUser);
      props.removeUpdoot(updoot);
      setUpdoot(!userUpdoot);
      setPostdoot(props.postDoots)
    }
  }

  function handleUpdoot(e) {
    e.preventDefault();
    e.stopPropagation();
    if (props.currentUser !== undefined) {
      props.giveUpdoot(newDoot);
      setUpdoot(!userUpdoot);
      if (userDowndoot) {
        setDowndoot(!userDowndoot);
        const downdoot = findUserDowndoot(props.post.downdoots, props.currentUser)
        props.removeDowndoot(downdoot);
      }
      setPostdoot(props.postDoots)
    }
    else {
      props.openModal("login");
    }
  }

  function handleDowndoot(e) {
    e.preventDefault();
    e.stopPropagation();
    if (props.currentUser !== undefined) {
      props.giveDowndoot(newDoot);
      setDowndoot(!userDowndoot);
      if (userUpdoot) {
        setUpdoot(!userUpdoot);
        const updoot = findUserUpdoot(props.post.updoots, props.currentUser);
        props.removeUpdoot(updoot);
      }
      setPostdoot(props.postDoots)
    } else {
      props.openModal("login");
    }
  }

  const renderUserUpdoots = () => {
    return (
      <div>
        {
          !userUpdoot ?
            (<div className='no-doots no-doots-up' onClick={(e) => handleUpdoot(e)}>
              <i className="fas fa-angle-double-up" />
            </div>) : (<div className='updooted' onClick={(e) => removeDoot(e)}>
              <i className="fas fa-angle-double-up" />
            </div>)
        }
      </div>
    )
  }

  const renderUserDowndoots = () => {
    return (
      <div>
        {
          !userDowndoot ?
            (<div className='no-doots no-doots-down' onClick={(e) => handleDowndoot(e)}>
              <i className="fas fa-angle-double-down" />
            </div>) : (<div className='downdooted' onClick={(e) => removeDoot(e)}>
              <i className="fas fa-angle-double-down" />
            </div>)
        }
      </div>
    )
  }

  return (

    <div className="karma-container">

     <div>{renderUserUpdoots(props.post)}</div>   
      <span className="karma-container">{props.postDoots}</span>
      <div> {renderUserDowndoots(props.post)}</div>
      
    </div>
    )
  }
```
(TODO: Reduce O(n) queries and implement in the back end to improve runtime upon scaling)


Posts are filtered in the Post controller in the rails backend, so each "index" the Ajax fetch call delivers to Subcattit only contains posts that belong to that Subcattit. The parent Subcattit component makes two Ajax calls: one for the Subcattit, and one for the Posts. The posts are then threaded to the Post Container rendered within the component. I hadn't yet transitioned to Hooks when I wrote this.


Subcattit:
```
 componentDidMount(){
    this.props.clearError();
    this.props.fetchSubcattit(this.props.subcattit);
    this.props.fetchPosts(this.props.subcattit);
    }
  

  componentDidUpdate(preProps, preState) { 
    if (preProps.match.params.subcattit !== this.props.match.params.subcattit) {
      this.props.fetchSubcattit(this.props.subcattit)
      this.props.fetchPosts(this.props.subcattit);
      this.setState({
        subcattit: this.props.subcattit,
        posts: this.props.posts
      })
      this.props.clearError();

      }
  }
  ```
 Posts:
 ```
 componentDidMount(){
    this.setState({
      subcattit: this.props.subcattit
    })
  }

  componentDidUpdate(preProps){
    if (preProps.subcattit !==  this.props.subcattit) {
      this.props.fetchPosts(this.props.subcattit);
  }
}
```

The Post Show Modal also renders separately from the Post Index, and the Modal component passed the post within the Post Index. I tried to make Ajax calls only in the parent component to limit challenges with asychronous calls and rendering.

![postShow](https://i.imgur.com/3NWAyeu.png)

The subscribe function is also written in Hooks. The state persists and will continue to show if a user has subscribed to the Subcattit, and the component will re-render and update when the user navigates to a new Subcattit. Here are a few snippets of the Subscribe component:

```
const SubscribeButton = ({subcattitName, subcattit, currentUser, createSubscribe, openModal, removeSubscribe, hasSub}) => {

  const [user_id, setCurrentUser] = useState("")
  const [subscribed, setSubscribe] = useState(hasSub);
  const [subcattit_id, setSubcattitId] = useState(subcattitName);
  const [subscribeText, setSubscribeText] = useState("Joined");
  const [currentSubcat, setCurrentSubcat] = useState(subcattit);

  useEffect (() => {
    if (currentUser){
      setCurrentUser(currentUser.id);
    }
  }, [currentUser])

  useEffect(() => {
    setSubscribe(hasSub);
  }, [hasSub])

  useEffect(() => {
    setCurrentSubcat(subcattit)
    setSubscribe(hasSub);
  }, [subcattit]);
```
Handlers:

```

  function handleSubscribe(e) {
    if (currentUser) {
      e.preventDefault();
      e.stopPropagation();
      createSubscribe({subcattit_id, user_id});
      setSubscribe(true);
    } else {
      openModal("login");
    }
  }

  function handleUnSubscribe(e) {
    if (currentUser) {
      e.preventDefault();
      e.stopPropagation();
      const unSub = findUserSubscripton()
      removeSubscribe(unSub);
      setSubscribe(false);
    } else {
      openModal("login");
    }
  }
  
   function renderLeaveButton(){
    return (
      <button className="follow-btn" 
              onClick={(e) => handleUnSubscribe(e)} 
              onMouseEnter={(e) => onMouseover(e)}
              onMouseLeave={(e) => onMouseout(e)}>
          <span className="follow-btn-text">{subscribeText}</span>   
      </button>
    )
  }

  function renderJoinButton(){
    return (
      <button className="follow-btn"
        onClick={(e) => handleSubscribe(e)}>
        <span className="follow-btn-text">Join</span>
      </button>
    )
  }
  ```
  
 The Create Post component is actually three components that render upon state change in the parent component. This component also makes use of a spinner UI element to indicate to the user that their post is being processed.
 
 Text input (handles Rich Text):
 ![createForm](https://i.imgur.com/awQtLqi.png)
 
 Image upload (provides image preview animation):
 ![imageUpload](https://i.imgur.com/nvnsuLU.png)
 
 Here is a small bit of rendering logic from the main Create Post component, which is a class component. Each post type is a separate functional component. The tab state is handled separately, as they required additional changes to state and appearance. 
 
 ```
 renderTextButton(){
    return (
      <div 
        className={this.state.clicked === 'first' ? 'tab-highlight' : 'tab-button'} 
        id="first" 
        onClick={e => this.toggleTab(e)}>
          <div 
            className={this.state.post_type === 'text' ? 'content-highlight' : 'tab-content'} 
            onClick={() => this.updateType('text')}>
       //SVG element here
        <span>Post</span>
      </div>
        </div>
    )
    }

  renderImageButton(){
    return (
      <div 
        className={this.state.clicked === 'second' ? 'tab-highlight' : 'tab-mid'} 
        id="second" 
        onClick={e => this.toggleTab(e)}>
        <div 
          className={this.state.post_type === 'image' ? 'content-highlight' : 'tab-content'} 
          onClick={() => this.updateType('image')}>
        //SVG element here
          <span>Image</span>
        </div>
        </div>
    )
  }

  renderLinkButton(){
    return (
      <div 
        className={this.state.clicked === 'third' ? 'tab-highlight' : 'tab-button'} 
        id="third" 
        onClick={e => this.toggleTab(e)}>
        <div 
          className={this.state.post_type === 'link' ? 'content-highlight' : 'tab-content'} 
           onClick={() => this.updateType('link')}>
         //SVG element here
        <span>Link</span>
      </div> 
      </div>        
    )
  }
```

### Is this project ongoing?

Yes! Because why not? My next plan is to do the Feed component that delivers posts from subscribed Subcattits to the user. After this is implemented, I will finally move on to comments. There are also little things that I would love to improve on!

### Hey, have some more code:

This is for an entire Subcattit component:

```
class Subcattit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      subcattit: this.props.subcattit,
      posts: this.props.posts,
      speed: 5,
    }
}
  
  componentDidMount(){
    this.props.clearError();
    this.props.fetchSubcattit(this.props.subcattit);
    this.props.fetchPosts(this.props.subcattit);
    }
  

  componentDidUpdate(preProps, preState) { 
    if (preProps.match.params.subcattit !== this.props.match.params.subcattit) {
      this.props.fetchSubcattit(this.props.subcattit)
      this.props.fetchPosts(this.props.subcattit);
      this.setState({
        subcattit: this.props.subcattit,
        posts: this.props.posts
      })
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
            <SubscribeButton 
              subcattitName={this.props.subcattitInfo.name} 
              currentUser={this.props.currentUser} 
              subcattit={this.props.subcattitInfo}/>        
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
           <HideUntilLoaded 
            animationIn="bounceIn"
            Spinner={() => 
            <img 
              style={{ animation: `spin ${this.state.speed}s linear infinite` }} 
              src={SpinLogo} alt="img" />}
            >
          <PostIndexContainer 
            subcattit={this.state.subcattit} 
            posts={this.state.posts}/> 
           </HideUntilLoaded>
          </div>
          <div className='sidebar-container'>
        <SubSidebar 
          subcattit={this.props.subcattitInfo} 
          page={"subcattit"} 
          currentUser={this.props.currentUser} 
          openModal={this.props.openModal}/>
        <SubscriptionSidebar />
          </div> 
          </div>
      </div>
    )
  }
}

export default Subcattit;
```

Thanks so much for reading!

Does the word Subcattit look really funny to you now? Because it does for me.

![ohNoes](https://i.imgur.com/D2aBwmq.gif)
