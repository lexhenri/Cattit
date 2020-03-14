import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';


const Suggested = props => {
  return (
    <div className="box">
      <div className="box-banner"><h1>Visit Recommended Subcattits</h1></div>
      <div className="box-content">
        <NavLink className="subcattit-link" to="/mew/owls">Owls</NavLink>
        <NavLink className="subcattit-link" to="/mew/herbs">Herbs</NavLink>
        <NavLink className="subcattit-link" to="/mew/catnip">Catnip</NavLink>
        <NavLink className="subcattit-link" to="/mew/lit-cats">Lit-Cats</NavLink>
        <NavLink className="subcattit-link" to="/mew/mice">Mice</NavLink>
      </div>
    </div>
  )
}

export default Suggested;