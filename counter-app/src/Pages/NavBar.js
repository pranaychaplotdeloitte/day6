// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ margin: '10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '10px' }}>About Us</Link>
      <Link to="/random" style={{ margin: '10px' }}>Random</Link>
      <Link to="/counter" style={{ margin: '10px' }}>Counter</Link>
    </nav>
  );
};

export default NavBar;
