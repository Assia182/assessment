import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <div className="navbar bg-body-tertiary">
      <h1>
        <NavLink className="textArea" to="/">
          <span className="textArea">Home</span>
        </NavLink>
      </h1>
    </div>
  );
};

export default Header;


