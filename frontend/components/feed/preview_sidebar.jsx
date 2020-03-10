import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import { Redirect, Route } from 'react-router-dom';
import CreatePostFormContainer from '../posts/create_post_form_container';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

//WORK IN PROGRESS

const PreviewSidebar = props => {
  Moment.locale('en');


  return (
    <div className="sidebar-container">
      <div className="box">
        <div className="box-banner"><h1>About Community</h1></div>
        <div className="box-content">
          <div className="description">
            <span className="description">{props.subcattit.description}</span>
          </div>

          <div className="stats-container">
            <div className="subscriber-info">
              <span className="stats"> {props.subcattit.num_members} </span>
              <span className="subtitle">{props.subcattit.member_desc}</span>
            </div>
            <div className="subscriber-info">
              <span className="stats">{props.subcattit.num_online}</span>
              <span className="subtitle">{props.subcattit.online_desc}</span>
            </div>
            <div className="spacer"></div>
          </div>

          <div className="create-box">
            <span className="created-at">Created {Moment(props.subcattit.created_at).format('MMM DD, YYYY')} </span>
            {
              (props.page === "subcattit") ? (
                <button className="create-btn">
                  {
                    (props.currentUser !== undefined) ?
                      (<Link to={{ pathname: `/mew/${props.subcattit}/submit`, state: { subcattit_info: props.subcattit } }}>Create Post</Link>)
                      : (<a onClick={() => props.openModal('login')}>Create Post</a>)
                  }
                </button>
              ) : (null)
            }
          </div>
        </div>
      </div>
    </div>)
}


const mapStateToProps = (state, ownProps) => {
  const info = state.ui.preview.name
  return {
    subcattit: findSubcat(ownProps.subcattit, info),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closePreview: () => dispatch(closePreview()),
    fetchPost: postId => dispatch(fetchPost(postId)),
    fetchSubcattit: subcattit => dispatch(fetchSubcattit(subcattit))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewSidebar);

