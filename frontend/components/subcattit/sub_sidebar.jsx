import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import { Redirect, Route } from 'react-router-dom';
import CreatePostFormContainer from '../posts/create_post_form_container';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

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
                      : (<a onClick={() => props.openModal('login')}>Create Post</a>)
                  }
                </button>
            ) : (null)
          }
        </div>
      </div>
    </div>

        {
          (props.page === "subcattit") ?
     ( <div className="box">
        <div className="box-banner"><h1>Suggested Subcattits</h1></div>
        <div className="box-content">
          <NavLink className="subcattit-link" to="/mew/owls">Owls</NavLink>
          <NavLink className="subcattit-link" to="/mew/herbs">Herbs</NavLink>
          <NavLink className="subcattit-link" to="/mew/catnip">Catnip</NavLink>
          <NavLink className="subcattit-link" to="/mew/lit-cats">Lit-Cats</NavLink>
          <NavLink className="subcattit-link" to="/mew/mice">Mice</NavLink>
        </div>
      </div>) : (null)
      }
  </div>)
}


const mapStateToProps = (state, ownProps) => {
  // const info = state.ui.postShow.name
  return {
    // subcattit_obj: findSubcat(state, info),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeShow: () => dispatch(closeShow()),
    fetchPost: postId => dispatch(fetchPost(postId)),
    fetchSubcattit: subcattit => dispatch(fetchSubcattit(subcattit))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubSidebar);

