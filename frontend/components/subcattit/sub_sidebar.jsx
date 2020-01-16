import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import { Redirect, Route } from 'react-router-dom';
import CreatePostFormContainer from '../posts/create_post_form_container';
import { Link, NavLink } from 'react-router-dom';


//WORK IN PROGRESS

const SubSidebar = props => {
  Moment.locale('en');


  return (
  <div className="sidebar-container">
    <div className="box">
      <div className="box-banner"><h1>About Community</h1></div>
      <div className="box-content">
        <div className="description">
          <span className="description">{props.subcattitInfo.description}</span>
        </div>

        <div className="stats-container">
          <div className="subscriber-info">
              <span className="stats"> {props.subcattitInfo.num_members} </span>
              <span className="subtitle">{props.subcattitInfo.member_desc}</span>
          </div>
          <div className="subscriber-info">
              <span className="stats">{props.subcattitInfo.num_online}</span>
              <span className="subtitle">{props.subcattitInfo.online_desc}</span>
          </div>
          <div className="spacer"></div>
        </div>

        <div className="create-box">
          <span className="created-at">Created {Moment(props.subcattitInfo.created_at).format('MMM DD, YYYY')} </span>
          {
            (props.page === "subcattit") ? (
                <button className="create-btn">
                  {
                    (props.currentUser !== undefined) ?
                      (<Link to={{ pathname: `/mew/${props.subcattit}/submit`, state: { subcattit_info: props.subcattitInfo } }}>Create Post</Link>)
                      : (<Link onClick={() => props.openModal('login')}>Create Post</Link>)
                  }
                </button>
            ) : (null)
          }
        </div>
      </div>
    </div>
  </div>)
}

export default SubSidebar;