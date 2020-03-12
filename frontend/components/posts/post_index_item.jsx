import React, { useState, useEffect } from 'react';
import TimeAgo from 'timeago-react';

export const RenderLink = props => {
  return (
    <div>
    {
        props.view === "show" ? (<div className="post-body-show"><a href={props.post.linkUrl}><p>{props.post.linkUrl}</p></a></div>)
          : (<div className="post-link"><a href={props.post.linkUrl}><p>{props.post.linkUrl}</p></a></div>)
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

// export const RenderIndexView = props => {
//   return (
//     <div>
//         {
//         props.post.body ? (
//             <div className="bottom-fade" >
//         <div className="post-body" dangerouslySetInnerHTML={{ __html: props.post.body }} />
//           </div> ) :
//           (<div className="post-image">
//             <img src={props.post.imageUrl} />
//           </div> )
//         }
//     </div>
//   )
// }

// export const RenderShowView = props => {
//   return (
//     <div>
//       {
//         props.post.body ? (<div className="post-body-show" dangerouslySetInnerHTML={{ __html: props.post.body }} />)
//           : (<div className="post-body-show">
//             <img src={props.post.imageUrl} />
//           </div>)
//       }
//     </div>
//   )
// }



const PostIndexItem = props => {
  // let num_comments = props.post.comment_ids.length
  let type;
  if (props.post.imageUrl) {
    type = 0;
  } else if (props.post.linkUrl) {
    type = 1;
  } else if (props.post.body) {
    type = 2;
  }
  
  return (
    <div className="post">
      <div className="karma-bar">
        <i className="fas fa-angle-double-up"></i>
        <span className="karma-bar">{props.post.upvotes}</span>
        <i className="fas fa-angle-double-down"></i>
      </div>
      <div className="content">
        <div className="post-head">
        <div className="top-info">
          <span>Posted by {props.post.username}</span>
          <span className="time-ago"><TimeAgo datetime={props.post.created_at} locale='en' /></span>
          </div>
      <div className="post-title">
          <h3>{props.post.title}</h3>
      </div>
        </div>

       {/* {
         (props.view === "show") ? (<RenderShowView post={props.post} />)
         : (<RenderIndexView post={props.post} />)
       } */}
        {(() => {
          switch (type) {
            case 0:
              return <RenderImage post={props.post} />;
              break;
            case 1:
              return <RenderLink post={props.post} />;
              break;
            case 2:
              return <RenderText post={props.post} />;
              break;
            default:
              return null;
          }
        })()}

        <div className="post-bottom">
            {
            (props.post.num_comments) ? (<div className="comments"> <i className="fas fa-comment-alt comment-btn"></i>{props.post.num_comments} Comments</div>) : (<div className="comments"> <i className="fas fa-comment-alt comment-btn"></i>0 Comments</div>)
            } 
        </div>
      </div>
    </div>
  )
}

export default PostIndexItem;