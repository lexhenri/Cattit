import React, { useState, useEffect } from 'react';
import TimeAgo from 'timeago-react';

export const RenderLink = props => {
  return (
    <div>
    {
        props.view === "show" ? (<div className="post-body-show"><a href={props.post.linkUrl}>{props.post.linkUrl}</a></div>)
          : (<div className="post-link"><a href={props.post.linkUrl}>{props.post.linkUrl}</a></div>)
      }
   </div>
  )
}

export const RenderImage = props => {
  return (
    <div>
    {
      props.view === "show" ? (<div className="post-body-show"><img src={props.post.imageUrl} /></div>)
      : (<div className="post-image"><img src={props.post.imageUrl} /></div> )
    }
    </div>
  )
}

export const RenderText = props => {
  return (
    <div>
      {
        props.view === "show" ? (<div className="post-body-show" dangerouslySetInnerHTML={{ __html: props.post.body }} />)
          : (<div className="bottom-fade" >
              <div className="post-body" dangerouslySetInnerHTML={{ __html: props.post.body }} />
            </div>)
      }
    </div>
  )
}

export const Updooted = props => {
  return (
    <div>
    {
      props.updoot === 0 ? 
      (<div className='no-doots' onClick={(e) => props.giveUpdoot(e, props.post)}>
        <i className="fas fa-angle-double-up" />
      </div>) : (<div className='updooted' onClick={(e) => props.removeDoot(e, props.post)}>
        <i className="fas fa-angle-double-up" />
      </div>)
    }
    </div>
  )
}

export const Downdooted = props => {
  return (

    <div>
      {
        props.downdoot === 0 ?
          (<div className='no-doots' onClick={(e) => props.giveDowndoot(e, props.post)}>
            <i className="fas fa-angle-double-down" />
          </div>) : (<div className='downdooted' onClick={(e) => props.removeDoot(e, props.post)}>
            <i className="fas fa-angle-double-down" />
          </div>)
      }
    </div>
    // <div className='downdooted' onClick={() => props.giveDowndoot()}>
    //   <i className="fas fa-angle-double-up" />
    // </div>
  )
}


        

const PostIndexItem = props => {


  let type;
  if (props.post.imageUrl) {
    type = 0;
  } else if (props.post.linkUrl) {
    type = 1;
  } else if (props.post.body) {
    type = 2;
  }

  // debugger;
  return (
    <div className="post">
      <div className="karma-bar">
       <Updooted giveUpdoot={props.giveUpdoot} removeDoot={props.removeDoot} updoot={props.post.updoots.length} post={props.post}/>
        <span className="karma-bar">{props.post.updoots.length}</span>
        <Downdooted giveDowndoot={props.giveDowndoot} removeDoot={props.removeDoot} downdoot={props.post.downdoots.length} post={props.post} />
      </div>
     
      <div className="content">
      
        <div className="post-head">
        <div className="top-info">
        <span className="subcat-name"><a href={`/mew/${props.post.name}`}>mew/{props.post.name}</a></span>
          <span>Posted by {props.post.username}</span>
          <span className="time-ago"><TimeAgo datetime={props.post.created_at} locale='en' /></span>
          </div>
      <div className="post-title">
          <h3>{props.post.title}</h3>
      </div>
        </div>
        {(() => {
          switch (type) {
            case 0:
              return <RenderImage post={props.post} view={props.view}/>;
              break;
            case 1:
              return <RenderLink post={props.post} view={props.view}/>;
              break;
            case 2:
              return <RenderText post={props.post} view={props.view}/>;
              break;
            default:
              return null;
          }
        })()}  
        <div className="post-bottom">
            {
            (props.post.num_comments) ? (<div className="comments"> <i className="fas fa-comment-alt comment-btn"></i>{props.post.num_comments} Comments</div>) : (<div className="comments"> <i className="fas fa-comment-alt comment-btn"></i>0 Comments</div>)
            } 
          {props.currentUser !== undefined ? (props.currentUser.id === props.post.author_id) ?
            (
              <div className="remove-post" id={props.post.id} onClick={props.removeHandler}>
                Delete
              </div>) : (null) : null }
        </div>
      </div>
    </div>
  )
}

export default PostIndexItem;