import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import { Redirect, Route } from 'react-router-dom';
import CreatePostFormContainer from '../posts/create_post_form_container';
import { Link, NavLink } from 'react-router-dom';


//WORK IN PROGRESS

const SubSidebar = props => {
  Moment.locale('en');


  return (<div className="sidebar-container">
    <div className="box">
      <div className="box-banner"><h1>About Community</h1></div>
      <div className="box-content">
        <div className="description">
          <span className="description">{props.subcattitInfo.description}</span>
        </div>

        <div className="stats-container">
          <div className="subscriber-info">
            <span className="stats"> 1.4k </span>
            <span className="subtitle">making fwend</span>
          </div>
          <div className="subscriber-info">
            <span className="stats">682</span>
            <span className="subtitle">playing right now</span>
          </div>
          <div className="spacer"></div>
        </div>

        <div className="create-box">
          <span className="created-at">Created {Moment(props.subcattitInfo.created_at).format('MMM DD, YYYY')} </span>
          <button className="create-btn">
            <Route exact path="/mew/:subcattit/submit" component={CreatePostFormContainer} />
            <Link to={{ pathname: `/mew/${props.subcattit}/submit`, state: { subcattit_info: props.subcattitInfo } }}>Create Post</Link>
          </button>
        </div>
      </div>
    </div>
  </div>)
}

export default SubSidebar;